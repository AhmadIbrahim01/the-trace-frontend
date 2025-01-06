import React, { useEffect } from "react";
import "./WitnessModal.css";
import suspect from "../../assets/images/suspect.svg";
import user from "../../assets/icons/user.svg";
import calendar from "../../assets/icons/calendar.svg";
import location from "../../assets/icons/location.svg";
import call from "../../assets/icons/call.svg";
import caribbeanFingerprint from "../../assets/images/caribbean-fingerprint.svg";
import { useNavigate } from "react-router-dom";

const WitnessModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const handleNavigate = (userId) => {
    navigate("/add-witness-statement", { state: { userId } });
  };
  console.log(data);

  const { name, phone, age, gender, address, photo, _id } = data;

  const goToAddress = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${address}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="suspect-profile-header flex center">
          <h2>Profile</h2>
          <button>Edit Information</button>
        </div>

        <div className="suspect-profile-body flex">
          <img src={photo || suspect} alt="Suspect" />
          <div className="suspect-data-container flex column">
            <div className="suspect-data flex">
              <img src={user} alt="Name Icon" />
              <p>Name: {name}</p>
            </div>
            <div className="suspect-data flex">
              <img src={calendar} alt="Age Icon" />
              <p>Age: {age}</p>
            </div>
            <div className="suspect-data flex">
              <img src={user} alt="Age Icon" />
              <p>Gender: {gender}</p>
            </div>
            <div className="suspect-data flex">
              <img src={call} alt="Phone Icon" />
              <p>Phone: {phone}</p>
            </div>
            <div className="suspect-data flex">
              <img src={location} alt="Location Icon" />
              <p>Full address: {address}</p>
            </div>
          </div>
          <button className="suspect-data-button flex center">
            <img src={caribbeanFingerprint} alt="Fingerprint Icon" />
          </button>
        </div>

        <button
          onClick={() => handleNavigate(_id)}
          className="add-statement-btn flex center column"
        >
          Add Statement
        </button>
      </div>
    </div>
  );
};

export default WitnessModal;
