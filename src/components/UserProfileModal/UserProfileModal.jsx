import React, { useState } from "react";
import "./UserProfileModal.css";
import suspect from "../../assets/images/suspect.svg";
import edit from "../../assets/icons/edit.svg";
import document from "../../assets/icons/document.svg";
import video from "../../assets/icons/video.svg";
import gallery from "../../assets/icons/gallery.svg";
import starOne from "../../assets/icons/star-1.svg";
import starTwo from "../../assets/icons/star-2.svg";

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
            <img src={profileImage} alt="" />
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
        <div className="user-modal-header flex column">
          <h2>Submitted tips</h2>
          <div className="submitted-tips flex center">
            <div className="submitted-tip flex center">
              <img src={video} alt="" />
              <h3>3 Videos</h3>
            </div>
            <div className="submitted-tip flex center">
              <img src={gallery} alt="" />
              <h3>3 Photos</h3>
            </div>
            <div className="submitted-tip flex center">
              <img src={document} alt="" />
              <h3>3 Docs</h3>
            </div>
          </div>
          <p className="accepted-tips t-left">4 accepted tips</p>
        </div>
        <div className="user-modal-header flex column">
          <h2>Badges</h2>
          <div className="badges flex center wrap">
            <div className="badge flex center">
              <img src={starOne} alt="" />
              <h3>Top contributor</h3>
            </div>
            <div className="badge flex center">
              <img src={starTwo} alt="" />
              <h3>Top commenter</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
