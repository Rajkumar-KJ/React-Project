import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Addrecipe from './Pages/Addrecipe';
import Editrecipes from './Pages/Editrecipes';
import Footer from './Components/Footer';


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
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  
  )
}

export default App