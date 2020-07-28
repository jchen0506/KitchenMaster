import React from 'react';

const InstructionEntry = ({ step }) => {
  return (
    <div className="instructionEntry">
      <div className="step">Step {step.number}</div>
      <div className="instruction">{step.step}</div>
    </div>
  );
};

export default InstructionEntry;
