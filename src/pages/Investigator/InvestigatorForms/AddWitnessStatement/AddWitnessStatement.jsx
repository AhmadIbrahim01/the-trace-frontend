import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddWitnessStatement.css";

const AddWitnessStatement = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Witness Statement</h1>
      <form>
        <div className="input flex column">
          <label htmlFor="name">Name</label>
          <select name="name" id="name">
            <option value="">Witness1</option>
            <option value="">Witness2</option>
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

        <div className="input flex column">
          <label htmlFor="age">Suspect Approximated Age</label>
          <select name="age" id="age">
            <option value="">Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
            <option value="66-75">66-75</option>
            <option value="76-85">76-85</option>
            <option value="86-100">86-100</option>
          </select>
        </div>

        <div className="input flex column">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a detailed description"
            rows={5}
          ></textarea>
        </div>
        <div className="input flex column">
          <label htmlFor="additional">Additional Features</label>
          <textarea
            id="additional"
            name="additional"
            placeholder="e.g., scars, tattoos, hair type"
            rows={5}
          ></textarea>
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

export default AddWitnessStatement;
