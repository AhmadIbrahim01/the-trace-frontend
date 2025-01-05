import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddSuspectStatement.css";
import { useNavigate } from "react-router-dom";

const AddSuspectStatement = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Suspect Statement</h1>
      <form>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
        <div className="input flex column">
          <label htmlFor="name">Name</label>
          <select name="name" id="name">
            <option value="">Suspect1</option>
            <option value="">Suspect2</option>
          </select>
        </div>
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
          id={"location"}
          label={"Location of incident"}
          name={"location"}
          type={"text"}
        ></Input>

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

export default AddSuspectStatement;
