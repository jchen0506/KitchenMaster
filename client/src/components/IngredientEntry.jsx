import React, { useState } from 'react';
import axios from 'axios';

const Ingredient = ({ ingredient }) => {
  const [added, setAdded] = useState(false);

  var handleClick = () => {
    var url = !added ? 'addItem' : 'deleteItem';
    axios
      .post(`/${url}?item=${ingredient.name}`)
      .then((res) => {
        setAdded(!added);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var style = {
    'background-color': added ? 'gray' : 'coral',
  };
  return (
    <div className="ingredientsEntry">
      <div style={style} className="ingredientName" onClick={handleClick}>
        {ingredient.name}
      </div>
      <div className="ingredientAmount">
        <span>{`${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong}`}</span>
      </div>
    </div>
  );
};

export default Ingredient;
