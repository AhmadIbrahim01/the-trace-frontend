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
          <label htmlFor="statement">Witness Statement</label>
          <textarea id="statement" name="statement" rows={10}></textarea>
        </div>
        <Input
          id={"location"}
          label={"Location of Incident"}
          name={"location"}
          type={"text"}
        ></Input>
        <Button
          type={"submit"}
          name={"add-witness"}
          text={"Add Witness"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddWitness;
