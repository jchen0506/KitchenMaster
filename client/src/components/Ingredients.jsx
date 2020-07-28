import React from 'react';
import IngredientEntry from './IngredientEntry.jsx';
const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      {ingredients.map((ingredient, index) => {
        return <IngredientEntry key={index} ingredient={ingredient} />;
      })}
      <br />
      <div className="tip">
        Click on ingredient name to add them to shopping list and never forget
        about them!
      </div>
    </div>
  );
};

export default Ingredients;
