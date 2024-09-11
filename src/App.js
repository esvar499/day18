// src/components/Cards.jsx
import React from 'react';
import { useTheme } from './context/toggle.css'; // Import the useTheme hook

const Cards = ({ products }) => {
  const { theme, toggleTheme } = useTheme(); // Consume the theme context

  return (
    <div className={`card-container ${theme}`}>
      {/* Button to toggle the theme */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* Render product cards */}
      {products.map((product, index) => (
        <div key={index} className={`meet-card ${theme}`}>
          <div className="meet-card-content">
            <h3 className="meet-title">{product.name}</h3>
            <p className="meet-details">{product.description}</p>
            <p className="meet-details">Price: {product.price}</p>
            <p className="meet-details">Rating: {product.rating}</p>
          </div>
          <div className="meet-card-footer">
            <button className="meet-button">Buy Now</button>
            <button className="meet-button">Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
