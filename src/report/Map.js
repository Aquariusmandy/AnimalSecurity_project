import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from './icon.png'
import { setLat } from './store'; // 导入setType动作创建函数
import { setLon } from './store'; // 导入setType动作创建函数
import { connect } from 'react-redux';
import './Map.css';

const MapComponent2 = ({ lat, lon, setLat, setLon }) => {



    const mapRef = useRef(null);
    const [centerMarker, setCenterMarker] = useState(null);
  
    useEffect(() => {
      mapRef.current = L.map('map', {
        center: [lat, lon],
        zoom: 13,
      });
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
      }).addTo(mapRef.current);
  
      // 創建標記點
       const centerIcon = L.icon({
        iconUrl: icon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
  
      const marker = L.marker(mapRef.current.getCenter(), {
        icon: centerIcon,
      }).addTo(mapRef.current);
  
      setCenterMarker(marker);
   
      return () => {
        mapRef.current.remove();
      };
    }, []);
  
    const getCenter = () => {
      if (mapRef.current) {
        //      if (mapRef.current && centerMarker) {
        const center = mapRef.current.getCenter();
        console.log(center);
        setLat(center.lat);
        setLon(center.lng);
  

        // 更新圖標位置
        centerMarker.setLatLng(center);
      }
    };
  
    return (
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '400px' }} />
        <div className="map-button-container">
          <button onClick={getCenter}>設定地點</button>
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    lat: state.lat, // 从Redux的store中获取Type变量的值
    lon: state.lon,
  });
  
  const mapDispatchToProps = {
    setLat, // 将setType动作创建函数映射到组件的props中
    setLon,
  };


  export default connect(mapStateToProps, mapDispatchToProps)(MapComponent2);
