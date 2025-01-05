import React from "react";
import "./StatementModal.css";
import suspect from "../../assets/images/suspect.svg";
import calendar from "../../assets/icons/calendar.svg";

const StatementModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const { id, name, date, statement, suspectPhoto } = data;

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>{name} statement's</h2>
          <button>Edit Information</button>
        </div>
        <button className="statement-modal-profile flex">
          <img
            src={suspectPhoto || suspect}
            className="statement-modal-image"
          />
          <div className="statement-modal-info flex column">
            <h4 className="t-left">{name}</h4>
            <div className="statement-modal-date t-left flex center">
              <img src={calendar} alt="" />
              <p>{date}</p>
            </div>
          </div>
        </button>
        <p className="statement-data">{statement}</p>
      </div>
    </div>
  );
};

export default StatementModal;
