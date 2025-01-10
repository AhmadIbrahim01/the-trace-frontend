import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import "./AddCase.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCase = () => {
  const navigate = useNavigate();

  const [investigators, setInvestigators] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "open",
    caseImages: [],
    visibility: "public",
    tags: [],
    evidence: [],
    map: {
      longitude: "",
      latitude: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backTo = () => {
    navigate("/manage-cases");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("map.")) {
      const fieldName = name.split(".")[1];
      setFormData({
        ...formData,
        map: {
          ...formData.map,
          [fieldName]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const getInvestigators = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/admin/investigators",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setInvestigators(response.data.investigators);
      } catch (error) {
        console.log(error.message);
      }
    };
    getInvestigators();
  }, []);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/case/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/manage-cases");
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Add Case</h1>
      <form onSubmit={handleSubmit}>
        <Button
          name={"back"}
          text={"Back to manage cases"}
          className={"form-back-button"}
          type={"button"}
          onClick={backTo}
        />

        <div className="input flex column">
          <label htmlFor="title">Case Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter case title"
          />
        </div>

        <div className="input flex column">
          <label htmlFor="description">Case Description</label>
          <textarea
            id="description"
            name="description"
            rows={10}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the information you want to share..."
          />
        </div>

        <div className="input flex column">
          <label htmlFor="investigatorId">Assigned Investigator</label>
          <select
            id="investigatorId"
            name="investigatorId"
            value={formData.investigatorId}
            onChange={handleChange}
          >
            <option value="">Select Investigator</option>
            {investigators.map((investigator) => (
              <option key={investigator._id} value={investigator._id}>
                {investigator.firstName} {investigator.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="input flex column">
          <label htmlFor="status">Case Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="opened">Open</option>
            <option value="closed">Close</option>
          </select>
        </div>

        <div className="input flex column">
          <label htmlFor="caseImages">Case Images</label>
          <input
            id="caseImages"
            name="caseImages"
            type="file"
            value={formData.caseImages}
            onChange={handleChange}
          />
        </div>

        <div className="flex input2-container">
          <div className="input2 flex column">
            <label htmlFor="latitude">Map Latitude</label>
            <input
              id="latitude"
              name="map.latitude"
              type="number"
              value={formData.map.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="input2 flex column">
            <label htmlFor="longitude">Map Longitude</label>
            <input
              id="longitude"
              name="map.longitude"
              type="number"
              value={formData.map.longitude}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Visibility */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={formData.visibility === "public"}
              onChange={handleChange}
            />
            Public
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={formData.visibility === "private"}
              onChange={handleChange}
            />
            Private
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button
          type={"submit"}
          name={"add-case"}
          text={loading ? "Submitting..." : "Add Case"}
          className={"ivestigator-form-button"}
          disabled={loading} // Disable button during submission
        />
      </form>
    </div>
  );
};

export default AddCase;
