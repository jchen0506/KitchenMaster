import React, { useState, useEffect } from 'react';
import Instructions from './Instructions.jsx';

const RecipeInfo = ({ currentRecipe }) => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  });

  return isLoad ? (
    <div>
      <Instructions
        instructions={currentRecipe.analyzedInstructions[0].steps}
      />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default RecipeInfo;
