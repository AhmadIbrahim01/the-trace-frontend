import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddSuspect.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddSuspect = () => {
  const [status, setStatus] = useState({ success: true, message: "" });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const caseId = localStorage.getItem("caseId");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/suspect/${caseId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus({
        success: true,
        message: "Suspect added successfully",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: error.response?.data?.message || "Something went wrong",
      });
    }
    reset();
  };

  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Suspect</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
        <div className="input flex column">
          <label htmlFor={"name"}>Suspect Name</label>
          <input
            id={"name"}
            name={"name"}
            type={"text"}
            {...register("name", { required: "Suspect name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div className="input flex column">
          <label htmlFor={"phone"}>Phone</label>
          <input
            id={"phone"}
            name={"phone"}
            type={"text"}
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor={"age"}>Age</label>
          <input
            id={"age"}
            name={"age"}
            type={"number"}
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
            })}
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
          <label htmlFor={"address"}>Address</label>
          <input
            id={"address"}
            name={"address"}
            type={"text"}
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p style={{ color: "red" }}>{errors.address.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="crimeInvolved">Crime Involved</label>
          <textarea
            id="crimeInvolved"
            name="crimeInvolved"
            rows={5}
            {...register("crimeInvolved", {
              required: "Crime involved is required",
            })}
          ></textarea>
          {errors.crimeInvolved && (
            <p style={{ color: "red" }}>{errors.crimeInvolved.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor={"occupation"}>Occupation</label>
          <input
            id={"occupation"}
            name={"occupation"}
            type={"text"}
            {...register("occupation", { required: "Occupation is required" })}
          />
          {errors.occupation && (
            <p style={{ color: "red" }}>{errors.occupation.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor={"height"}>Height (cm)</label>
          <input
            id={"height"}
            name={"height"}
            type={"number"}
            {...register("height", {
              required: "Height is required",
              valueAsNumber: true,
            })}
          />
          {errors.height && (
            <p style={{ color: "red" }}>{errors.height.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor={"weight"}>Weight (kg)</label>
          <input
            id={"weight"}
            name={"weight"}
            type={"number"}
            {...register("weight", {
              required: "Weight is required",
              valueAsNumber: true,
            })}
          />
          {errors.weight && (
            <p style={{ color: "red" }}>{errors.weight.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor={"blood"}>Blood type</label>
          <input
            id={"blood"}
            name={"blood"}
            type={"text"}
            {...register("blood", { required: "Eye color is required" })}
          />
          {errors.blood && (
            <p style={{ color: "red" }}>{errors.blood.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor={"eyeColor"}>Eye Color</label>
          <input
            id={"eyeColor"}
            name={"eyeColor"}
            type={"text"}
            {...register("eyeColor", { required: "Eye color is required" })}
          />
          {errors.eyeColor && (
            <p style={{ color: "red" }}>{errors.eyeColor.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor={"hairColor"}>Hair Color</label>
          <input
            id={"hairColor"}
            name={"hairColor"}
            type={"text"}
            {...register("hairColor", { required: "Hair color is required" })}
          />
          {errors.hairColor && (
            <p style={{ color: "red" }}>{errors.hairColor.message}</p>
          )}
        </div>
        {/* <div className="input flex column">
          <label htmlFor={"photos"}>Suspect Image</label>
          <input
            id={"photos"}
            name={"photos"}
            type={"file"}
            {...register("photos")}
          />
          {errors.photos && (
            <p style={{ color: "red" }}>{errors.photos.message}</p>
          )}
        </div> */}

        <Button
          type={"submit"}
          name={"add-suspect"}
          text={"Add Suspect"}
          className={"ivestigator-form-button"}
        ></Button>
        {status.message && <h2 style={{ color: "red" }}>{status.message}</h2>}
      </form>
    </div>
  );
};

export default AddSuspect;
