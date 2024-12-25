import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddWitness.css";

const AddWitness = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Witness</h1>
      <form>
        <Input
          id={"witness"}
          label={"Witness Name"}
          name={"witness"}
          type={"text"}
        ></Input>
        <Input
          id={"contact"}
          label={"Contact Information"}
          name={"contact"}
          type={"text"}
        ></Input>
        <Input id={"age"} label={"Age"} name={"age"} type={"number"}></Input>
      </form>
    </div>
  );
};

export default AddWitness;
