import React, { useState } from 'react';
import RectangleContainer from './RectangleContainer';
import { useSelector } from 'react-redux';
import MapComponent from './MapComponent';
import Test from './Test';
import TwoButton from './TwoButton';
import MapComponent2 from './Map';
import Icon from './icon';

import OtherComponent from './OtherComponent';

const MyComponent2 = () => {
    const uploadedImage = useSelector(state => state.uploadedImage);
    return (
      <div >
          <RectangleContainer>
            <MapComponent2 />
            <TwoButton />
          </RectangleContainer>
      </div>
    );
  };
  
  export default MyComponent2;