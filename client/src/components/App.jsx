import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');

  var handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  var handleSearchClick = () => {
    axios
      .get(`/searchRecipe?keyword=${keyword}`)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data.results);
      })
      .catch((err) => {
        console.log('There is an issuse fetching the data');
      });
  };

  return (
    <div>
      <input onChange={handleInputChange} value={keyword} type="text" />
      <button onClick={handleSearchClick}>Search Recipes</button>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
