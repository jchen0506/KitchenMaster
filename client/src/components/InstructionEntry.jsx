import React from 'react';

const InstructionEntry = ({ step }) => {
  return (
    <div>
      <div>Step {step.number}</div>
      <div>{step.step}</div>
    </div>
  );
};

export default InstructionEntry;
