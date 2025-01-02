import React, { useState } from "react";
import Button from "../../components/Button/Button";
import "./Register.css";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState({ success: true });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStatus({
        success: true,
        message: "Registiration Successful",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: "An Error Occured",
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
        <h1>Register</h1>
        <h3>Join us now!</h3>

        <div className="register-input flex column">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="ex. Ahmad"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div className="register-input flex column">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="ex. Ibrahim"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>
        <div className="register-input flex column">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="ex. 76468212"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{8}$/,
                message: "Phone number is not valid",
              },
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone.message}</p>
          )}
        </div>
        <div className="register-input flex column">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ex. ahmad@gmail.com"
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
          name={"register"}
          text={"Register"}
          className={"register-form-button"}
        ></Button>

        {!status.success && <p style={{ color: "red" }}>{status.message}</p>}

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
