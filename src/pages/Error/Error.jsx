import React from "react";
import fingerPrint from "../../assets/images/caribbean-fingerprint.svg";
import "./Error.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import magnifierTwo from "../../assets/images/white-magnifier.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="error flex column center">
      <h1>Page Not Found</h1>
      <div className="error404 flex center">
        <h1>4</h1>
        <img src={fingerPrint} alt="" />
        <h1>4</h1>
      </div>
      <button className="flex center" onClick={backHomeHandler}>
        <img src={backArrow} alt="Back arrow" />
        <p>Back to home</p>
      </button>
      <img src={magnifierTwo} className="magni magni1" alt="" />
      <img src={magnifierTwo} className="magni magni2" alt="" />
      <img src={magnifierTwo} className="magni magni3" alt="" />
      <img src={magnifierTwo} className="magni magni4" alt="" />
      <img src={magnifierTwo} className="magni magni5" alt="" />
    </div>
  );
};

export default Error;
