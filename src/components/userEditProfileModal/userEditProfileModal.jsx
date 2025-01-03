import React, { useEffect, useState } from "react";
import "./UserEditProfileModal.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const userEditProfileModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  // const { author, time, text, likes, profileImage } = data;
  const { firstName, lastName, email, phone, profilePicture } = data;
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    phone,
    profilePicture,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {}, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content edit-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Profile</h1>
        <form>
          <div className="edit-input flex column">
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="lastName">Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {/* <div className="edit-input flex column">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div> */}
          <div className="edit-input flex column">
            <label htmlFor="file">Profile Photo</label>
            <input id="file" name="file" type="file" />
          </div>
        </form>
        <div className="edit-user-buttons flex">
          <Button
            className={"edit-user-button flex center"}
            text={"Save Changes"}
          ></Button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default userEditProfileModal;
