import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true

const handleLogout = async (event) => {
  event.preventDefault(); // 取消預設的導航行為

  try {
    const response = await axios.post('http://127.0.0.1:5000/logout'); // 發送登出請求
    const data = response.data;

    if (data.success) {
      // 登出成功
      console.log('成功登出');
      // <Link to="/"/>
      window.location.href = '/'; // 導航到首頁
    } else {
      // 登出失敗
      console.log('登出失敗');
    }
  } catch (error) {
    console.error(error);
  }
};

const LogoutButton = () => {
  return (
    <a className="btn btn-outline-primary flex-center-bottom" onClick={handleLogout}>
      登出
    </a>
  );
};

export default LogoutButton;