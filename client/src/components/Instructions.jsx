import React from 'react';
import InstructionEntry from './InstructionEntry.jsx';

const Instructions = ({ instructions }) => {
  return (
    <div className="instructions">
      {instructions.map((step, index) => {
        return <InstructionEntry step={step} key={index} />;
      })}
    </div>
  );
};

export default Instructions;
