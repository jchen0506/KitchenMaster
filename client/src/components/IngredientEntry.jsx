import React from 'react';

const Ingredient = ({ ingredient }) => {
  console.log(ingredient);
  return (
    <div>
      <div>{ingredient.name}</div>
      <div>
        <span>{`${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong}`}</span>
      </div>
    </div>
  );
};

export default Ingredient;
