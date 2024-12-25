import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AddInvestigator.css";
const AddInvestigator = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Investigator</h1>
      <form>
        <Input
          id={"name"}
          label={"Full Name"}
          name={"name"}
          type={"text"}
        ></Input>
        <Input
          id={"email"}
          label={"Email Address"}
          name={"email"}
          type={"email"}
        ></Input>
      </form>
    </div>
  );
};

export default AddInvestigator;
