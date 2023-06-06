import './GreenButton.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from './store'; // 导入设置页面的Redux action


const GreenButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPage(2)); // 调用Redux action来设置页面为2
  };

  return (
    <button className="green-button" onClick={handleClick}>
      下一步
    </button>
  );
};

export default GreenButton;