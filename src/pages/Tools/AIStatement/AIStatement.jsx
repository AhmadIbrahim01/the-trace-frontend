import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AIStatement.css";
const AIStatement = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>AI Statement Analysis</h1>
      <p>
        Easily analyze suspect or witness statements for insights and patterns.
      </p>
      <form>
        <h1>Upload Statement</h1>
        <Input
          id={"name"}
          label={"Name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter suspect/witness name"}
        ></Input>

        <div className="input flex column">
          <label htmlFor="statement">Statement</label>
          <textarea
            id="statement"
            name="statement"
            placeholder="Type or paste the statement"
            rows={10}
          ></textarea>
        </div>

        <Input
          id={"file"}
          label={"Upload Voice"}
          name={"file"}
          type={"file"}
        ></Input>

        <Button
          type={"submit"}
          name={"add-statement"}
          text={"Analyze Statement"}
          className={"admin-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AIStatement;
