import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddUser.css";
import "../AddInvestigator/AddInvestigator";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const backTo = () => {
    navigate("/manage-users");
  };
  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Add User</h1>

      <form>
        <Button
          name={"back"}
          text={"Back to manage users"}
          className={"form-back-button"}
          type={"button"}
          onClick={backTo}
        ></Button>
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
        <div className="input flex column">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="active">Active</option>
            <option value="inactive">inactive</option>
          </select>
        </div>
        <Button
          type={"submit"}
          name={"add-user"}
          text={"Add User"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddUser;
