import React from "react";
import fingerPrint from "../../assets/images/caribbean-fingerprint.svg";
import "./Unauthorized.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import magnifierTwo from "../../assets/images/white-magnifier.svg";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const backHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="error flex column center">
      <h1 className="t-center">
        You do not have permission
        <br /> to view this page.
      </h1>
      <br />
      <br />
      <br />
      <button className="flex center " onClick={backHomeHandler}>
        <img src={backArrow} alt="Back arrow" />
        <p>Back to home</p>
      </button>
    </div>
  );
};

export default Unauthorized;
