import React from "react";

const Input = ({ id, name, label, type, value, onChange, placeholder }) => {
  return (
    <div className="input flex column">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
