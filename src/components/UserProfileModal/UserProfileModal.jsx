import React, { useState } from "react";
import "./UserProfileModal.css";
import suspect from "../../assets/images/suspect.svg";
import edit from "../../assets/icons/edit.svg";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const { author, time, text, likes, profileImage } = data;

  const [progress, setProgress] = useState(30);

  return (
    <div className="user-modal-overlay" onClick={onClose}>
      <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="user-modal-header flex center">
          <h2>Profile</h2>
          <button>Edit</button>
        </div>
        <div className="user-profile-image flex column center">
          <button className="user-profile-button">
            <img src={suspect} alt="" />
          </button>
          <button className="user-profile-edit">
            <img src={edit} alt="" />
          </button>
          <h2>{author}</h2>
        </div>
        <div className="user-modal-header flex center">
          <h2>Level 3</h2>
        </div>
        <div className="user-progress">
          <p>30/60</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>30 more comments till level 4</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
