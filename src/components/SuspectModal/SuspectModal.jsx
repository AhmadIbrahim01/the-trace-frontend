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
import suspectLeft from "../../assets/images/suspect-left.svg";
import suspectFront from "../../assets/images/suspect-front.svg";
import suspectRight from "../../assets/images/suspect-right.svg";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const suspects = [
    {
      id: 1,
      name: "Ahmad Ibrahim",
      age: 23,
      occupation: "Sales Manager",
      bloodType: "O+",
      eyeHairColor: "Light Brown / Brown",
      heightWeight: "175cm / 77kg",
      address: "ST New York, 1254k street, close to Baked Goodees",
      phone: "+96176468212",
      images: [suspectLeft, suspectFront, suspectRight],
    },
    {
      id: 2,
      name: "John Doe",
      age: 29,
      occupation: "Software Engineer",
      bloodType: "B+",
      eyeHairColor: "Black / Black",
      heightWeight: "180cm / 80kg",
      address: "ST LA, 1025 Westview Ave, near Tech Park",
      phone: "+1234567890",
      images: [suspectLeft, suspectFront],
    },
    {
      id: 3,
      name: "John Doe",
      age: 29,
      occupation: "Software Engineer",
      bloodType: "B+",
      eyeHairColor: "Black / Black",
      heightWeight: "180cm / 80kg",
      address: "ST LA, 1025 Westview Ave, near Tech Park",
      phone: "+1234567890",
      images: [suspectLeft, suspectRight],
    },
  ];

  const suspectData = suspects.find((suspect) => suspect.id === data);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="suspect-profile-header flex center">
          <h2>Profile</h2>
          <button>Edit Information</button>
        </div>

        <div className="suspect-profile-body flex">
          <img src={suspect} alt="Suspect" />
          <div className="suspect-data-container flex column">
            <div className="suspect-data flex">
              <img src={user} alt="Name Icon" />
              <p>Name: {suspectData.name}</p>
            </div>
            <div className="suspect-data flex">
              <img src={calendar} alt="Age Icon" />
              <p>Age: {suspectData.age}</p>
            </div>
            <div className="suspect-data flex">
              <img src={briefcase} alt="Occupation Icon" />
              <p>Occupation: {suspectData.occupation}</p>
            </div>
            <div className="suspect-data flex">
              <img src={drop} alt="Blood Icon" />
              <p>Blood: {suspectData.bloodType}</p>
            </div>
            <div className="suspect-data flex">
              <img src={eye} alt="Eye/Hair Icon" />
              <p>Eye color/Hair: {suspectData.eyeHairColor}</p>
            </div>
            <div className="suspect-data flex">
              <img src={ruler} alt="Height/Weight Icon" />
              <p>Height/Weight: {suspectData.heightWeight}</p>
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
              <p>Full address: {suspectData.address}</p>
            </div>
            <button>View on map</button>
          </div>
          <div className="suspect-data flex">
            <img src={call} alt="Phone Icon" />
            <p>Phone: {suspectData.phone}</p>
          </div>
          <div className="suspect-images">
            <h3>Images:</h3>
            <div className="suspect-images-container flex center wrap">
              {suspectData.images.map((image, index) => (
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
