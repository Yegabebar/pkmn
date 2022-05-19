import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar/Navbar.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <img src="/pokeball.jpg" width="50" height="50"></img>
      <div className="links">
        <NavLink excat to="/" activeClassName="nav-active">
          Pokedex
        </NavLink>
        <NavLink excat to="/Edit" activeClassName="nav-active">
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
