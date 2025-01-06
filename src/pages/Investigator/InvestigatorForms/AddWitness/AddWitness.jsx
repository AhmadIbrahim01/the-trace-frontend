import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import "./AddWitness.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddWitness = () => {
  const [status, setStatus] = useState({
    success: true,
    message: "",
    color: "green",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "male",
    address: "",
    photo: null,
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const caseId = localStorage.getItem("caseId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respone = await axios.post(
        `http://127.0.0.1:8080/api/witness/${caseId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(respone.data);

      setFormData({
        name: "",
        phone: "",
        age: "",
        gender: "male",
        address: "",
        photo: null,
      });
      setStatus({
        success: true,
        message: "Suspect added successfully",
        color: "green",
      });
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
      <h1>Add Witness</h1>
      <form>
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter witness name"
          />
        </div>

        <div className="input flex column">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="input flex column">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="input flex column">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input flex column">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>

        <div className="input flex column">
          <label htmlFor="photo">Upload Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <Button
          type={"submit"}
          name={"add-witness"}
          text={"Add Witness"}
          className={"ivestigator-form-button"}
          onClick={handleSubmit}
        />
        {status.message && (
          <h2 style={{ color: status.color }}>{status.message}</h2>
        )}
      </form>
    </div>
  );
};

export default AddWitness;
