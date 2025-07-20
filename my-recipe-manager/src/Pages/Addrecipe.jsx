import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addrecipe.css';
import { RecipeContext } from '../Pages/RecipeContext'; 
import useRecipeStorage from '../Pages/CustomHooks';// import context

function AddRecipe() {
  const navigate = useNavigate();
  const { addRecipe } = useContext(RecipeContext); 
  const saveRecipe = useRecipeStorage();// use context instead of props

  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    type: '',
    prepTime: '',
    image: '',
    description: '',
    ingredients: '',
    procedure: '',
    nutrients: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...formData,
      id: Date.now(), // Unique ID
      prepTime: parseInt(formData.prepTime),
      ingredients: formData.ingredients.split(',').map(item => item.trim())
    };

    addRecipe(newRecipe); 
     saveRecipe(formData);// use from context
    navigate('/recipes');
  };

  return (
    <div>
    <div className="add-recipe-container">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Recipe Name" onChange={handleChange} required />
        <input name="cuisine" placeholder="Cuisine (e.g. Indian)" onChange={handleChange} required />
        <select name="type" onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
        <input name="prepTime" type="number" placeholder="Prep Time (minutes)" onChange={handleChange} required />
        <input name="image" placeholder="Image URL (/images/your-img.jpg)" onChange={handleChange} required />
        <textarea name="description" placeholder="Short Description" onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients (comma separated)" onChange={handleChange} required />
        <textarea name="procedure" placeholder="Cooking Procedure" onChange={handleChange} required />
        <textarea name="nutrients" placeholder="Nutritional Info" onChange={handleChange} required />
        <button type="submit">Create Recipe</button>
      </form>

      
    </div>
    <div>
        <footer className='footer2'>
            <p> MealMate 🍽️. All rights reserved.</p>
        </footer>
    </div>
    </div>
  );
}

export default AddRecipe;
