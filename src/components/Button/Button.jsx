import React from "react";

const Button = ({ type, name, text, className, onClick }) => {
  return (
    <button className={className} type={type} name={name} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
