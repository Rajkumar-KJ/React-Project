import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🍽️ MealMate</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} >Home</NavLink>
        <NavLink to="/recipes" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} >Recipes</NavLink>
        <NavLink to="/add-recipe" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'} >Add Recipe</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
