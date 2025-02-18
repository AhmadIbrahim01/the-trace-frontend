import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/images/suspect.svg";
import document from "../../../assets/icons/document.svg";
import video from "../../../assets/icons/video.svg";
import gallery from "../../../assets/icons/gallery.svg";

import "./UserProfile.css";
import starOne from "../../../assets/icons/star-1.svg";

import UserEditProfileModal from "../../../components/UserEditProfileModal/UserEditProfileModal";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  const [profileImageUrl, setProfileImageUrl] = useState("");

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
            `http://127.0.0.1:${
              import.meta.env.VITE_SERVER_PORT
            }/api/auth/${userId}`,
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

  if (loading) {
    return (
      <div
        className="flex center column"
        style={{ height: "100vh", gap: "40px" }}
      >
        <h1 style={{ color: "white" }}>You are logged out</h1>
        <button className="tip-button" onClick={goBack}>
          Go back
        </button>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ahmad_preset");
    data.append("cloud_name", "dnhicntxv");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnhicntxv/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploadedImageUrl = await res.json();
      const imageUrl = uploadedImageUrl.url;
      console.log("Uploaded image URL:", imageUrl);

      const updateRes = await fetch(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/auth/profilepicture/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            profilePicture: imageUrl,
          }),
        }
      );

      const updateResponse = await updateRes.json();

      if (updateRes.ok) {
        console.log("Profile updated successfully:", updateResponse);
      } else {
        console.error("Error updating profile:", updateResponse);
      }

      setProfileImageUrl(imageUrl);
    } catch (error) {
      console.error("Error uploading image or updating profile:", error);
    }
  };

  return (
    <div className="user-profile-modal flex center column">
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
        <form>
          <div className="user-profile-image flex column center">
            <label htmlFor="profile">
              {profileImageUrl ? (
                <img src={profileImageUrl || profile} alt="" />
              ) : (
                <img src={profilePicture || profile} alt="" />
              )}
            </label>

            <input
              className="profile-input"
              type="file"
              name="profile"
              id="profile"
              onChange={handleFileUpload}
            />

            <h2>{firstName}</h2>
          </div>
        </form>
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
            {badges.length !== 0 ? (
              badges.map((badge, index) => (
                <div key={index} className="badge flex center">
                  <img src={starOne} />
                  <h3>{badge}</h3>
                </div>
              ))
            ) : (
              <h5 style={{ color: "red", marginTop: "10px" }}>No badges</h5>
            )}
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
