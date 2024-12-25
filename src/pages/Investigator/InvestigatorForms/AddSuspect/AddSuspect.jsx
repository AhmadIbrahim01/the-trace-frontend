import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddSuspect.css";

const AddSuspect = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Evidence</h1>
      <form>
        <Input
          id={"suspect"}
          label={"Suspect Name"}
          name={"suspect"}
          type={"text"}
        ></Input>
        <Input
          id={"contact"}
          label={"Contact Information"}
          name={"contact"}
          type={"text"}
        ></Input>
      </form>
    </div>
  );
};

export default AddSuspect;
