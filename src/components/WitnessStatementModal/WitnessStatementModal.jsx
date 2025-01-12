import React from "react";
import "./WitnessStatementModal.css";
import suspect from "../../assets/images/suspect.svg";
import calendar from "../../assets/icons/calendar.svg";

const WitnessStatementModal = ({ isOpen, onClose, data }) => {
  console.log("this is ", data);

  if (!isOpen) return null;
  const { id, name, date, witnessPhoto, statement } = data;
  const { additionalFeatures, approximatedAge, description, photo } =
    statement.suspectDetails;

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
            src={witnessPhoto || suspect}
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
        <div className="suspect-details">
          {statement && (
            <>
              <h2>Statement</h2>
              <p className="statement-data">{statement.statement}</p>
            </>
          )}
          <h1>Suspect Details:</h1>
          {additionalFeatures && (
            <>
              <h2>Features</h2>
              <p className="statement-data">{additionalFeatures}</p>{" "}
            </>
          )}
          {approximatedAge && (
            <>
              <h2>Approximated Age</h2>
              <p className="statement-data">{approximatedAge}</p>
            </>
          )}
          {description && (
            <>
              <h2>Description</h2>
              <p className="statement-data">{description}</p>
            </>
          )}
          {photo && (
            <>
              <h2>Suspect Sketch</h2>
              <img src={photo} alt="" />{" "}
            </>
          )}
          {/* <h2>Description</h2>
          <p className="statement-data">{description}</p>
          <h2>Suspect Sketch</h2>
          <img src={photo} alt="" />{" "} */}
        </div>
      </div>
    </div>
  );
};

export default WitnessStatementModal;
