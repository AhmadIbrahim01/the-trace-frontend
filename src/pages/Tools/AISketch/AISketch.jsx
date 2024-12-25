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
