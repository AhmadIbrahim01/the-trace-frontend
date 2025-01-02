import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../../assets/images/suspect.svg";
import document from "../../../assets/icons/document.svg";
import video from "../../../assets/icons/video.svg";
import gallery from "../../../assets/icons/gallery.svg";
import edit from "../../../assets/icons/edit.svg";

import "./UserProfile.css";
import starOne from "../../../assets/icons/star-1.svg";
import starTwo from "../../../assets/icons/star-2.svg";

import UserEditProfileModal from "../../../components/UserEditProfileModal/UserEditProfileModal";

const UserProfile = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState("");
  const data = {
    author: "Ahmad",
    time: "123",
    text: "asdadas",
    likes: 132,
    profileImage: "123",
  };
  const { author, time, text, likes, profileImage } = data;

  const openEditModal = (data) => {
    setEditModalData(data);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const goBack = () => {
    navigate(-1);
  };

  const [progress, setProgress] = useState(30);

  return (
    <div className=" flex center column">
      <button type="button" className="logout-btn" onClick={logOut}>
        Log Out
      </button>
      <button type="button" className="back" onClick={goBack}>
        Back
      </button>

      <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="user-modal-header flex center">
          <h2>Profile</h2>
          <button onClick={() => openEditModal(data)}>Edit</button>
        </div>
        <div className="user-profile-image flex column center">
          <button className="user-profile-button">
            <img src={profilePicture} alt="" />
          </button>
          <button className="user-profile-edit">
            <img src={edit} alt="" />
          </button>
          <h2>Ahmad</h2>
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
      <UserEditProfileModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        data={editModalData}
      />
    </div>
  );
};

export default UserProfile;
