import React from "react";
import "./StatementModal.css";
import suspect from "../../assets/images/suspect.svg";
import calendar from "../../assets/icons/calendar.svg";

const StatementModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  console.log(data);

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Statement {1}</h2>
          <button>Edit Information</button>
        </div>
        <button className="statement-modal-profile flex">
          <img src={suspect} className="statement-modal-image" />
          <div className="statement-modal-info flex column">
            <h4 className="t-left">Ahmad Ibrahim</h4>
            <div className="statement-modal-date t-left flex center">
              <img src={calendar} alt="" />
              <p> Given on January 5, 2023</p>
            </div>
          </div>
        </button>
        <p className="statement-data">{data}</p>
      </div>
    </div>
  );
};

export default StatementModal;
