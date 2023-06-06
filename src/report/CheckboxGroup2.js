import React, { useState } from 'react';
import './CheckboxGroup2.css';
import { connect } from 'react-redux';
import { setHurts } from './store'; // 导入setType动作创建函数

const CheckboxGroup2 = ({hurts, setHurts}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setHurts(event.target.value);
  };

  return (
    
    <div className="checkbox-group">
      <label>
        <input
          type="radio"
          value="無明顯外傷"
          checked={selectedOption === '無明顯外傷'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        無明顯外傷
      </label>
      <label>
        <input
          type="radio"
          value="輕微外傷"
          checked={selectedOption === '輕微外傷'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        輕微外傷
      </label>
      <label>
        <input
          type="radio"
          value="嚴重受傷"
          checked={selectedOption === '嚴重受傷'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        嚴重受傷
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hurts: state.hurts, // 从Redux的store中获取Type变量的值
});

const mapDispatchToProps = {
  setHurts, // 将setType动作创建函数映射到组件的props中
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup2);
