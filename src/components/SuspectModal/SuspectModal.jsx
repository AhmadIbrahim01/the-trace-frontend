import React from "react";
import "./SuspectModal.css";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  console.log(data);

  const suspects = [
    { id: 1, name: "Adnan Ibrahim" },
    { id: 2, name: "Adnan Ibrahim" },
    { id: 3, name: "Adnan Ibrahim" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Popup Content</h2>
        <p>{suspects[data - 1].name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
