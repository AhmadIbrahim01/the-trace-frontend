import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Register.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register flex center column">
      <Link to="/" className="register-logo">
        <img src={logo} alt="" />
      </Link>
      <form className="register-form flex center column">
        <h1>Register</h1>
        <h3>Join us now!</h3>

        <div className="register-input flex column">
          <label htmlFor="f-name">First Name</label>
          <input
            id="f-name"
            name="f-name"
            type="text"
            placeholder="ex. Ahmad"
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="l-name">Last Name</label>
          <input
            id="l-name"
            name="l-name"
            type="text"
            placeholder="ex. Ibrahim"
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="ex. 76468212"
          />
        </div>
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
          name={"add-case"}
          text={"Register"}
          className={"register-form-button"}
        ></Button>

        <div className="already flex center">
          <p>Already have an account?</p>
          <button type="button" onClick={goToLogin}>
            Login
          </button>
        </div>

        <hr className="register-hr" />
        <p>Or</p>

        <button className="google-button flex center">
          <img src={GoogleIcon} alt="" />
          <p>Sign in with Google</p>
        </button>
      </form>
    </div>
  );
};

export default Register;
