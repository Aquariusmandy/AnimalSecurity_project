import 'leaflet/dist/leaflet.css';
import icon from './icon.png'
import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';


const MapDisplay = ({ lat, lon, size }) => {
  const mapRef = useRef(null);
  const [centerMarker, setCenterMarker] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map(containerRef.current).setView([lat, lon], size);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

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

  return (
    <div className="map-container" ref={containerRef} style={{width: '100%' , height: '300px' }} />
  );
};

export default MapDisplay;


