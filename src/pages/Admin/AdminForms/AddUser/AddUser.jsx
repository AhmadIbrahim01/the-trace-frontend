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
        <Input
          id={"email"}
          label={"Email Address"}
          name={"email"}
          type={"email"}
        ></Input>
        <Input
          id={"password"}
          label={"Password"}
          name={"password"}
          type={"password"}
        ></Input>
        <div className="input flex column">
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="investigator">Investigator</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
