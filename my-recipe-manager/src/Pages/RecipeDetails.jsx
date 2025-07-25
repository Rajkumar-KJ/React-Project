import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from './RecipeContext'; 
import './RecipeDetails.css';

function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find(r => r.id === parseInt(id));

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} className="detail-img" />
      <h1>{recipe.name}</h1>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Type:</strong> {recipe.type}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>

      <h3>Ingredients</h3>
      <ol>
        {recipe.ingredients.map((item) => (
          <li>{item}</li>
        ))}
      </ol>

      <h3>Cooking Procedure</h3>
      <p>{recipe.procedure}</p>

      <h3>Nutritional Info</h3>
      <p>{recipe.nutrients}</p>
    </div>
  );
}

export default RecipeDetail;
