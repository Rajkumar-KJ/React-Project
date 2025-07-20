import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import AddRecipe from './Pages/Addrecipe';
// import Editrecipes from './Pages/Editrecipes';
import RecipeDetail from './Pages/RecipeDetails';
import Nav from './Components/Nav';
import { RecipeProvider } from './Pages/RecipeContext';

function App() {
  return (
    <BrowserRouter>
      <RecipeProvider>
        <Nav />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            {/* <Route path="/edit/:id" element={<EditRecipes />} /> */}
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </RecipeProvider>
    </BrowserRouter>
  );
}

export default App;
