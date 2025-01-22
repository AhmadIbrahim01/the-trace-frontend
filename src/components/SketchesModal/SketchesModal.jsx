import React, { useState, useEffect } from "react";
import "./SketchesModal.css";
import axios from "axios";
const SketchesModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Sketch</h2>
        </div>

        <img src={data.image} className="flex center column sketch-image" />

        <div className="suspect-profile-body">
          <div className="sketch-data flex column">
            <h1>Prompt used: </h1>
            <p>{data.prompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SketchesModal;
