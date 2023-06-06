import React from 'react';
import './icon.css';
import icon from './icon.png';

const Icon = () => {
  return (
    <div className="icon-container">
      <img src={icon} alt="Image" className="icon-image" />
    </div>
  );
};

export default Icon;
