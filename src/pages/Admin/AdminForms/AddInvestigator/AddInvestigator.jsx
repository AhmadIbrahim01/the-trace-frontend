import React from "react";
import Button from "../../../../components/Button/Button";
import "./AddInvestigator.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddInvestigator = () => {
  const navigate = useNavigate();
  const backTo = () => {
    navigate("/manage-investigators");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-form-container t-center flex column center">
      <h1>Add Investigator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          name={"back"}
          text={"Back to manage investigators"}
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
            type="text"
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
            {...register("phone", { required: "Phone is required" })}
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
            {...register("profilePicture", {
              required: "Profile picture is required",
            })}
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
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <Button
          type={"submit"}
          name={"add-investigator"}
          text={"Add Investigator"}
          className={"ivestigator-form-button"}
        ></Button>
      </form>
    </div>
  );
};

export default AddInvestigator;
