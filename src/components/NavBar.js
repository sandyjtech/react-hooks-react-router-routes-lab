import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <nav className="navbar">
  <NavLink exact to="/" activeClassName="active">
    Home
  </NavLink>
  <NavLink to="/movies" activeClassName="active">
    Movies
  </NavLink>
  <NavLink to="/directors" activeClassName="active">
    Directors
  </NavLink>
  <NavLink to="/actors" activeClassName="active">
    Actors
  </NavLink>
</nav></div>;
}

export default NavBar;

