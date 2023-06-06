import React, { useState } from 'react';
import RectangleContainer from './RectangleContainer';
import SectionTitle from './SectionTitle';
import CheckboxGroup2 from './CheckboxGroup2';
import TwoCom from './TwoCom';
import DropdownMenu from './DropdownMenu';
import CheckboxGroup1 from './CheckboxGroup1';
import Title from './Title';
import InputBox from './InputBox';
import ImageUploader from './ImageUploader';
import Test from './Test';
import TwoButton from './TwoButton';
import GreenButton from './GreenButton';
import CheckboxGroup3 from './CheckboxGroup3';

const MyComponent = () => {
  return (
    <div>
      <RectangleContainer>
        <TwoCom text="案件類型" />
        <SectionTitle text="動物種類" />
        <DropdownMenu />
        <SectionTitle text="狀況描述" />
        <Title text="結紮狀況"/>
        <CheckboxGroup1 />
        <Title text="受傷狀況"/>
        <CheckboxGroup2 />
        <Title text="其他補充"/>
        <InputBox />
        <SectionTitle text="照片上傳" />
        <ImageUploader />
        <GreenButton />
      </RectangleContainer>
    </div>
  );
};

export default MyComponent;