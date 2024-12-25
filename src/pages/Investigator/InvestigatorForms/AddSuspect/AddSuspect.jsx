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
        <Input id={"age"} label={"Age"} name={"age"} type={"number"}></Input>
        <div className="input flex column">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Input
          id={"address"}
          label={"Address"}
          name={"address"}
          type={"text"}
        ></Input>
        <div className="input flex column">
          <label htmlFor="crime">Crime Involved</label>
          <textarea id="crime" name="crime" rows={5}></textarea>
        </div>
        <Input
          id={"occupation"}
          label={"Occupation"}
          name={"occupation"}
          type={"text"}
        ></Input>
      </form>
    </div>
  );
};

export default AddSuspect;
