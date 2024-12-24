import React from "react";

const Button = ({ type, name, text }) => {
  return (
    <button type={type} name={name}>
      {text}
    </button>
  );
};

export default Button;
