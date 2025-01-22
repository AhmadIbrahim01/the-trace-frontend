import React from "react";
import "./ChooseStatementModal.css";
import { useNavigate } from "react-router-dom";

const chooseStatemnt = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const suspectOnClick = () => {
    navigate("/add-suspect-statement");
  };
  const witnessOnClick = () => {
    navigate("/add-witness-statement");
  };

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Choose Statement</h2>
        </div>
        <div className="choose-btns flex">
          <button className="choose-btn" onClick={suspectOnClick}>
            Suspect Statement
          </button>
          <button className="choose-btn" onClick={witnessOnClick}>
            Witness Statement
          </button>
        </div>
        <button onClick={onClose} className="close-btn flex center column">
          Close
        </button>
      </div>
    </div>
  );
};

export default chooseStatemnt;
