import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"  


function Nav() {
  let activeStyle = {
    textDecoration: "none",
    color: "yellow",
    fontSize: "48px",
    border: "2px dotted red",
    pointerEvents: "none"
  };

  let notActive = {
    textDecorationStyle: "wavy",
    color: "blue"
  }

  return (
    <nav className="nav">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : notActive)}
      >
        Home
      </NavLink>

      <NavLink
        to="hobbies"
        style={({ isActive }) => (isActive ? activeStyle : notActive)}
      >
        Hobbies
      </NavLink>

      <NavLink to="projects"
       style={({ isActive }) => (isActive ? activeStyle : notActive)}>Projects
        
      </NavLink>
    </nav>
  );
}

export default Nav;
