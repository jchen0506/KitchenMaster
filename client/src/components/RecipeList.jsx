import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

const RecipeList = ({ recipes }) => {
  return recipes.map((recipe) => {
    return <RecipeEntry recipe={recipe} key={recipe.id} />;
  });
};

export default RecipeList;
