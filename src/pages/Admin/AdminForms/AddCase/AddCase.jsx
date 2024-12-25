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
        ></Input>
      </form>
    </div>
  );
};

export default AddCase;
