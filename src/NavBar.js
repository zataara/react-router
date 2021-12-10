import React from "react";
import {  NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/apples">
        Apples
      </NavLink>
      <NavLink exact to="/oranges">
        Oranges
      </NavLink>
      <NavLink exact to="/bananas">
        Bananas
      </NavLink>
      <NavLink exact to="/blueberries">
        Blueberries
      </NavLink>
      <NavLink exact to="/cherries">
        Cherries
      </NavLink>
      <NavLink exact to="peaches">
        Peaches
      </NavLink>
      <NavLink exact to="watermelon">
        Watermelon
      </NavLink>
    </nav>
  );
};

export default NavBar;
