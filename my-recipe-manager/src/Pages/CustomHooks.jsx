import React from 'react'

function useRecipeStorage() {
  const saveRecipe = (recipe) => {
    const key = `recipe_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(recipe));
  };

  return saveRecipe;
}

export default useRecipeStorage;
