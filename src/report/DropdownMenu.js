import React, { useState } from 'react';
import './DropdownMenu.css';
import { connect } from 'react-redux';
import { setAnimalType } from './store'; // 导入setType动作创建函数

const DropdownMenu = ({animaltype, setAnimalType}) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'other') {
      setShowInput(true);
    } else {
      setShowInput(false);
      setAnimalType(selectedValue)
    }
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputValue(input);
    setAnimalType(input);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedOption} onChange={handleOptionChange} className="dropdown-select">
        <option value="貓">貓 (cat)</option>
        <option value="狗">狗 (dog)</option>
        <option value="鳥類">鳥類 (bird)</option>
        <option value="兔子">兔子 (rabbit)</option>
        <option value="其他">其他</option>
      </select>
      {selectedOption === '其他' && (
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="請輸入其他選項"
            className="other-input"
          />
        </div>
      )}
    </div>
  );
};

export default connect(null, { setAnimalType })(DropdownMenu);
