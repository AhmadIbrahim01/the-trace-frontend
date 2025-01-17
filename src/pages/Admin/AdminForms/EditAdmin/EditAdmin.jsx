import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import "./EditAdmin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const EditAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const adminId = location.state;

  const [adminData, setAdminData] = useState(null);
  const [status, setStatus] = useState({ success: true, message: "" });

  useEffect(() => {
    const fetchAdminsData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/auth/${adminId}`
        );
        setAdminData(response.data.user);
        reset(response.data.user);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdminsData();
  }, [adminId, reset, status]);

  const navigate = useNavigate();
  const backTo = () => {
    navigate("/manage-admins");
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8080/api/auth/${adminId}`,
        data,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus({
        success: true,
        message: "Edit admin successfull",
      });
    } catch (error) {
      console.log(error.message);

      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      setStatus({ success: false, message: errorMessage });
    }
    reset();
  };

  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Edit Admin</h1>
      <form className="flex column center" onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"← Back"}
          className={"form-back-button"}
          type={"button"}
          onClick={backTo}
        ></Button>

        <div className="input flex column">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="number"
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 8,
                message: "phone number must constist of 8 numbers",
              },
              maxLength: {
                value: 8,
                message: "phone number must constist of 8 numbers",
              },
            })}
          />
          {errors.phone && (
            <p style={{ color: "red" }}>{errors.phone.message}</p>
          )}
        </div>
        <div className="input flex column">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            {...register("profilePicture")}
          />
          {errors.profilePicture && (
            <p style={{ color: "red" }}>{errors.profilePicture.message}</p>
          )}
        </div>

        <div className="input flex column">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <Button
          type={"submit"}
          name={"add-investigator"}
          text={"Edit Admin"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
      {status.success ? (
        <p style={{ color: "green" }}>{status.message}</p>
      ) : (
        <p style={{ color: "red" }}>{status.message}</p>
      )}
    </div>
  );
};

export default EditAdmin;
