import React from 'react';

const RecipetEntry = ({ recipe }) => {
  return (
    <div>
      <img
        src={`https://spoonacular.com/recipeImages/${recipe.image}`}
        alt={recipe.title}
      />
      <div>{recipe.title}</div>
      <div>{recipe.servings}</div>
      <div>{recipe.readyInMinutes}</div>
    </div>
  );
};

export default RecipetEntry;
