import React from "react";
import "./EvidenceModal.css";

const EvidenceModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Popup Content</h2>
        <p>{data}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EvidenceModal;
