import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../Pages/RecipeContext';
import './Recipes.css';

function Recipes() {
  const { recipes, removeRecipe } = useContext(RecipeContext);

  const [filter, setFilter] = useState({
    type: '',
    cuisine: '',
    prepTime: ''
  });

  const filteredRecipes = recipes.filter((recipe) => {
    const typeMatch = filter.type ? recipe.type === filter.type : true;
    const cuisineMatch = filter.cuisine ? recipe.cuisine === filter.cuisine : true;
    const prepTimeMatch = filter.prepTime ? recipe.prepTime <= parseInt(filter.prepTime) : true;
    return typeMatch && cuisineMatch && prepTimeMatch;
  });

  return (
    <div className="recipes-page">
      <h1>All Recipes</h1>

      <div className="filter-bar">
        <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select onChange={(e) => setFilter({ ...filter, cuisine: e.target.value })}>
          <option value="">All Cuisine</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
        </select>

        <select onChange={(e) => setFilter({ ...filter, prepTime: e.target.value })}>
          <option value="">Any Time</option>
          <option value="30">≤ 30 mins</option>
          <option value="60">≤ 60 mins</option>
        </select>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            {/* <img src={recipe.image} alt={recipe.name} /> */}
            <img className="recipe-img" src={recipe.image} alt={recipe.name} />

            <h2>{recipe.name}</h2>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Type:</strong> {recipe.type}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>

            <div className="card-actions">
              <Link to={`/recipes/${recipe.id}`} className="view-btn">View</Link>
              <button onClick={() => removeRecipe(recipe.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <footer className='footer2'>
            <p> MealMate 🍽️. All rights reserved.</p>
        </footer>
    </div>
    </div>
  );
}

export default Recipes;
