import React from 'react';
import IngredientEntry from './IngredientEntry.jsx';
const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return <IngredientEntry ingredient={ingredient} />;
      })}
    </div>
  );
};

export default Ingredients;
