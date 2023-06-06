import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from './icon.png'

const Map_Display = () =>{
    const mapRef = useRef(null);
    const [centerMarker, setCenterMarker] = useState(null);

    //改下面這三個
    const lat = 25; //緯度
    const lng = 121.5; //精度
    const size = 16; //放大倍率



    useEffect(() => {
      mapRef.current = L.map('map', {
        center: [lat, lng],
        zoom: size,
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

  

        // 更新圖標位置
        centerMarker.setLatLng(center);
      }
    };
  
    return (
      <div className="map-container">
        <div id="map" style={{ width: '100%', height: '400px' }} />
      </div>
    );
  };




  export default Map_Display;

