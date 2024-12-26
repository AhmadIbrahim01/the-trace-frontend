import React from "react";
import "./UserEditProfileModal.css";
import Input from "../Input/Input";

const userEditProfileModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const { author, time, text, likes, profileImage } = data;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content edit-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Profile</h1>
        <form>
          <div className="edit-input flex column">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="number" />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default userEditProfileModal;
