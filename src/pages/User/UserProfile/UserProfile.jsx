import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/images/suspect.svg";
import document from "../../../assets/icons/document.svg";
import video from "../../../assets/icons/video.svg";
import gallery from "../../../assets/icons/gallery.svg";
import edit from "../../../assets/icons/edit.svg";

import "./UserProfile.css";
import starOne from "../../../assets/icons/star-1.svg";
import starTwo from "../../../assets/icons/star-2.svg";

import UserEditProfileModal from "../../../components/UserEditProfileModal/UserEditProfileModal";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goBack = () => {
    navigate(-1);
  };

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState("");

  const openEditModal = (data) => {
    setEditModalData(user);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const [progress, setProgress] = useState(30);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          setError("Token expired");
          localStorage.removeItem("authToken");
        } else {
          setUserId(decodedToken.userId);
        }
      } catch (err) {
        console.error("Failed to decode token:", err);
        setError("Failed to decode token");
      }
    } else {
      setError("No token found");
    }
  }, [token]);

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://127.0.0.1:8080/api/auth/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data.user);
          setLoading(false);
        } catch (error) {
          console.log(error.message);
          setError("Failed to load user data");
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [userId, token]);

  const {
    firstName,
    lastName,
    email,
    level,
    phone,
    profilePicture,
    tipsStats,
    badges,
  } = user;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex center column">
      <button type="button" className="logout-btn" onClick={logOut}>
        Log Out
      </button>
      <button type="button" className="back" onClick={goBack}>
        Back
      </button>

      <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="user-modal-header flex center">
          <h2>Profile</h2>
          <button onClick={() => openEditModal(user)}>Edit</button>
        </div>
        <div className="user-profile-image flex column center">
          <button className="user-profile-button">
            <img src={profilePicture || profile} alt="" />
          </button>
          <button className="user-profile-edit">
            <img src={edit} alt="" />
          </button>
          <h2>{firstName}</h2>
        </div>
        <div className="user-modal-header flex center">
          <h2>Level {level}</h2>
        </div>
        <div className="user-progress">
          <p>30/60</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>30 more comments till level </p>
        </div>
        <div className="user-modal-header flex column">
          <h2>Submitted tips</h2>
          <div className="submitted-tips flex center">
            <div className="submitted-tip flex center">
              <img src={video} alt="" />
              <h3>{tipsStats.videos} Videos</h3>
            </div>
            <div className="submitted-tip flex center">
              <img src={gallery} alt="" />
              <h3>{tipsStats.photos} Photos</h3>
            </div>
            <div className="submitted-tip flex center">
              <img src={document} alt="" />
              <h3>{tipsStats.documents} Docs</h3>
            </div>
          </div>
          <p className="accepted-tips t-left">
            {tipsStats.accepted} accepted tips
          </p>
        </div>
        <div className="user-modal-header flex column">
          <h2>Badges</h2>
          <div className="badges flex center wrap">
            {badges.map((badge, index) => (
              <div key={index} className="badge flex center">
                <img src={starOne} />
                <h3>{badge}</h3>
              </div>
            ))}
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
