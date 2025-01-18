import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import "./AISketch.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AISketch = () => {
  const [img, setImg] = useState("");

  const [saving, setSaving] = useState("");

  const [sketch, setSketch] = useState(true);
  const change = () => {
    setSketch(!sketch);
  };
  const [responseData, setResponseData] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [cloudImageUrl, setCloudImageUrl] = useState("");
  const [status, setStatus] = useState({
    success: true,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const caseId = localStorage.getItem("caseId");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setImg(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/api/sketches/${caseId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseData(response.data);
      console.log(response.data);

      setStatus({
        success: true,
        message: "Sketch added successfully",
      });

      setImageUrl(response.data.image);
      console.log(response.data.image);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: "Sketch adding failed",
      });
      setLoading(false);
    }
  };

  const handleSave = async (event) => {
    const url = imageUrl;

    if (!url) return;

    const data = new FormData();
    console.log("url", url);

    data.append("file", url);
    data.append("upload_preset", "ahmad_preset");
    data.append("cloud_name", "dnhicntxv");
    console.log("data", data);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnhicntxv/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploadedImageUrl = await res.json();
      setCloudImageUrl(uploadedImageUrl.url);

      const saveSketch = await fetch(
        `http://127.0.0.1:8080/api/sketches/save/${caseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: uploadedImageUrl.url,
            gender: responseData.inputs.gender || "",
            age: responseData.inputs.age || "",
            description: responseData.inputs.description || "",
            additional: responseData.inputs.additional || "",
            prompt: responseData.prompt || "",
          }),
        }
      );

      setSaving("saving");
      const saveSketchResponse = await saveSketch.json();
      if (saveSketch.ok) {
        console.log("Sketch saved successfully:", saveSketchResponse);
        setSaving("saved");
      } else {
        console.error("Error saving sketch:", saveSketchResponse);
        setSaving("");
      }
    } catch (error) {
      console.error("Error uploading image or updating profile:", error);
      setSaving("");
    }
  };

  console.log(cloudImageUrl);

  const navigate = useNavigate();
  const goToCase = () => {
    navigate("/investigator-case");
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);

    fetch(`http://127.0.0.1:8080/api/sketches/image/${caseId}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setResponseData(data);

        setStatus({
          success: true,
          message: "Sketch added successfully",
        });

        setImageUrl(data.editedImageUrl);
        console.log(data.editedImageUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setStatus({
          success: false,
          message: "Sketch adding failed",
        });
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="error flex column center">
        <h1 className="t-center">Loading</h1>
      </div>
    );
  }

  return (
    <>
      <div className="sketch flex center">
        {sketch ? (
          <form className="sketch-form flex center column">
            <button
              type="button"
              className="sketch-back-button flex center"
              onClick={goToCase}
            >
              ← Back
            </button>
            <h1>Suspect Sketch</h1>
            <h3 className="switch-btn1" onClick={change}>
              Switch to text input
            </h3>
            <div className="sketch-input sketch-input-file flex column">
              <label htmlFor="photo">Upload Photo</label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <Button
              type={"submit"}
              name={"generate-sketch"}
              text={"Generate Sketch"}
              className={"ai-form-button"}
              onClick={handleImageSubmit}
              disabled={loading}
            ></Button>
            {status.message && status.success === true ? (
              <h3 style={{ color: "green", marginBottom: "30px" }}>
                {status.message}
              </h3>
            ) : (
              <h3 style={{ color: "red", marginBottom: "30px" }}>
                {status.message}
              </h3>
            )}
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sketch-form flex center column"
          >
            <button
              type="button"
              className="sketch-back-button flex center"
              onClick={goToCase}
            >
              ← Back
            </button>

            <h1>Suspect Details</h1>
            <h3 className="switch-btn2" onClick={change}>
              Switch to image input
            </h3>

            <div className="sketch-input flex column">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p style={{ color: "red" }}>{errors.gender.message}</p>
              )}
            </div>

            <div className="sketch-input flex column">
              <label htmlFor="age">Suspect Approximated Age</label>
              <select id="age" {...register("age")}>
                <option value="less than 18">Younger than 18</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46-55">46-55</option>
                <option value="56-65">56-65</option>
                <option value="66-75">66-75</option>
                <option value="older than 75">Older than 75</option>
              </select>
            </div>
            <div className="sketch-input flex column">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Provide a detailed description"
                rows={10}
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              {errors.description && (
                <p style={{ color: "red" }}>{errors.description.message}</p>
              )}
            </div>

            <div className="sketch-input flex column">
              <label htmlFor="additional">Additional Features</label>
              <textarea
                id="additional"
                placeholder="e.g., scars, tattoos, hair type"
                rows={10}
                {...register("additional")}
              ></textarea>
            </div>

            <Button
              type={"submit"}
              name={"generate-sketch"}
              text={"Generate Sketch"}
              className={"ai-form-button"}
            ></Button>
            {status.message && status.success === true ? (
              <h3 style={{ color: "green", marginBottom: "30px" }}>
                {status.message}
              </h3>
            ) : (
              <h3 style={{ color: "red", marginBottom: "30px" }}>
                {status.message}
              </h3>
            )}
          </form>
        )}

        <div className="sketch-container flex column center">
          <h1>AI Sketch</h1>
          {imageUrl && (
            <>
              <div className="ai-sketch">
                <img src={imageUrl} alt="" />
              </div>
              {saving === "" ? (
                <Button
                  type={"submit"}
                  name={"save-sketch"}
                  text={"Save Sketch"}
                  className={"ai-form-button"}
                  onClick={handleSave}
                ></Button>
              ) : (
                <></>
              )}
            </>
          )}
          {!imageUrl && (
            <div className="ai-sketch flex center column">
              <p> There is no picture</p>
            </div>
          )}

          {saving === "saving" ? (
            <h1>Saving</h1>
          ) : saving === "saved" ? (
            <h1>Saved Successfully</h1>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AISketch;
