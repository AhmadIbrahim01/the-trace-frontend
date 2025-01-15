import React, { useState } from "react";
import "./EvidenceModal.css";
import axios from "axios";

const EvidenceModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data[0]);
  const { _id, type, collectedAt, description, location, photo } = editedData;

  const date = new Date(collectedAt);

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

  const caseId = localStorage.getItem("caseId");
  const evidenceId = data[0]._id;

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/evidence/${caseId}/${evidenceId}`,
        editedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Saved data", response.data);
      setEditedData(response.data);
    } catch (error) {
      console.log(error.message);
    }
    setIsEditing(false);
  };

  const handleDeleteClick = () => {};

  const handleDismissClick = () => {
    setIsEditing(false);
    setEditedData(data[0]);
  };

  return (
    <div className="statement-modal-overlay" onClick={onClose}>
      <div
        className="statement-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Evidence</h2>
          <button onClick={handleEditClick}>Edit Information</button>
        </div>

        <img src={photo} className="flex center column evidence-image" />

        <div className="suspect-profile-body">
          <div className="suspect-data flex">
            <p>Type: </p>
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={editedData.type}
                onChange={handleChange}
              />
            ) : (
              <p>{editedData.type}</p>
            )}
          </div>

          <div className="suspect-data flex">
            <p>Description: </p>
            {isEditing ? (
              <textarea
                name="description"
                value={editedData.description}
                onChange={handleChange}
                rows="4"
                cols="50"
              />
            ) : (
              <p>{editedData.description}</p>
            )}
          </div>

          <div className="suspect-data flex">
            <p>Location: </p>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editedData.location}
                onChange={handleChange}
              />
            ) : (
              <p>{editedData.location}</p>
            )}
          </div>

          <div className="suspect-data flex">
            <p>Collected data: </p>
            {isEditing ? (
              <input
                type="date"
                name="collectedAt"
                value={editedData.collectedAt.split("T")[0]} // Ensure date format is correct
                onChange={handleChange}
              />
            ) : (
              <p>{date.toString()}</p>
            )}
          </div>
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

export default EvidenceModal;
