import React from 'react';
import IngredientEntry from './IngredientEntry.jsx';
const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return <IngredientEntry key={ingredient.id} ingredient={ingredient} />;
      })}
    </div>
  );
};

export default Ingredients;
