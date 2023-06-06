import React, { useState } from 'react';
import RectangleContainer from './RectangleContainer';
import SectionTitle from './SectionTitle';
import Test from './Test';
import { useSelector } from 'react-redux';
import TwoButton2 from './TwoButton2';
import { connect } from 'react-redux';
import FinalCheck from './FinalCheck';
import Map_Final from './Map_Final';
import MapCheck from './MapCheck';
import Map_Display from './Map_Display';

const MyComponent3 = (state) => {
    const uploadedImage = useSelector(state => state.uploadedImage);


    return (
      <div >
        <RectangleContainer>
            <FinalCheck />
            {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-image" /> }
            <MapCheck />
            <Map_Display />
            <TwoButton2 />
        </RectangleContainer>
      </div>
    );
  };
  
  export default MyComponent3;