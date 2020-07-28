import React, { useState, useEffect } from 'react';
import ListItem from './ListItem.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ShoppingList = ({ handleShopListCloseClick }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('/getList')
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => console.log('Error when fetching shopping list'));
  }, []);

  return (
    <div className="shoplist">
      <FontAwesomeIcon
        className="closeButton"
        onClick={handleShopListCloseClick}
        icon={faTimes}
      />
      {list.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </div>
  );
};

export default ShoppingList;
