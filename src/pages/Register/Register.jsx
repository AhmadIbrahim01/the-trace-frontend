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
      </form>
    </div>
  );
};

export default Register;
