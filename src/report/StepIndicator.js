import React from 'react';

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      <span className={`step-number ${currentStep === 1 ? 'active' : ''}`}>1</span>
      <span className={`step-number ${currentStep === 2 ? 'active' : ''}`}>2</span>
      <span className={`step-number ${currentStep === 3 ? 'active' : ''}`}>3</span>
      <span className={`step-number ${currentStep === 4 ? 'active' : ''}`}>4</span>
    </div>
  );
};

export default StepIndicator;
