import React, { createContext, useState } from 'react';
// import Recipes from './Recipes';
// import AddRecipe from './Addrecipe';
// import RecipeDetail from './RecipeDetails';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
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
      name: "Pasta Alfredo",
      cuisine: "Italian",
      type: "Veg",
      prepTime: 30,
      image: "/images/r2.jpg",
      description: "Creamy white sauce pasta",
      ingredients: ["Pasta", "Cream", "Cheese", "Spices"],
      procedure: "Boil pasta, prepare white sauce, mix together.",
      nutrients: "Calories: 550 | Protein: 12g"
    }
  ]);


  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };


  const removeRecipe = (id) => {
    const updated = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updated);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
      {children}
      {/* <Recipes/>
      <AddRecipe/>
      <RecipeProvider/>
      <RecipeDetail/> */}

    </RecipeContext.Provider>
  );
};
