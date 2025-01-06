import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddWitnessStatement.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AddWitnessStatement = () => {
  const location = useLocation();
  const { witnessId } = location.state || {};
  const [status, setStatus] = useState({ success: true, message: "" });

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/investigator-case");
  };

  const [formData, setFormData] = useState({
    date: "",
    statement: "",
    locationOfIncident: "",
    approximatedAge: "",
    description: "",
    additionalFeatures: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const caseId = localStorage.getItem("caseId");
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/witness/statements/${caseId}/${witnessId}`,
        formData,
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
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: error.response?.data?.message || "Something went wrong",
        color: "red",
      });
    }
  };

  return (
    <div className="investigator-form-container t-center flex column center">
      <h1>Add Witness Statement</h1>
      <form>
        <Button
          name={"back"}
          text={"Back to manage case"}
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
            rows={10}
            value={formData.statement}
            onChange={handleChange}
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

        <div className="input flex column">
          <label htmlFor="approximatedAge">Suspect Approximated Age</label>
          <select
            id="approximatedAge"
            name="approximatedAge"
            value={formData.approximatedAge}
            onChange={handleChange}
          >
            <option value="">Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
            <option value="66-75">66-75</option>
            <option value="76-85">76-85</option>
            <option value="86-100">86-100</option>
          </select>
        </div>

        <div className="input flex column">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a detailed description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="input flex column">
          <label htmlFor="additionalFeatures">Additional Features</label>
          <textarea
            id="additionalFeatures"
            name="additionalFeatures"
            placeholder="e.g., scars, tattoos, hair type"
            rows={5}
            value={formData.additionalFeatures}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="input flex column">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <Button
          type={"submit"}
          name={"add-statement"}
          text={"Add Statement"}
          className={"ivestigator-form-button"}
          onClick={handleSubmit}
        ></Button>
        {status.message && (
          <h2 style={{ color: status.color }}>{status.message}</h2>
        )}
      </form>
    </div>
  );
};

export default AddWitnessStatement;
