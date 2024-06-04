
import React from 'react';
import './recipe.css';

const Recipe = ({ title, image, ingredients, instructions }) => (
  <div className="recipe">
    <h2>{title}</h2>
    <img src={image} alt={title} className="recipe-image"/>
    <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
    <p><strong>Instructions:</strong> {instructions}</p>
  </div>
);

export default Recipe;
