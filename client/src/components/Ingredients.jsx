import React from 'react';
import IngredientEntry from './IngredientEntry.jsx';
const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      {ingredients.map((ingredient, index) => {
        return <IngredientEntry key={index} ingredient={ingredient} />;
      })}
    </div>
  );
};

export default Ingredients;
