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
        <div className="input flex column">
          <label htmlFor="statement">Statement</label>
          <textarea id="statement" name="statement" rows={10}></textarea>
        </div>

        <Input
          id={"file"}
          label={"Upload Photo"}
          name={"file"}
          type={"file"}
        ></Input>

        <Button
          type={"submit"}
          name={"add-statement"}
          text={"Add Statement"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddEvidence;
