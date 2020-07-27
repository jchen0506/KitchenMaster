import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return recipes.map((recipe) => {
    return (
      <RecipeEntry
        handleRecipeClick={handleRecipeClick}
        recipe={recipe}
        key={recipe.id}
      />
    );
  });
};

export default RecipeList;
