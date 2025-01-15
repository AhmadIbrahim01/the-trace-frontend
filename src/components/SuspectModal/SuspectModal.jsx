import React, { useEffect, useState } from "react";
import "./SuspectModal.css";
import suspect from "../../assets/images/suspect.svg";
import user from "../../assets/icons/user.svg";
import calendar from "../../assets/icons/calendar.svg";
import briefcase from "../../assets/icons/briefcase.svg";
import drop from "../../assets/icons/drop.svg";
import eye from "../../assets/icons/eye.svg";
import ruler from "../../assets/icons/ruler.svg";
import location from "../../assets/icons/location.svg";
import call from "../../assets/icons/call.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();

  const handleNavigate = (suspectId) => {
    navigate("/add-suspect-statement", { state: { suspectId } });
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
  const suspectId = data._id;

  const handleSaveClick = async () => {
    console.log("Saved data", editedData);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/suspect/${caseId}/${suspectId}`,
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
        `http://127.0.0.1:8080/api/suspect/${caseId}/${suspectId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Deleted successfully");

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
    console.log("new data");

    if (editedData !== data) {
      const refetchData = async () => {
        try {
          const response = await axios.get(
            `
            http://127.0.0.1:8080/api/suspect/${caseId}/${suspectId}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("new dataaaa");
          setEditedData(response.data.suspect);
          console.log("newest data: ", editedData);
        } catch (error) {
          console.log(error.message);
        }
      };
      refetchData();
    }
  }, [refresh]);

  const goToAddress = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${editedData.address}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content scrollable-div"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="suspect-profile-header flex center">
          <h2>Profile</h2>
          <button onClick={handleEditClick}>Edit Information</button>
        </div>

        <div className="suspect-profile-body flex">
          <img src={data.photos[0] || suspect} alt="Suspect" />
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
              <img src={briefcase} alt="Occupation Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="occupation"
                  value={editedData.occupation}
                  onChange={handleChange}
                />
              ) : (
                <p>Occupation: {editedData.occupation}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={drop} alt="Blood Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="blood"
                  value={editedData.blood}
                  onChange={handleChange}
                />
              ) : (
                <p>Blood: {editedData.blood}</p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={eye} alt="Eye/Hair Icon" />
              {isEditing ? (
                <input
                  type="text"
                  name="eyeColor"
                  value={editedData.eyeColor}
                  onChange={handleChange}
                />
              ) : (
                <p>
                  Eye color/Hair: {editedData.eyeColor}/{editedData.hairColor}
                </p>
              )}
            </div>
            <div className="suspect-data flex">
              <img src={ruler} alt="Height/Weight Icon" />
              {isEditing ? (
                <input
                  type="number"
                  name="height"
                  value={editedData.height}
                  onChange={handleChange}
                />
              ) : (
                <p>
                  Height/Weight: {editedData.height}cm/{editedData.weight}kg
                </p>
              )}
            </div>
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

        <div className="suspect-profile-body">
          <div className="suspect-map flex center">
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
            <button onClick={goToAddress}>View on map</button>
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
            <img src={user} alt="Phone Icon" />
            {isEditing ? (
              <input
                type="text"
                name="crimeInvolved"
                value={editedData.crimeInvolved}
                onChange={handleChange}
              />
            ) : (
              <p>Crime Involved: {editedData.crimeInvolved}</p>
            )}
          </div>
          <div className="suspect-images flex">
            <div className="suspect-images-container flex center wrap">
              {data.photos.length !== 0 ? (
                data.photos.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Suspect Image ${index + 1}`}
                  />
                ))
              ) : (
                <h1 style={{ color: "red" }}>No Images Available</h1>
              )}
            </div>
            <button
              onClick={() => handleNavigate(data._id)}
              className="add-statement-btn flex center column"
            >
              Add Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
