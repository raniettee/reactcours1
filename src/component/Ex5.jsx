import React from 'react';

const Card = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Card;