import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddSuspectStatement.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AddSuspectStatement = () => {
  const location = useLocation();
  const { suspectId } = location.state || {};
  const [status, setStatus] = useState({ success: true, message: "" });

  const caseId = localStorage.getItem("caseId");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [formData, setFormData] = useState({
    date: "",
    statement: "",
    locationOfIncident: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/suspect/statements/${caseId}/${suspectId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus({
        success: true,
        message: "Suspect statement added successfull",
      });
    } catch (error) {
      console.log(error.message);

      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setStatus({ success: false, message: errorMessage });
    }
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

  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Suspect Statement</h1>
      <form className="flex column">
        <Button
          name={"back"}
          text={"← Back"}
          className={"form-back-button"}
          type={"button"}
          onClick={goBack}
        ></Button>

        <div className="input flex column">
          <label htmlFor="date">Date of Statement</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="input flex column">
          <label htmlFor="statement">Statement</label>
          <textarea
            id="statement"
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            rows={10}
          ></textarea>
        </div>

        <div className="input flex column">
          <label htmlFor="locationOfIncident">Location of incident</label>
          <input
            id="locationOfIncident"
            name="locationOfIncident"
            type="text"
            value={formData.locationOfIncident}
            onChange={handleChange}
          />
        </div>

        {/* <div className="input flex column">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            value={formData.photo}
            onChange={handleChange}
          />
        </div> */}

        {status.message &&
          (status.success ? (
            <h2 style={{ color: "green" }}>{status.message}</h2>
          ) : (
            <h2 style={{ color: "red" }}>{status.message}</h2>
          ))}

        <Button
          type={"submit"}
          name={"add-statement"}
          text={"Add Statement"}
          className={"ivestigator-form-button"}
          onClick={handleSubmit}
        ></Button>
      </form>
    </div>
  );
};

export default AddSuspectStatement;
