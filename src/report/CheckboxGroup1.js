import React, { useState } from 'react';
import './CheckboxGroup1.css';
import { connect } from 'react-redux';
import { setLigation } from './store'; // 导入setType动作创建函数

const CheckboxGroup1 = ({ligation, setLigation}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setLigation(event.target.value);
  };

  return (
    
    <div className="checkbox-group">
      <label>
        <input
          type="radio"
          value="已結紮"
          checked={selectedOption === '已結紮'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        已結紮
      </label>
      <label>
        <input
          type="radio"
          value="未結紮"
          checked={selectedOption === '未結紮'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        未結紮
      </label>
      <label>
        <input
          type="radio"
          value="不清楚"
          checked={selectedOption === '不清楚'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        不清楚
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ligation: state.ligation, // 从Redux的store中获取Type变量的值
});

const mapDispatchToProps = {
  setLigation, // 将setType动作创建函数映射到组件的props中
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup1);
