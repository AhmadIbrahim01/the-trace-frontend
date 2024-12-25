import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Add User</h1>

      <form>
        <Input
          id={"name"}
          label={"Full Name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter Full Name"}
        ></Input>
      </form>
    </div>
  );
};

export default AddUser;
