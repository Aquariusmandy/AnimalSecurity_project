import React from 'react';
import StepIndicator from './StepIndicator';
import { useSelector } from 'react-redux';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4.js';

const App = () => {
  const page = useSelector(state => state.Page);

  return (
    <div>
    <div>
      <StepIndicator currentStep={page} />
      <div class="step-indicator_text">
        <div class="step-text">
          <span class="step-text">基本資訊</span>
        </div>
        <div class="step-number">
          <span class="step-text">事件地點</span>
        </div>
        <div class="step-number">
          <span class="step-text">確認送出</span>
        </div>
        <div class="step-number">
          <span class="step-text">回報完成</span>
        </div>
      </div>
      {page === 1 && <MyComponent />}
      {page === 2 && <MyComponent2 />}
      {page === 3 && <MyComponent3 />}
      {page === 4 && <MyComponent4 />}

    </div>
    </div>
  );
};

export default App;