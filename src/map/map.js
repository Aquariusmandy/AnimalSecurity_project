import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

axios.defaults.withCredentials = true

// 修復 leaflet 中的 marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function Map() {
  
  // 抓出所有表單回覆資料
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://127.0.0.1:5000/get_MapData');
    setData(response.data);
  };

  useEffect(() => {
    if (data.length >= 0) {

      //台灣的邊界
      const taiwanBounds = L.latLngBounds(
        L.latLng(21.8963, 119.3405), // Southwest coordinate (bottom-left)
        L.latLng(25.3846, 124.4765) // Northeast coordinate (top-right)
      );

      // 創建地圖
      const map = L.map('map').fitBounds(taiwanBounds);

      // 底圖
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
      }).addTo(map);

      // 圖层
      const wanderingLayer = L.layerGroup();
      const rescuingLayer = L.layerGroup();
      const gettingLostLayer = L.layerGroup();

      for (const info of data) {
        const marker = L.marker([info.lat, info.lon]).bindPopup(
          '<img src="' +
            info.img +
            '" style="height:120px;width:200px;">' +
            '<br><br><b>' +
            info.animal_type +
            '</b> | ' +
            info.ligation +
            ' | ' +
            info.hurt +
            '<br>' +
            info.detail
        );

        if (info.case_type === '流浪動物') {
          wanderingLayer.addLayer(marker);
        } else if (info.case_type === '動物救援') {
          rescuingLayer.addLayer(marker);
        } else {
          gettingLostLayer.addLayer(marker);
        }
      }

      // 疊加圖層
      const overlayMaps = {
        流浪動物: wanderingLayer,
        動物救援: rescuingLayer,
        走失動物: gettingLostLayer,
      };

      L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

      // 預設初始化顯示的圖層
      map.addLayer(wanderingLayer);

      // 點擊點位時跳出 pop-up
      wanderingLayer.eachLayer(function (layer) {
        layer.on('click', function (e) {
          this.openPopup();
        });
      });

      // 因為不能 render，用這個怪方法 : 清除地圖及圖層
      return function cleanup() {
        map.remove();
        wanderingLayer.clearLayers();
        rescuingLayer.clearLayers();
        gettingLostLayer.clearLayers();
      };
    }
  }, [data]);

  return (<>
  <div id="maphead" style={{ margin: '150px 90px 50px 80px', fontWeight: 'bold', color: '#42A497', textAlign: 'center', fontSize: '25px' }}>流浪動物點位地圖</div>
  <div id="map" style={{ height: '600px', margin: '10px 90px 100px 80px' }}></div></>
  )
}

export default Map;