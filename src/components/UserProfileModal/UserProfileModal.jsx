import React from "react";
import "./UserProfileModal.css";
import suspect from "../../assets/images/suspect.svg";
import edit from "../../assets/icons/edit.svg";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const { author, time, text, likes, profileImage } = data;

  return (
    <div className="user-modal-overlay" onClick={onClose}>
      <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="user-profile-header flex center">
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
      </div>
    </div>
  );
};

export default Modal;
