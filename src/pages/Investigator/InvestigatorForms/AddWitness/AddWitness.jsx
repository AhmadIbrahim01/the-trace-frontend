import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddWitness.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddWitness = () => {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState({
    success: true,
    message: "",
    color: "green",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/investigator-case");
  };

  const caseId = localStorage.getItem("caseId");

  const onSubmit = async (data) => {
    const dataWithImage = { ...data, photo: imageUrl };

    try {
      const respone = await axios.post(
        `http://127.0.0.1:8080/api/witness/${caseId}`,
        dataWithImage,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStatus({
        success: true,
        message: "Witness added successfully",
        color: "green",
      });
      console.log(respone.data);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: error.response?.data?.message || "Something went wrong",
        color: "red",
      });
    }
    reset();
  };

  if (!caseId)
    return (
      <div className="error flex column center">
        <h1 className="t-center">
          Please select a case
          <br /> to view this page.
        </h1>
      </div>
    );

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
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Witness</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        />

        <div className="input flex column">
          <label htmlFor="name">Witness Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter witness name"
            {...register("name", { required: "Witness name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div className="input flex column">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="Enter phone number"
            {...register("phone", {
              required: "Witness phone is required",
              minLength: {
                value: 8,
                message: "Phone must be of 8 nubmers",
              },
              maxLength: {
                value: 8,
                message: "Phone must be of 8 nubmers",
              },
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Enter age"
            {...register("age", { required: "Age is required" })}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        </div>

        <div className="input flex column">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p style={{ color: "red" }}>{errors.gender.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            {...register("address", {
              required: "Witness address is required",
            })}
          />
          {errors.address && (
            <p style={{ color: "red" }}>{errors.address.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor={"photo"}>Witness Image</label>
          <input
            id={"photo"}
            name={"photo"}
            type={"file"}
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />
        </div>

        <Button
          type={"submit"}
          name={"add-witness"}
          text={"Add Witness"}
          className={"ivestigator-form-button"}
        />
        {status.message && (
          <h2 style={{ color: status.color }}>{status.message}</h2>
        )}
      </form>
    </div>
  );
};

export default AddWitness;
