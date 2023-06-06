import React, { useState } from 'react';
import './CheckboxGroup.css';
import { connect } from 'react-redux';
import { setType } from './store'; // 导入setType动作创建函数

const CheckboxGroup = ({ Type, setType }) => {
  const handleCheckboxChange = (option) => {
    setType(option);
  };  

  return (
    <div className="checkbox-group">
      <label className="checkbox-option">
        <input
          type="checkbox"
          checked={Type === '流浪動物'}
          onChange={() => handleCheckboxChange('流浪動物')}
        />
        流浪動物
      </label>
      <label className="checkbox-option">
        <input
          type="checkbox"
          checked={Type === '動物救援'}
          onChange={() => handleCheckboxChange('動物救援')}
        />
        動物救援
      </label>
      <label className="checkbox-option">
        <input
          type="checkbox"
          checked={Type === '走失通報'}
          onChange={() => handleCheckboxChange('走失通報')}
        />
        走失通報
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Type: state.Type, // 从Redux的store中获取Type变量的值
});

const mapDispatchToProps = {
  setType, // 将setType动作创建函数映射到组件的props中
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxGroup);
