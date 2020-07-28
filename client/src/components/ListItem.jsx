import React, { useState } from 'react';
import axios from 'axios';
const ListItem = ({ item }) => {
  const [buy, setBuy] = useState(false);
  var handleClick = () => {
    var url = !buy ? 'deleteItem' : 'addItem';
    axios
      .post(`/${url}?item=${item}`)
      .then((res) => {
        setBuy(!buy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var style = {
    textDecoration: buy ? 'line-through' : 'none',
  };
  return (
    <div style={style} onClick={handleClick} className="listItem">
      {item}
    </div>
  );
};

export default ListItem;
