import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'popper.js';
import '../plugins/bootstrap/bootstrap.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.css';
import LogoutButton from './LogoutButton.js';
axios.defaults.withCredentials = true
const ImagesPost = [
  require("../images/post-1.jpg"),
];

function Side() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchUserList();
    }, []);
    const fetchUserList = async () => {
      const response = await axios.get('http://127.0.0.1:5000/user',);
      setUsers(response.data);
    };

    const [dataCount, setDataCount] = useState(null);
    useEffect(() => {
      fetchDataCount();
    }, []);
    const fetchDataCount = async () => {
        const response = await axios.get('http://127.0.0.1:5000/count');
        setDataCount(response.data);
        console.log(response.data)
    };

    const [imageData, setImageData] = useState([]);
    useEffect(() => {
      fetchImageData();
    }, []);
    const fetchImageData = async () => {
        const response = await axios.get('http://127.0.0.1:5000/image');
        setImageData(response.data[0].img);
        
      };
  
    return (
        <aside className="sticky-left align-items-center col-lg-4 order-1 order-lg-1 bg-pink">
          <div className="widget-list">
            <div className="media offset-2 widget-post align-items-center">
            {dataCount === 0 ? (
              <img loading="lazy" className="mr-3" src={ImagesPost[0]} alt="profile" />
             ) : (
              <img loading="lazy" className="mr-3" src={imageData} alt="profile" />
              )
            }
              <div className="align-items-center justify-content-center">
                <h4 className="h4 mb-0">帳號: {users.map((user) => (<span key={user}>{user.Email}</span>))}</h4>
                <h4 className="h4 mb-0">暱稱: {users.map((user) => (<span key={user}>{user.Name}</span>))}</h4>
              </div>
            </div>
            <div className="media">
              <div className="offset-4 align-items-center justify-content-center">
                <h4 className="h4 mb-0">累積回報次數 : {dataCount}</h4>
              </div>
            </div>
            <div className="media offset-5">
              <LogoutButton />
            </div>
          </div>
        </aside>
    );
}

export default Side;