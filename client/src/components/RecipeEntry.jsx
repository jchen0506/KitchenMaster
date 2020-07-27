import React from 'react';

const RecipetEntry = ({ recipe, handleRecipeClick }) => {
  var recipeClick = () => {
    handleRecipeClick(recipe.id);
  };

  return (
    <div>
      <img
        src={`https://spoonacular.com/recipeImages/${recipe.image}`}
        alt={recipe.title}
        onClick={recipeClick}
      />
      <div>{recipe.title}</div>
      <div>{recipe.servings} people servings</div>
      <div>ready in {recipe.readyInMinutes} minutes</div>
    </div>
  );
};

export default RecipetEntry;
