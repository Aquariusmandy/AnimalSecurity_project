import React from 'react';
import './RectangleContainer.css'; // 假設您的CSS文件名為RectangleContainer.css

const RectangleContainer = ({ children }) => {
  return <div className="rectangle-container">{children}</div>;
};

export default RectangleContainer;