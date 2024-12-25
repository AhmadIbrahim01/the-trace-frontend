import React from "react";

const Button = ({ type, name, text, className }) => {
  return (
    <button className={className} type={type} name={name}>
      {text}
    </button>
  );
};

export default Button;
