import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return (
    <div className="recipeList">
      {recipes.map((recipe) => {
        return (
          <RecipeEntry
            handleRecipeClick={handleRecipeClick}
            recipe={recipe}
            key={recipe.id}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
