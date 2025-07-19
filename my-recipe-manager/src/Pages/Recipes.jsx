import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recipes.css';

const recipeData = [
  {
    id: 1,
    name: "Veggie Biryani",
    cuisine: "Indian",
    type: "Veg",
    prepTime: 45,
    image: "/images/r3.jpg",
    description: "Spicy rice dish with vegetables"
  },
  {
    id: 2,
    name: "Chicken Alfredo",
    cuisine: "Italian",
    type: "Non-Veg",
    prepTime: 30,
    image: "/images/r2.jpg",
    description: "Creamy chicken pasta"
  },
  {
    id: 3,
    name: "Sushi",
    cuisine: "Japanese",
    type: "Non-Veg",
    prepTime: 60,
    image: "/images/r1.jpg",
    description: "Classic sushi rolls"
  },
    {
    id: 3,
    name: "Sushi",
    cuisine: "Japanese",
    type: "Non-Veg",
    prepTime: 60,
    image: "/images/r1.jpg",
    description: "Classic sushi rolls"
  },
    {
    id: 4,
    name: "Sushi",
    cuisine: "Japanese",
    type: "Non-Veg",
    prepTime: 60,
    image: "/images/r1.jpg",
    description: "Classic sushi rolls"
  }
  
];

function Recipes() {
  const [filters, setFilters] = useState({
    cuisine: '',
    type: '',
    prepTime: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredRecipes = recipeData.filter((recipe) => {
    return (
      (!filters.cuisine || recipe.cuisine === filters.cuisine) &&
      (!filters.type || recipe.type === filters.type) &&
      (!filters.prepTime || (
        filters.prepTime === '30' ? recipe.prepTime <= 30 :
        filters.prepTime === '60' ? recipe.prepTime > 30 && recipe.prepTime <= 60 :
        recipe.prepTime > 60
      ))
    );
  });

  return (
    <div className="recipes-container">
      {/* <h2>Filter Recipes</h2> */}

      <div className="filters">
        <select name="cuisine" onChange={handleChange}>
          <option value="">All Cuisines</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
        </select>

        <select name="type" onChange={handleChange}>
          <option value="">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select name="prepTime" onChange={handleChange}>
          <option value="">All Times</option>
          <option value="30">≤ 30 min</option>
          <option value="60">30–60 min</option>
          <option value="61"> 60 min</option>
        </select>
      </div>

      <div className="recipes-list">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-img" />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <span className="tag">{recipe.cuisine} - {recipe.type}</span>
            <Link to={`/recipes/${recipe.id}`} className="view-btn">View Recipe</Link>
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
