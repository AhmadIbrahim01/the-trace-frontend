import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.message);
      const { token, user } = response.data;
      console.log(token);
      console.log(user.firstName);
      localStorage.setItem("authToken", token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      console.log(response.data.message);
    }
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button
          type={"submit"}
          name={"login"}
          text={"Login"}
          className={"register-form-button"}
          onClick={handleSubmit}
        ></Button>
        <div className="already flex center">
          <p>Don't have an account?</p>
          <button type="button" onClick={goToRegister}>
            Sign Up
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

export default Login;
