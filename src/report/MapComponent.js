import React, { useEffect } from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from './icon.png';
import { setLat } from './store'; // 导入setType动作创建函数
import { setLon } from './store'; // 导入setType动作创建函数

import { useMap } from 'react-leaflet';



const MapComponent = ({ lat, lon, setLat, setLon }) => {
  const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const [center, setCenter] = React.useState([lat, lon]);
  const mapRef = React.useRef(null);

  useEffect(() => {
    mapRef.current = mapRef.current?.leafletElement;
  }, []);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setLat(lat);
    setLon(lng);
  };

  const getCenter = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      console.log(center); // 或根據您的需求進行處理
    }
  };

  return (
    <div>
    <MapContainer center={center} zoom={16} style={{ height: '400px', width: '500px' }} onClick={handleMapClick} whenCreated={(map) => (mapRef.current = map)}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]} icon={markerIcon} />

    </MapContainer>
    <button onClick={getCenter}>設定中心</button>
    </div>
    
  );
};


const mapStateToProps = (state) => {
  return {
    lat: state.lat,
    lon: state.lon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLat: (lat) => dispatch({ type: 'SET_LAT', payload: lat }),
    setLon: (lon) => dispatch({ type: 'SET_LON', payload: lon }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
