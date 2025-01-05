import React from "react";
import "./EvidenceModal.css";

const EvidenceModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const { type, collectedAt, description, location, photo } = data[0];

  const date = new Date(collectedAt);

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Evidence</h2>
          <button>Edit Information</button>
        </div>
        <img src={photo} className="flex center column evidence-image" />
        <div className="suspect-profile-body">
          <div className="suspect-data flex">
            <p>Type: {type}</p>
          </div>
          <div className="suspect-data flex">
            <p>Description: {description}</p>
          </div>
          <div className="suspect-data flex">
            <p>Location: {location}</p>
          </div>
          <div className="suspect-data flex">
            <p>Collected data: {date.toString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceModal;
