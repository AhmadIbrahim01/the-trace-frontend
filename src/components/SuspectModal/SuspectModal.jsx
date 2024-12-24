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
        <div className="suspect-profile-body">
          <img src={suspect} alt="" />
          <div>
            <div>
              <img src={user} alt="" />
              <p>Name: John Doe</p>
            </div>
            <div>
              <img src={calendar} alt="" />
              <p>Age: 23</p>
            </div>
            <div>
              <img src={briefcase} alt="" />
              <p>Occupation: Sales manager</p>
            </div>
            <div>
              <img src={drop} alt="" />
              <p>Blood: O+</p>
            </div>
            <div>
              <img src={eye} alt="" />
              <p>Eye color/Hair: Light brown/Brown </p>
            </div>
            <div>
              <img src={ruler} alt="" />
              <p>Height/Weight: 175cm/77kg</p>
            </div>
          </div>
          <button>
            <img src="" alt="" />
          </button>
        </div>

        <div className="suspect-profile-body">
          <div>
            <div>
              <img src="" alt="" />
              <p>Height/Weight: 175cm/77kg</p>
            </div>
            <button>View on map</button>
          </div>
          <div>
            <img src="" alt="" />
            <p>Phone: +96176468212</p>
          </div>
          <div>
            <h3>images:</h3>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <p>{suspects[data - 1].name}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
