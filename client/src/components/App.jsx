import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import RecipeInfo from './RecipeInfo.jsx';
import ShoppingList from './ShoppingList.jsx';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [isRecipeOpen, setIsRecipeOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

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
      setIsRecipeOpen(true);
      setCurrentRecipe(res.data);
    });
  };

  var handleShopListClick = () => {
    console.log('clicked');
    setIsListOpen(true);
  };

  var handleShopListCloseClick = () => {
    setIsListOpen(false);
  };

  var recipeComponent = isRecipeOpen ? (
    <RecipeInfo currentRecipe={currentRecipe} />
  ) : null;

  var shoplistComponent = isListOpen ? (
    <ShoppingList handleShopListCloseClick={handleShopListCloseClick} />
  ) : null;

  return (
    <div>
      <input onChange={handleInputChange} value={keyword} type="text" />
      <button onClick={handleSearchClick}>Search Recipes</button>
      <div onClick={handleShopListClick}>Shopping List</div>
      <RecipeList handleRecipeClick={handleRecipeClick} recipes={recipes} />
      {recipeComponent}
      {shoplistComponent}
    </div>
  );
};

export default App;
