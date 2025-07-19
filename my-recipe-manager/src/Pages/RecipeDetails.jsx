import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const recipeData = [
  {
    id: 1,
    name: "Veggie Biryani",
    cuisine: "Indian",
    type: "Veg",
    prepTime: 45,
    image: "/images/r3.jpg",
    description: "Spicy rice dish with vegetables",
    ingredients: ["Rice", "Carrot", "Beans", "Spices"],
    procedure: "Cook rice, sauté vegetables, mix with spices and rice.",
    nutrients: "Calories: 400 | Protein: 8g"
  },
   {
    id: 2,
    name: "Veggie Biryani",
    cuisine: "Indian",
    type: "Veg",
    prepTime: 45,
    image: "/images/r3.jpg",
    description: "Spicy rice dish with vegetables",
    ingredients: ["Rice", "Carrot", "Beans", "Spices"],
    procedure: "Cook rice, sauté vegetables, mix with spices and rice.",
    nutrients: "Calories: 400 | Protein: 8g"
  },
  // ... other recipes
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

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
