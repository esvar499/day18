import React from 'react';
import './Cards.css';
const Cards = (props) => {
  return (
    <div >
      <p>{props.product.name}</p>
      <p>{props.product.shortdetail}</p>
      <p>{props.product.price}</p>
      <p>{props.product.rating}</p>

    </div>
  )
  
};

export default Cards;
