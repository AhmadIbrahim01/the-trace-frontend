import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { jwtDecode } from "jwt-decode";

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
          <button
            className="nav-button flex center column"
            onClick={goToUserProfile}
          >
            {name}
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
