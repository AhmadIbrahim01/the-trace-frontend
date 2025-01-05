import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddEvidence.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddEvidence = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [status, setStatus] = useState({ success: true, message: "" });

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
        `http://127.0.0.1:8080/api/evidence/${caseId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setStatus({
        success: true,
        message: "Login successfull",
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.message);

      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setStatus({ success: false, message: errorMessage });
    }
    reset();
  };

  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Evidence</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"Back to manage case"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>
        <div className="input flex column">
          <label htmlFor="evidences">Type of Evidence</label>
          <select name="type" id="type" {...register("type")}>
            <option value="fingerprint">Fingerprint</option>
            <option value="file">File</option>
            <option value="hair">Hair</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input flex column">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            {...register("description")}
          ></textarea>
        </div>

        <div className="input flex column">
          <label htmlFor={"location"}>Location of Collection</label>
          <input
            id={"location"}
            name={"location"}
            type={"text"}
            {...register("location")}
          />
        </div>
        <div className="input flex column">
          <label htmlFor={"collectedAt"}>Date Collected</label>
          <input
            id={"collectedAt"}
            name={"collectedAt"}
            type={"date"}
            {...register("collectedAt")}
          />
        </div>
        <div className="input flex column">
          <label htmlFor={"photo"}>Evidence Image</label>
          <input
            id={"photo"}
            name={"photo"}
            type={"file"}
            {...register("photo")}
          />
        </div>

        <Button
          type={"submit"}
          name={"add-evidence"}
          text={"Add Evidence"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddEvidence;
