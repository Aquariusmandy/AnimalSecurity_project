import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import CheckboxGroup from './CheckboxGroup';
import './TwoCom.css';

const TwoCom = ({ text }) => {
  return (
    <div className="two_com">
      <SectionTitle text="案件類型" />
      <CheckboxGroup />

    </div>
  );
};

export default TwoCom;