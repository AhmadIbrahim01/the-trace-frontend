import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddEvidence.css";
import { useNavigate } from "react-router-dom";

const AddEvidence = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Evidence</h1>
      <form>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
        <div className="input flex column">
          <label htmlFor="evidences">Type of Evidence</label>
          <select name="evidences" id="evidences">
            <option value="fingerprint">Fingerprint</option>
            <option value="file">File</option>
            <option value="hair">Hair</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input flex column">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
        </div>

        <Input
          id={"location"}
          label={"Location of Collection"}
          name={"location"}
          type={"text"}
        ></Input>
        <Input
          id={"date"}
          label={"Date Collected"}
          name={"date"}
          type={"date"}
        ></Input>
        <Input
          id={"file"}
          label={"Evidence Image"}
          name={"file"}
          type={"file"}
        ></Input>

        <Button
          type={"submit"}
          name={"add-evidence"}
          text={"Add Evidence"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddEvidence;
