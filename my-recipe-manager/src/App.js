import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Addrecipe from './Pages/Addrecipe';
import Editrecipes from './Pages/Editrecipes';
import RecipeDetail from './Pages/RecipeDetails';


function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add-recipe" element={<Addrecipe />} />
          <Route path="/edit/:id" element={<Editrecipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  
  )
}

export default App