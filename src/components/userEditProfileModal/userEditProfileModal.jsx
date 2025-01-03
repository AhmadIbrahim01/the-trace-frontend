import React, { useEffect, useState } from "react";
import "./UserEditProfileModal.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";

const userEditProfileModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const [status, setStatus] = useState({ success: true });
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const userId = data._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/auth/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onClose();
      setFormData((prevState) => ({
        ...prevState,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        phone: response.data.phone,
      }));
      setStatus({
        success: true,
        message: "Registiration Successful",
      });
      localStorage.setItem("name", formData.firstName);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: "An Error Occured",
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content edit-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Profile</h1>
        <form>
          <div className="edit-input flex column">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-input flex column">
            <label htmlFor="lastName">Last name</label>
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
            type={"submit"}
            onClick={handleSubmit}
          ></Button>
          <button onClick={onClose}>Close</button>
          {!status.success && <p style={{ color: "red" }}>{status.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default userEditProfileModal;
