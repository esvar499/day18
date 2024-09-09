import React from 'react';
import './Cards.css'; // Make sure to import your CSS file

const Cards = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product, index) => (
        <div key={index} className="meet-card">
          <div className="meet-card-content">
            <h3 className="meet-title">{product.name}</h3>
            <p className="meet-details">{product.description}</p>
            <p className="meet-details">Price: {product.price}</p>
            <p className="meet-details">Rating: {product.rating}</p>
          </div>
          <div className="meet-card-footer">
            <button className="meet-button">Buy</button>
            <button className="meet-button">Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
