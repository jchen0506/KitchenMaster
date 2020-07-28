import React from 'react';

const RecipetEntry = ({ recipe, handleRecipeClick }) => {
  var recipeClick = () => {
    handleRecipeClick(recipe.id);
  };

  return (
    <div className="recipeCard">
      <img
        className="recipeImg"
        src={`https://spoonacular.com/recipeImages/${recipe.image}`}
        alt={recipe.title}
        onClick={recipeClick}
      />
      <div className="title">{recipe.title}</div>
      <div className="serving">{recipe.servings} people servings</div>
      <div className="time">Ready in {recipe.readyInMinutes} minutes</div>
    </div>
  );
};

export default RecipetEntry;
