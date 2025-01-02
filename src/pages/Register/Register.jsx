import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Register.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

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
        "http://127.0.0.1:8080/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    });
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
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="ex. Ahmad"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="ex. Ibrahim"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="register-input flex column">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="ex. 76468212"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
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
          name={"register"}
          text={"Register"}
          className={"register-form-button"}
          onClick={handleSubmit}
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
