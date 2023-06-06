import React, { useState } from 'react';
import './InputBox.css';
import { connect } from 'react-redux';
import { setAdditional } from './store';

const InputBox = ({ additional, setAdditional }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    const input = event.target.value;
    setInputValue(input);
    setAdditional(input); // 使用setAdditional函数将additional的值更新为用户输入的内容
  };

  return (
    <input
      type="text"
      className="input-box"
      placeholder="請輸入其他狀況的描述"
      value={inputValue}
      onChange={handleInput}
    />
  );
};

export default connect(null, { setAdditional })(InputBox);