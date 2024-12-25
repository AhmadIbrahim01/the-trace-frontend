import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddStatement.css";

const AddEvidence = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Statement</h1>
      <form>
        <Input
          id={"witness"}
          label={"Witness Name"}
          name={"witness"}
          type={"text"}
        ></Input>
        <Input
          id={"date"}
          label={"Date of Statement"}
          name={"date"}
          type={"date"}
        ></Input>
      </form>
    </div>
  );
};

export default AddEvidence;
