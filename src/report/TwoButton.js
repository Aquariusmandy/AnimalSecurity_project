import React, { useState } from 'react';
import GreenButton2 from './GreenButton2';
import RedButton from './RedButton';
import './TwoButton.css';

const TwoButton = () => {
  return (
    <div className="button-container">
      <RedButton />
      <GreenButton2 />
    </div>
  );
};

export default TwoButton;