import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <Input
          id="username"
          name="username"
          label="Username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
        />
      </div>

      <div>
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>

      <Button type="submit" text="Submit"></Button>
    </form>
  );
};

export default FormExample;
