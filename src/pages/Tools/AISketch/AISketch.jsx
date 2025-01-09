import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./AISketch.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AISketch = () => {
  const [sketch, setSketch] = useState(true);
  const change = () => {
    setSketch(!sketch);
  };
  const [imageUrl, setImageUrl] = useState("");
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

      console.log(response.data);
      setStatus({
        success: true,
        message: "Sketch added successfully",
      });
      setImageUrl(response.data.image);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setStatus({
        success: false,
        message: "Sketch adding failed",
      });
      setLoading(false);
    }
    reset();
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="sketch flex center">
        {sketch ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sketch-form flex center column"
          >
            <h1>Suspect Drawn Picture</h1>
            <h3 className="switch-btn1" onClick={change}>
              Switch to text input
            </h3>
            <div className="sketch-input sketch-input-file flex column">
              <label htmlFor="photo">Upload Photo</label>
              <input id="photo" type="file" {...register("photo")} />
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
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="sketch-form flex center column"
          >
            <h1>Suspect Details</h1>
            <h3 className="switch-btn2" onClick={change}>
              Switch to image input
            </h3>
            <div className="sketch-input flex column">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter suspect name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
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
              <Button
                type={"submit"}
                name={"save-sketch"}
                text={"Save Sketch"}
                className={"ai-form-button"}
              ></Button>
            </>
          )}
          {!imageUrl && (
            <div className="ai-sketch flex center column">
              <p> There is no picture</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AISketch;
