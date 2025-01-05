import React from "react";
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
import caribbeanFingerprint from "../../assets/images/caribbean-fingerprint.svg";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  console.log(data);

  const {
    name,
    phone,
    age,
    gender,
    address,
    crimeInvolved,
    occupation,
    blood,
    height,
    weight,
    eyeColor,
    hairColor,
    photos,
  } = data;

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
          <img src={photos[0]} alt="Suspect" />
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
              <img src={briefcase} alt="Occupation Icon" />
              <p>Occupation: {occupation}</p>
            </div>
            <div className="suspect-data flex">
              <img src={drop} alt="Blood Icon" />
              <p>Blood: {blood}</p>
            </div>
            <div className="suspect-data flex">
              <img src={eye} alt="Eye/Hair Icon" />
              <p>
                Eye color/Hair: {eyeColor}/{hairColor}
              </p>
            </div>
            <div className="suspect-data flex">
              <img src={ruler} alt="Height/Weight Icon" />
              <p>
                Height/Weight: {height}cm/{weight}kg
              </p>
            </div>
          </div>
          <button className="suspect-data-button flex center">
            <img src={caribbeanFingerprint} alt="Fingerprint Icon" />
          </button>
        </div>

        <div className="suspect-profile-body">
          <div className="suspect-map flex center">
            <div className="suspect-data flex">
              <img src={location} alt="Location Icon" />
              <p>Full address: {address}</p>
            </div>
            <button onClick={goToAddress}>View on map</button>
          </div>
          <div className="suspect-data flex">
            <img src={call} alt="Phone Icon" />
            <p>Phone: {phone}</p>
          </div>
          <div className="suspect-images">
            <h3>Images:</h3>
            <div className="suspect-images-container flex center wrap">
              {photos.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Suspect Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
