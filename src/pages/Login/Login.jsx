import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Login.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, serStatus] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, user } = response.data;
      localStorage.setItem("authToken", token);

      serStatus({
        success: true,
        message: "Login successfull",
      });

      navigate("/");
    } catch (error) {
      console.log(error.message);

      serStatus({
        success: false,
        message: "Invalid email or password",
      });
    }
    reset();
  };

  return (
    <div className="register flex center column">
      <Link to="/" className="register-logo">
        <img src={logo} alt="" />
      </Link>
      <form
        className="register-form flex center column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Login</h1>
        <h3>Welcome back!</h3>

        <div className="register-input flex column">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ex. ahmad@gmail.com"
            // value={formData.email}
            // onChange={handleChange}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="register-input flex column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            // value={formData.password}
            // onChange={handleChange}

            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <Button
          type={"submit"}
          name={"login"}
          text={"Login"}
          className={"register-form-button"}
        ></Button>

        {!status.success && <p style={{ color: "red" }}>{status.message}</p>}

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
