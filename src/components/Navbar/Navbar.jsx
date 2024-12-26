import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar flex center">
      <div className="navbar-container flex center">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <ul className="nav-links flex">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cases" className="nav-link">
              Cases
            </Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>
        </ul>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
