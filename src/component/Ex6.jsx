import React from 'react';

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default ItemList;