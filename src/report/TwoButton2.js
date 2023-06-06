import React, { useState } from 'react';
import GreenButton3 from './GreenButton3';
import RedButton2 from './RedButton2';
import './TwoButton.css';

const TwoButton2 = () => {
  return (
    <div className="button-container">
      <RedButton2 />
      <GreenButton3 />      
    </div>
  );
};

export default TwoButton2;