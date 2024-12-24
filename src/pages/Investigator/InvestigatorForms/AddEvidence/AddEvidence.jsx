import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./AddEvidence.css";

const AddEvidence = () => {
  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Evidence</h1>
      <form>
        <div className="input flex column">
          <label htmlFor="evidences">Type of evidence</label>
          <select name="evidences" id="evidences">
            <option value="fingerprint">Fingerprint</option>
            <option value="file">File</option>
            <option value="hair">Hair</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input flex column">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
        </div>
      </form>
    </div>
  );
};

export default AddEvidence;
