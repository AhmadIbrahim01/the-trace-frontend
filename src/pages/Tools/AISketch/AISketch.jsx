import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AISketch.css";

const AISketch = () => {
  return (
    <div className="sketch flex center">
      <form className="sketch-form flex center column">
        <h1>Suspect Details</h1>

        <div className="sketch-input flex column">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter suspect name"
          />
        </div>
        <div className="sketch-input flex column">
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" placeholder="Enter age" />
        </div>
        <div className="sketch-input flex column">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a detailed description"
            rows={10}
          ></textarea>
        </div>

        <div className="sketch-input flex column">
          <label htmlFor="additional">Additional Features</label>
          <textarea
            id="additional"
            name="additional"
            placeholder="e.g., scars, tattoos, hair type"
            rows={10}
          ></textarea>
        </div>

        <div className="sketch-input sketch-input-file flex column">
          <label htmlFor="photo">Upload Photo</label>
          <input id="photo" name="photo" type="file" />
        </div>

        <Button
          type={"submit"}
          name={"generate-sketch"}
          text={"Generate Sketch"}
          className={"ai-form-button"}
        ></Button>
      </form>

      <div className="sketch-container flex column center">
        <h1>AI Sketch</h1>
        <div></div>
        <button>Save Sketch</button>
      </div>
    </div>
  );
};

export default AISketch;
