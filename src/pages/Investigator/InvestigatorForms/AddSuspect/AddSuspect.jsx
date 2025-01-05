import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddSuspect.css";
import { useNavigate } from "react-router-dom";

const AddSuspect = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Suspect</h1>
      <form>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
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
        <Input
          id={"height"}
          label={"Height (cm)"}
          name={"height"}
          type={"number"}
        ></Input>
        <Input
          id={"weight"}
          label={"Weight (kg)"}
          name={"weight"}
          type={"number"}
        ></Input>
        <Input
          id={"eye"}
          label={"Eye Color"}
          name={"eye"}
          type={"text"}
        ></Input>
        <Input
          id={"hair"}
          label={"Hair Color"}
          name={"hair"}
          type={"text"}
        ></Input>
        <Input
          id={"file"}
          label={"Suspect Image"}
          name={"file"}
          type={"file"}
        ></Input>
        <Button
          type={"submit"}
          name={"add-suspect"}
          text={"Add Suspect"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddSuspect;
