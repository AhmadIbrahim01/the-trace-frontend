import React, { useState } from "react";
import "./WitnessStatementModal.css";
import suspect from "../../assets/images/suspect.svg";
import calendar from "../../assets/icons/calendar.svg";
import axios from "axios";

const WitnessStatementModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const { id, name, date, witnessPhoto, statement, location } = editedData;
  const { additionalFeatures, approximatedAge, description, photo } =
    statement.suspectDetails;

  const caseId = localStorage.getItem("caseId");
  const statementId = localStorage.getItem("statementId");
  const witnessId = localStorage.getItem("witnessId");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      statement: {
        ...editedData.statement,
        [name]: value,
      },
    });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/witnessStatement/${id}`,
        { statement: editedData.statement },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEditedData(response.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsEditing(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8080/api/witness/statements/${caseId}/${witnessId}/${statementId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onClose();
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDismissClick = () => {
    setIsEditing(false);
    setEditedData(data);
  };

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>{name}'s Statement</h2>
          <button onClick={handleEditClick}>Edit Information</button>
        </div>

        <button className="statement-modal-profile flex">
          <img
            src={witnessPhoto || suspect}
            className="statement-modal-image"
            alt="Witness"
          />
          <div className="statement-modal-info flex column">
            <h4 className="t-left">{name}</h4>
            <div className="statement-modal-date t-left flex center">
              <img src={calendar} alt="Date Icon" />
              <p>{date}</p>
            </div>
          </div>
        </button>

        {isEditing ? (
          <div className="suspect-details">
            <h2>Statement</h2>
            <textarea
              name="statement"
              value={editedData.statement.statement}
              onChange={handleChange}
              rows="6"
              cols="50"
              className="statement-textarea"
            />
          </div>
        ) : (
          <p className="statement-data">{statement.statement}</p>
        )}

        <div className="suspect-details">
          {isEditing ? (
            <>
              <div className="suspect-details">
                <h2>Description</h2>
                <textarea
                  name="description"
                  value={editedData.statement.suspectDetails.description}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  className="statement-textarea"
                />
              </div>
              <div className="suspect-details">
                <h2>Features</h2>
                <textarea
                  name="additionalFeatures"
                  value={editedData.statement.suspectDetails.additionalFeatures}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  className="statement-textarea"
                />
              </div>
              <div className="suspect-details">
                <h2>Approximated Age</h2>
                <select
                  id="approximatedAge"
                  name="approximatedAge"
                  value={editedData.statement.suspectDetails.approximatedAge}
                  onChange={handleChange}
                  className="edit-age"
                >
                  <option value="">Select Age Range</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46-55">46-55</option>
                  <option value="56-65">56-65</option>
                  <option value="66-75">66-75</option>
                  <option value="76-85">76-85</option>
                  <option value="86-100">86-100</option>
                </select>
              </div>

              {/* <div>
                <h2>Suspect Sketch</h2>
                <input
                  type="file"
                  name="photo"
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      statement: {
                        ...editedData.statement.suspectDetails,
                        photo: URL.createObjectURL(e.target.files[0]),
                      },
                    })
                  }
                />
                {editedData.statement.photo && (
                  <img src={editedData.statement.photo} alt="Suspect Sketch" />
                )}
              </div> */}
            </>
          ) : (
            <>
              <h1>Suspect Details:</h1>
              {location && (
                <>
                  <h2>Location of incident</h2>
                  <p className="statement-data">{location}</p>
                </>
              )}
              {description && (
                <>
                  <h2>Description</h2>
                  <p className="statement-data">{description}</p>
                </>
              )}
              {additionalFeatures && (
                <>
                  <h2>Features</h2>
                  <p className="statement-data">{additionalFeatures}</p>
                </>
              )}
              {approximatedAge && (
                <>
                  <h2>Approximated Age</h2>
                  <p className="statement-data">{approximatedAge}</p>
                </>
              )}
              {photo && (
                <>
                  <h2>Suspect Sketch</h2>
                  <img src={photo} alt="Suspect Sketch" />
                </>
              )}
            </>
          )}
        </div>

        {isEditing && (
          <div className="edit-buttons flex">
            <button onClick={handleSaveClick} className="save-btn">
              Save
            </button>
            <button onClick={handleDeleteClick} className="delete-btn">
              Delete
            </button>
            <button onClick={handleDismissClick} className="dismiss-btn">
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WitnessStatementModal;
