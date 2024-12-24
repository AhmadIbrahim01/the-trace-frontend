import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const FormExample = () => {
  return (
    <div className="investigator-form-container">
      <h1>Add Evidence</h1>
      <form onSubmit={onSubmit}></form>
    </div>
  );
};

export default FormExample;
