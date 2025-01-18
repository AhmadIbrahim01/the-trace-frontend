import React, { useState, useEffect } from "react";
import "./StatementModal.css";
import suspect from "../../assets/images/suspect.svg";
import calendar from "../../assets/icons/calendar.svg";
import axios from "axios";

const StatementModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);
  const [refresh, setRefresh] = useState(true);

  const { name, date, statement, suspectPhoto } = editedData;

  const caseId = localStorage.getItem("caseId");
  const statementId = localStorage.getItem("statementId");
  const suspectId = localStorage.getItem("suspectId");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/suspect/statements/${caseId}/${suspectId}/${statementId}`,
        editedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEditedData(response.data);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
    setIsEditing(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8080/api/suspect/statements/${caseId}/${suspectId}/${statementId}`,
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

  useEffect(() => {
    if (editedData !== data) {
      const refetchData = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8080/api/suspect/statements/${caseId}/${suspectId}/${statementId}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          setEditedData(response.data.statement);
        } catch (error) {
          console.log(error.message);
        }
      };
      refetchData();
    }
  }, [refresh]);

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>{data.name}'s Statement</h2>
          {isEditing ? (
            <button onClick={handleDismissClick}>Dismiss</button>
          ) : (
            <button onClick={handleEditClick}>Edit Information</button>
          )}
        </div>

        <button className="statement-modal-profile flex">
          <img
            src={data.suspectPhoto || suspect}
            className="statement-modal-image"
            alt="Suspect"
          />
          <div className="statement-modal-info flex column">
            <h4 className="t-left">{data.name}</h4>
            <div className="statement-modal-date t-left flex center">
              <img src={calendar} alt="Date Icon" />
              <p>{date}</p>
            </div>
          </div>
        </button>

        <div className="suspect-data flex">
          {isEditing ? (
            <textarea
              name="statement"
              value={editedData.statement}
              onChange={handleChange}
              cols="50"
              rows="6"
            />
          ) : (
            <p className="statement-data">{statement}</p>
          )}
        </div>

        {isEditing && (
          <div className="edit-buttons flex">
            <button onClick={handleSaveClick} className="save-btn">
              Save
            </button>
            <button onClick={handleDeleteClick} className="delete-btn">
              delete
            </button>
          </div>
        )}
        <button onClick={onClose} className="dismiss-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default StatementModal;
