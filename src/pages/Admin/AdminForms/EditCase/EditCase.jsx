import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCase = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const caseId = location.state;
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
  const [caseData, setCaseData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchCase = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/case/${caseId}`
        );
        setCaseData(response.data);
        setFormData({
          title: caseData.title,
          description: caseData.description,
          status: caseData.status,
          visibility: caseData.visibility,
          map: {
            longitude: caseData.map.longitude,
            latitude: caseData.map.latitude,
          },
        });
        setRefresh(false);
      } catch (error) {
        console.log(error.message);
        setRefresh(false);
      }
    };
    fetchCase();
  }, [refresh]);

  useEffect(() => {
    setRefresh(true);
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/case/${caseId}`,
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
      <h1>Edit Case</h1>
      <form className="flex center column" onSubmit={handleSubmit}>
        <Button
          name={"back"}
          text={"← Back"}
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
          <label htmlFor="status">Case Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="open">Open</option>
            <option value="closed">Close</option>
            <option value="solved">Solved</option>
          </select>
        </div>

        {/* <div className="input flex column">
          <label htmlFor="caseImages">Case Images</label>
          <input
            id="caseImages"
            name="caseImages"
            type="file"
            value={formData.caseImages}
            onChange={handleChange}
          />
        </div> */}

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
          text={loading ? "Submitting..." : "Edit Case"}
          className={"ivestigator-form-button"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default EditCase;
