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
        <Input
          id={"phone"}
          label={"Phone Number"}
          name={"phone"}
          type={"number"}
        ></Input>
        <Input
          id={"profile"}
          label={"Profile Picture"}
          name={"profile"}
          type={"file"}
        ></Input>
        <div className="input flex column">
          <label htmlFor="note">Additional Notes</label>
          <textarea
            id="note"
            placeholder="Describe the information you want to share..."
            name="note"
          ></textarea>
          <Button
            type={"submit"}
            name={"add-investigator"}
            text={"Add Investigator"}
            className={"ivestigator-form-button"}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default AddInvestigator;
