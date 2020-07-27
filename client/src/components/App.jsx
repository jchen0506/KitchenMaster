import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import RecipeInfo from './RecipeInfo.jsx';
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  var handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  var handleSearchClick = () => {
    axios
      .get(`/searchRecipe?keyword=${keyword}`)
      .then((res) => {
        setRecipes(res.data.results);
      })
      .catch((err) => {
        console.log('There is an issuse fetching the data');
      });
  };

  var handleRecipeClick = (id) => {
    axios.get(`/recipes/${id}`).then((res) => {
      setIsOpen(true);
      setCurrentRecipe(res.data);
    });
  };

  var recipeComponent = isOpen ? (
    <RecipeInstruction currentRecipe={currentRecipe} />
  ) : null;

  return (
    <div>
      <input onChange={handleInputChange} value={keyword} type="text" />
      <button onClick={handleSearchClick}>Search Recipes</button>
      <RecipeList handleRecipeClick={handleRecipeClick} recipes={recipes} />
      {recipeComponent}
    </div>
  );
};

export default App;
