import React from "react";
import "./chooseStatemnt.css";
import { useNavigate } from "react-router-dom";

const chooseStatemnt = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  suspectOnClick = () => {
    navigate("/add-suspect-statemnet");
  };
  witnessOnClick = () => {
    navigate("/add-witness-statemnet");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Choose Statement</h2>
        <div className="flex">
          <button onClick={suspectOnClick}>Suspect Statement</button>
          <button onClick={witnessOnClick}>Witness Statement</button>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default chooseStatemnt;
