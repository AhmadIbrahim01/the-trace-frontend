import React from "react";
import "./StatementModal.css";

const StatementModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  console.log(data);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="suspect-profile-header flex center">
          <h2>Statement {1}</h2>
          <button>Edit Information</button>
        </div>
        <p>{data}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default StatementModal;
