import React, { useState } from "react";
import "./navbar.css";
import { Link,NavLink } from "react-router-dom";

// images
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/home" className="flex logo">
          <img src={logo} alt="logo" />
          <span className=""><h3>PIU</h3> <small>Library</small></span>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink className="item" to="/home" end>Home</NavLink></li>
          <li><NavLink className="item" to="/home/about">About</NavLink></li>
          <li><NavLink className="item" to="/home/feedback">Feedback</NavLink></li>
          <li><NavLink className="item" to="/home/books">Books</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
