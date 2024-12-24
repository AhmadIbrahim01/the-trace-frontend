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
  console.log(data);

  const suspects = [
    { id: 1, name: "Adnan Ibrahim" },
    { id: 2, name: "Adnan Ibrahim" },
    { id: 3, name: "Adnan Ibrahim" },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="suspect-profile-header flex center">
          <h2>Profile</h2>
          <button>Edit Information</button>
        </div>
        <div className="suspect-profile-body flex">
          <img src={suspect} alt="" />
          <div className="suspect-data-container flex column">
            <div className="suspect-data flex">
              <img src={user} alt="" />

              <p>Name: {suspects[data - 1].name}</p>
            </div>
            <div className="suspect-data flex">
              <img src={calendar} alt="" />
              <p>Age: 23</p>
            </div>
            <div className="suspect-data flex">
              <img src={briefcase} alt="" />
              <p>Occupation: Sales manager</p>
            </div>
            <div className="suspect-data flex">
              <img src={drop} alt="" />
              <p>Blood: O+</p>
            </div>
            <div className="suspect-data flex">
              <img src={eye} alt="" />
              <p>Eye color/Hair: Light brown/Brown </p>
            </div>
            <div className="suspect-data flex">
              <img src={ruler} alt="" />
              <p>Height/Weight: 175cm/77kg</p>
            </div>
          </div>
          <button className="suspect-data-button flex center">
            <img src={caribbeanFingerprint} alt="" />
          </button>
        </div>

        <div className="suspect-profile-body">
          <div className="suspect-map flex center">
            <div className="suspect-data flex ">
              <img src={location} alt="" />
              <p>
                Full address: ST New York, 1254k street, close to Baked Goodees
              </p>
            </div>
            <button>View on map</button>
          </div>
          <div className="suspect-data flex">
            <img src={call} alt="" />
            <p>Phone: +96176468212</p>
          </div>
          <div className="suspect-images">
            <h3>images:</h3>
            <div className="suspect-images-container flex center wrap">
              <img src={suspectLeft} alt="" />
              <img src={suspectFront} alt="" />
              <img src={suspectRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
