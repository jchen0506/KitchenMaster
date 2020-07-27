import React, { useState, useEffect } from 'react';
import Instructions from './Instructions.jsx';
import Ingredients from './Ingredients.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RecipeInfo = ({ currentRecipe }) => {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
  });

  return isLoad ? (
    <div>
      <FontAwesomeIcon icon={faTimes} />
      <Instructions
        instructions={currentRecipe.analyzedInstructions[0].steps}
      />
      <Ingredients ingredients={currentRecipe.extendedIngredients} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default RecipeInfo;
