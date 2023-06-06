import './GreenButton.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import Add_Data from './Add_Data';
import { Link } from 'react-router-dom';



const GreenButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    //按下之後要跳回主畫面
  };

  return (
    <button className="green-button"><Link  to="/">回首頁</Link>
    </button>
  );
};

export default GreenButton;