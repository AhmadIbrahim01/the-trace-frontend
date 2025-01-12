import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./SubmitTip.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup
  .object({
    content: yup
      .string()
      .required("Tip details are required.")
      .min(10, "Tip details must be at least 10 characters."),
    file: yup.mixed().nullable(),
    locationOfIncident: yup
      .string()
      .required("Location of the incident is required."),
    dateOfIncident: yup.date().required("Date of the incident is required."),
    anonymous: yup.boolean(),
    confirm: yup
      .boolean()
      .oneOf([true], "You must confirm the information is accurate."),
  })
  .required();

const SubmitTip = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState({ success: true, message: "" });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const token = localStorage.getItem("authToken");
  const caseId = localStorage.getItem("caseId");

  const decoded = jwtDecode(token);
  const uId = decoded.userId;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      userId: uId,
      content: "",
      file: null,
      locationOfIncident: "",
      dateOfIncident: "",
      anonymous: false,
      confirm: false,
    },
  });

  useEffect(() => {
    setValue("userId", uId);
  }, [uId, setValue]);

  const onSubmit = async (data) => {
    const dataWithImage = { ...data, file: imageUrl };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/tip/${caseId}`,
        dataWithImage,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      reset({
        userId: uId,
        content: "",
        file: null,
        locationOfIncident: "",
        dateOfIncident: "",
        anonymous: false,
        confirm: false,
      });

      setStatus({
        success: true,
        message: "Tip added successfull",
      });
    } catch (error) {
      console.log(error.message);

      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setStatus({ success: false, message: errorMessage });
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
    <div className="investigator-form-container t-center flex column center">
      <h1>Submit a Tip</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"Back to case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
        <div className="input flex column">
          <label htmlFor="statement">Tip Details</label>
          <textarea
            id="statement"
            placeholder="Describe the information you want to share..."
            name="content"
            rows={10}
            {...register("content")}
          />
          {errors.content && (
            <p style={{ color: "red" }}>{errors.content.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor={"file"}>Evidence Image</label>
          <input
            id={"file"}
            name={"file"}
            type={"file"}
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />
        </div>

        <div className="input flex column">
          <label htmlFor="location">Location of Incident</label>
          <input
            id="location"
            name="locationOfIncident"
            type="text"
            {...register("locationOfIncident")}
          />
        </div>
        {errors.locationOfIncident && (
          <p style={{ color: "red" }}>{errors.locationOfIncident.message}</p>
        )}
        <div className="input flex column">
          <label htmlFor="date">Date of Incident</label>
          <input
            id="date"
            name="dateOfIncident"
            type="date"
            {...register("dateOfIncident")}
          />
        </div>
        {errors.dateOfIncident && (
          <p style={{ color: "red" }}>{errors.dateOfIncident.message}</p>
        )}
        <div className="input flex column">
          <label>
            <input type="checkbox" {...register("anonymous")} />
            Submit Anonymously
          </label>
        </div>
        <div className="input flex column">
          <label>
            <input type="checkbox" {...register("confirm")} />I confirm that the
            information provided is accurate to the best of my knowledge.
          </label>
          {errors.confirm && (
            <p style={{ color: "red" }}>{errors.confirm.message}</p>
          )}
        </div>
        {status.message &&
          (status.success ? (
            <h2 style={{ color: "green" }}>{status.message}</h2>
          ) : (
            <h2 style={{ color: "red" }}>{status.message}</h2>
          ))}
        <Button
          type="submit"
          name="submit-tip"
          text="Submit Tip"
          className="ivestigator-form-button"
        />
      </form>
    </div>
  );
};

export default SubmitTip;
