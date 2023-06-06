import './RedButton.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from './store'; // 导入设置页面的Redux action

const RedButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPage(1)); // 调用Redux action来设置页面为2
  };

  return (
    <button className="red-button" onClick={handleClick}>
      回前頁
    </button>
  );
};

export default RedButton;