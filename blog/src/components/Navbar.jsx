import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/bollywood">Bollywood</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/food">Food</Link>
        <Link to="/hollywood">Hollywood</Link>
        <Link to="/technology">Technology</Link>
      </ul>
    </div>
  );
};

export default Navbar;
