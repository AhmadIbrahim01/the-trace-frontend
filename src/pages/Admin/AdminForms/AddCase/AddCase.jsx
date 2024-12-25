import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddCase.css";

const AddCase = () => {
  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Add Case</h1>
      <form>
        <Input
          id={"case"}
          label={"Case Title"}
          name={"case"}
          type={"text"}
          placeholder={"Enter case title"}
        ></Input>
        <div className="input flex column">
          <label htmlFor="case-description">Case Description</label>
          <textarea
            id="case-description"
            name="case-description"
            rows={10}
            placeholder="Describe the information you want to share..."
          ></textarea>
          <div className="input flex column">
            <label htmlFor="priority">Case Priority</label>
            <select name="priority" id="priority">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="input flex column">
            <label htmlFor="assigned-investigaror">Assigned Investigator</label>
            <select name="assigned-investigaror" id="assigned-investigaror">
              <option value="ahmad">Ahmad</option>
            </select>
          </div>
          <div className="input flex column">
            <label htmlFor="case-status">Case Status</label>
            <select name="case-status" id="case-status">
              <option value="opened">Open</option>
              <option value="closed">Close</option>
            </select>
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={"public"}
              />
              Public
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="private"
                checked={"private"}
              />
              Private
            </label>
          </div>
          <Button
            type={"submit"}
            name={"add-case"}
            text={"Add Case"}
            className={"admin-form-button"}
          ></Button>
          <Button
            name={"back"}
            text={"Back to manage cases"}
            className={"form-back-button"}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default AddCase;
