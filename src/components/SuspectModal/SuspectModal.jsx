import React from "react";
import "./SuspectModal.css";

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
        <div className="suspect-profile-header">
          <h2>Profile</h2>
          <button>Edit Information</button>
        </div>
        <div className="suspect-profile-body">
          <img src="" alt="" />
          <div>
            <div>
              <img src="" alt="" />
              <p>Name: John Doe</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Age: 23</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Occupation: Sales manager</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Blood: O+</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Eye color/Hair: Light brown/Brown </p>
            </div>
            <div>
              <img src="" alt="" />
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
