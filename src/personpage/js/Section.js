import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'popper.js';
import '../plugins/bootstrap/bootstrap.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.css';
import Side from './Side.js';
import MapDisplay from './MapDisplay.js';
axios.defaults.withCredentials = true
function Section() {
  const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchUserList();
    }, []);
    const fetchUserList = async () => {
      const response = await axios.get('http://127.0.0.1:5000/user');
      setUsers(response.data);
    };

  const [dataCount, setDataCount] = useState(0);
    useEffect(() => {
      fetchDataCount();
    }, []);
    const fetchDataCount = async () => {
        const response = await axios.get('http://127.0.0.1:5000/count'); // 檢查回傳的 count 值
        setDataCount(response.data);
    };

  const [location, setLocation] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/location');
      const data = response.data;
      if (data.length > 0) {
        const firstItem = data[0];
        const latitude = firstItem.lat;
        const longitude = firstItem.lon;
        setLocation({ lat: latitude, lon: longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/image').then(response => {
      setImageData(response.data[0].img);
      console.log(response.data[0])
  });
}, []);

  return (
    <section>
      <Side />
      <div className="custom-block">
        <div className="order-2 order-lg-2 mb-5 p-3 mb-lg-0">
        {dataCount === 0 ? (
          <article className="row mb-5 border-color m-3">
          <h4 className="col-12 post-title p-3">還沒有回報資訊，快使用回報系統建立個人回報紀錄吧!!</h4>
        </article>
        ) :
        (Array.from({ length: dataCount }, (_, index) => (
          <article key={index} className="row mb-5 border-color m-3">
            <h4 className="col-12 post-title p-3">{users.map((user) => (<span key={user}>{user.Name}</span>))}發現了新的動物資訊!!</h4>
            <div className="col-6">
              <div className="post-slider">  
              {location && (<MapDisplay lat={location.lat} lon={location.lon} size={16} />)}
              </div>
            </div>
            <div className="col-6">
              <div className="post-slider">
                  <img loading="lazy" src={imageData} className="img-fluid" alt="post-thumb" />
              </div>
            </div>
          </article>
           ))
        )}
        </div>
      </div>
    </section>
  );
}

export default Section;
