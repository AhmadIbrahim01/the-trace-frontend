import React, { useEffect, useState } from "react";
import "./WitnessModal.css";
import suspect from "../../assets/images/suspect.svg";
import user from "../../assets/icons/user.svg";
import calendar from "../../assets/icons/calendar.svg";
import location from "../../assets/icons/location.svg";
import call from "../../assets/icons/call.svg";
import caribbeanFingerprint from "../../assets/images/caribbean-fingerprint.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WitnessModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();
  const handleNavigate = (witnessId) => {
    navigate("/add-witness-statement", { state: { witnessId } });
  };

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
  const witnessId = data._id;

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/witness/${caseId}/witnesses/${witnessId}`,
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
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/witness/${caseId}/${witnessId}`,
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
            `
            http://127.0.0.1:${
              import.meta.env.VITE_SERVER_PORT
            }/api/witness/${caseId}/${witnessId}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("new dataaaa");
          setEditedData(response.data.witness);
        } catch (error) {
          console.log(error.message);
        }
      };
      refetchData();
    }
  }, [refresh]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="witness-modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Profile</h2>
          {isEditing ? (
            <button onClick={handleDismissClick}>Dismiss</button>
          ) : (
            <button onClick={handleEditClick}>Edit Information</button>
          )}
        </div>

        <div className="suspect-profile-body flex">
          <img src={editedData.photo || suspect} alt="Witness" />
          <div className="suspect-data-container flex column">
            <div className="suspect-data flex">
              <img src={user} alt="Name Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleChange}
                />
              ) : (
                <p>Name: {editedData.name}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={calendar} alt="Age Icon" />
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={editedData.age}
                  onChange={handleChange}
                />
              ) : (
                <p>Age: {editedData.age}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={user} alt="Gender Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="gender"
                  value={editedData.gender}
                  onChange={handleChange}
                />
              ) : (
                <p>Gender: {editedData.gender}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={call} alt="Phone Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={editedData.phone}
                  onChange={handleChange}
                />
              ) : (
                <p>Phone: {editedData.phone}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={location} alt="Location Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={editedData.address}
                  onChange={handleChange}
                />
              ) : (
                <p>Full address: {editedData.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Show Save and Dismiss buttons when in editing mode */}
        {isEditing && (
          <div className="edit-buttons flex">
            <button onClick={handleSaveClick} className="save-btn">
              Save
            </button>
            <button onClick={handleDeleteClick} className="delete-btn">
              Delete
            </button>
          </div>
        )}
        <button onClick={onClose} className="dismiss-btn">
          X
        </button>

        <button
          onClick={() => handleNavigate(editedData._id)}
          className="add-witness-statement flex center column"
        >
          Add Statement
        </button>
      </div>
    </div>
  );
};

export default WitnessModal;
