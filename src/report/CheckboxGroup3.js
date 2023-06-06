import React, { useState } from 'react';
import './CheckboxGroup3.css';
import { connect } from 'react-redux';
import { setPublish } from './store'; // 导入setType动作创建函数

const CheckboxGroup3 = ({Publish, setPublish}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setPublish(event.target.value);
  };

  return (
    
    <div className="checkbox-group">
      <label>
        <input
          type="radio"
          value="是"
          checked={selectedOption === '是'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        是
      </label>
      <label>
        <input
          type="radio"
          value="否"
          checked={selectedOption === '否'}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
        否
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Publish: state.Publish, // 从Redux的store中获取Type变量的值
});

const mapDispatchToProps = {
  setPublish, // 将setType动作创建函数映射到组件的props中
};


export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup3);
