import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="register flex center column">
      <Link to="/" className="register-logo">
        <img src={logo} alt="" />
      </Link>
      <form className="register-form flex center column">
        <h1>Login</h1>
        <h3>Welcome back!</h3>

        <div className="register-input flex column">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ex. ahmad@gmail.com"
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>

        <Button
          type={"submit"}
          name={"login"}
          text={"Login"}
          className={"register-form-button"}
        ></Button>
        <div className="already flex center">
          <p>Don't have an account?</p>
          <button type="button" onClick={goToRegister}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
