import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddWitness.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddWitness = () => {
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

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     photo: file,
  //   }));
  // };

  const caseId = localStorage.getItem("caseId");

  const onSubmit = async (data) => {
    try {
      const respone = await axios.post(
        `http://127.0.0.1:8080/api/witness/${caseId}`,
        data,
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
            {...register("phone", { required: "Witness phone is required" })}
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

        {/* <div className="input flex column">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            {...register("photo")}
          />
          {errors.photo && (
            <p style={{ color: "red" }}>{errors.photo.message}</p>
          )}
        </div> */}

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
