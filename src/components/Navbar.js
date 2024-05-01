import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Stylings/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/quote" activeClassName="active">Get a Quote</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        {/* Add more nav items as needed */}
      </ul>
    </nav>
  );

}

export default Navbar;