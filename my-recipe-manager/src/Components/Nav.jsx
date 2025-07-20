import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; 

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🍽️ MealMate</div>
      <div className="navbar-links">
        <NavLink to="/" className='nav-link' >Home</NavLink>
        <NavLink to="/recipes" className= 'nav-link' >Recipes</NavLink>
        <NavLink to="/add-recipe" className= 'nav-link' >Add Recipe</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
