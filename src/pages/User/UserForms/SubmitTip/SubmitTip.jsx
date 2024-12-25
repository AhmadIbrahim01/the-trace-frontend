import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./SubmitTip.css";
const SubmitTip = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Submit a Tip?</h1>
      <form>
        <div className="input flex column">
          <label htmlFor="statement">Tip Details</label>
          <textarea
            id="statement"
            placeholder="Describe the information you want to share..."
            name="statement"
            rows={10}
          ></textarea>
        </div>
        <Input
          id={"file"}
          label={"Upload Supporting Evidence"}
          name={"file"}
          type={"file"}
        ></Input>
        <Input
          id={"location"}
          label={"Location of Incident"}
          name={"location"}
          type={"text"}
        ></Input>
      </form>
    </div>
  );
};

export default SubmitTip;
