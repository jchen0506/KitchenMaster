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
        console.log(ingredient.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div onClick={handleClick}>{ingredient.name}</div>
      <div>
        <span>{`${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong}`}</span>
      </div>
    </div>
  );
};

export default Ingredient;
