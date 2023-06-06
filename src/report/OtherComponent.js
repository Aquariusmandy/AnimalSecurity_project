import React from 'react';
import Icon from './icon';
import otherComponentStyles from './otherComponentStyles.module.css'; // 假設這是 OtherComponent 的樣式
import MapComponent2 from './Map';

const OtherComponent = () => {
  return (
    <div className={otherComponentStyles.container}>
      <div className={otherComponentStyles.Mapp}>
      <MapComponent2 />
      </div>
      <div className={otherComponentStyles.imageContainer}>
      <Icon />
      </div>
    </div>
  );
};

export default OtherComponent;
