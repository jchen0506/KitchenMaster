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
    setIsListOpen(true);
  };

  var handleShopListCloseClick = () => {
    setIsListOpen(false);
  };

  var handleRecipeCloseClick = () => {
    setIsRecipeOpen(false);
  };

  var recipeListComponent =
    recipes.length === 0 ? null : (
      <RecipeList handleRecipeClick={handleRecipeClick} recipes={recipes} />
    );
  var recipeComponent = isRecipeOpen ? (
    <RecipeInfo
      handleRecipeCloseClick={handleRecipeCloseClick}
      currentRecipe={currentRecipe}
    />
  ) : null;

  var shoplistComponent = isListOpen ? (
    <ShoppingList handleShopListCloseClick={handleShopListCloseClick} />
  ) : null;

  return (
    <div className="container">
      <h1>Kitchen Master</h1>
      <input
        onChange={handleInputChange}
        value={keyword}
        type="text"
        placeholder="What do you want to cook today?"
      />
      <div className="buttons">
        <span className="SearchButton" onClick={handleSearchClick}>
          Search Recipes
        </span>
        <span className="ListButton" onClick={handleShopListClick}>
          Shopping List
        </span>
      </div>

      {recipeListComponent}
      {recipeComponent}
      {shoplistComponent}
    </div>
  );
};

export default App;
