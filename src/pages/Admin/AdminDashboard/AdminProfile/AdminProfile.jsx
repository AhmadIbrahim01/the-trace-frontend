import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AdminProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import profile from "../../../../assets/images/suspect.svg";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({ success: true, message: "" });
  //   const [profileImageUrl, setProfileImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const token = localStorage.getItem("authToken");
  const decoded = jwtDecode(token);
  const adminId = decoded.userId;

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/admin/admins/${adminId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setFormData({
          firstName: response.data.admin.firstName,
          lastName: response.data.admin.lastName,
          email: response.data.admin.email,
          phone: response.data.admin.phone,
          password: response.data.admin.password,
          profilePicture: response.data.admin.profilePicture,
        });

        console.log(response);
      } catch (error) {
        console.log(error.message);
        setStatus({
          success: false,
          message: "An Error Occured",
        });
      }
    };

    fetchAdminData();
  }, [refresh]);

  console.log(formData);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goBack = () => {
    navigate("/admin-dashboard");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataWithImage = { ...formData, profilePicture: imageUrl };
    console.log("daata with img", dataWithImage);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/admin/${adminId}`,
        dataWithImage,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFormData((prevState) => ({
        ...prevState,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        phone: response.data.phone,
        profilePicture: response.data.profilePicture,
      }));
      setStatus({
        success: true,
        message: "Registiration Successful",
      });
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: "An Error Occured",
      });
    }
  };
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
      setImageUrl(uploadedImageUrl.url);
    } catch (error) {
      console.error("Error uploading image or updating profile:", error);
    }
  };
  return (
    <div className="edit-admin-form t-center flex column center">
      <button type="button" className="logout-btn" onClick={logOut}>
        Log Out
      </button>
      <button type="button" className="back" onClick={goBack}>
        Back
      </button>
      <form onSubmit={handleSubmit}>
        <div className="user-profile-image flex column center">
          <label htmlFor="profile">
            <img src={formData.profilePicture || profile} alt="" />
          </label>

          <input
            className="profile-input"
            type="file"
            name="profile"
            id="profile"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />
        </div>

        <div className="fullname-input flex">
          <div className="admin-edit-input flex column">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="admin-edit-input flex column">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="fullname-input flex">
          <div className="admin-edit-input flex column">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="admin-edit-input flex column">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="fullname-input flex">
          <div className="admin-edit-input flex column">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="admin-edit-input admin-btn-container flex column">
            <Button
              type={"submit"}
              name={"add-investigator"}
              text={"Apply Changes"}
              className={"edit-admin-button"}
            ></Button>
          </div>
        </div>
      </form>
      {status.success ? (
        <p style={{ color: "green" }}>{status.message}</p>
      ) : (
        <p style={{ color: "red" }}>{status.message}</p>
      )}
    </div>
  );
};

export default AdminProfile;
