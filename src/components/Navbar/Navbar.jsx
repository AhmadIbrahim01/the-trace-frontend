import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };

  const goToUserProfile = () => {
    navigate("/user-profile");
  };
  return (
    <nav className="navbar flex center">
      <div className="navbar-container flex center">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <ul className="nav-links flex center">
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
        {localStorage.getItem("user") ? (
          <button
            className="nav-button flex center column"
            onClick={goToUserProfile}
          >
            {localStorage.getItem("user")}
          </button>
        ) : (
          <button
            className="nav-button flex center column"
            onClick={goToRegister}
          >
            Signup
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
