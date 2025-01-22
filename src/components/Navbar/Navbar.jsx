import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { jwtDecode } from "jwt-decode";

import darkModeButton from "../../assets/icons/dark-mode-icon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };

  const goToUserProfile = () => {
    navigate("/user-profile");
  };

  const [name, setName] = useState("");
  const [isInvestigator, setIsInvestigator] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role === "investigator") {
          setIsInvestigator(true);
        }
        setName(localStorage.getItem("name") ?? decoded.name);
      } catch (error) {
        console.log("Error decoding token", error);
      }
    } else {
      console.log("No token");
    }
  }, []);

  const [theme, setTheme] = useState("dark");

  const currentTheme = localStorage.getItem("theme");
  document.querySelector("body").setAttribute("data-theme", currentTheme);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.querySelector("body").setAttribute("data-theme", currentTheme);
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector("body").setAttribute("data-theme", currentTheme);
    }
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
            {isInvestigator ? (
              <Link to="/investigator-cases" className="nav-link">
                My Cases
              </Link>
            ) : (
              <Link to="/cases" className="nav-link">
                Cases
              </Link>
            )}
          </li>
          <li>
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li>

          {isInvestigator ? (
            <li>
              <Link to="/investigator-stats" className="nav-link">
                Stats
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>

        {name ? (
          <div className="profile-action flex center">
            <button
              type="button"
              className="nav-link theme-btn flex column center"
              onClick={changeTheme}
            >
              <img src={darkModeButton} alt="" />
            </button>
            <button
              className="nav-button flex center column"
              onClick={goToUserProfile}
            >
              {name}
            </button>
          </div>
        ) : (
          <div className="profile-action flex center">
            <button
              type="button"
              className="nav-link theme-btn flex column center"
              onClick={changeTheme}
            >
              <img src={darkModeButton} alt="" />
            </button>
            <button
              className="nav-button flex center column"
              onClick={goToRegister}
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
