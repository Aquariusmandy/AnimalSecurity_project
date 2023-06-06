import './GreenButton.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from './store'; // 导入设置页面的Redux action

import './GreenButton.css';

const GreenButton3 = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPage(4)); // 调用Redux action来设置页面为2
  };

  return (
    <button className="green-button" onClick={handleClick}>
      送出
    </button>
  );
};

export default GreenButton3;