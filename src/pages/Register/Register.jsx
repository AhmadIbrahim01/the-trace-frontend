import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Register.css";

const Register = () => {
  return (
    <div className="register flex center column">
      <img src="" alt="" />
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
      </form>
    </div>
  );
};

export default Register;
