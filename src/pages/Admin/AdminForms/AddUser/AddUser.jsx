import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddUser = () => {
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const backTo = () => {
    navigate("/manage-users");
  };
  const [status, setStatus] = useState({ success: true, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const dataWithImage = { ...data, profilePicture: imageUrl };
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/auth/register`,
        dataWithImage,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus({
        success: true,
        message: "User added successfully",
      });
    } catch (error) {
      console.log(error.message);

      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setStatus({ success: false, message: errorMessage });
    }
    reset();
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
    <div className="admin-form-container t-center flex column center">
      <h1>Add User</h1>
      <form className="flex column" onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"← Back"}
          className={"form-back-button"}
          type={"button"}
          onClick={backTo}
        ></Button>

        <div className="input flex column">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="number"
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 8,
                message: "Phone number must be 8 numbers",
              },
              maxLength: {
                value: 8,
                message: "Phone number must be 8 numbers",
              },
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor={"profilePicture"}>Investigator Image</label>
          <input
            id={"profilePicture"}
            name={"profilePicture"}
            type={"file"}
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />
        </div>

        <div className="input flex column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        {status.message &&
          (status.success ? (
            <h2 style={{ color: "green" }}>{status.message}</h2>
          ) : (
            <h2 style={{ color: "red" }}>{status.message}</h2>
          ))}
        <Button
          type={"submit"}
          name={"add-investigator"}
          text={"Add User"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddUser;
