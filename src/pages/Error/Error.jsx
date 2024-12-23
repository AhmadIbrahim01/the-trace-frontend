import React from "react";
import fingerPrint from "../../assets/images/caribbean-fingerprint.svg";
import "./Error.css";
import backArrow from "../../assets/icons/back-arrow.svg";
import magnifierTwo from "../../assets/images/white-magnifier.svg";

const Error = () => {
  return (
    <div className="error flex column center">
      <h1>Page Not Found</h1>
      <div className="error404 flex center">
        <h1>4</h1>
        <img src={fingerPrint} alt="" />
        <h1>4</h1>
      </div>
      <button className="flex center">
        <img src={backArrow} alt="Back arrow" />
        <p>Back to home</p>
      </button>
      <img src={magnifierTwo} className="magni1" alt="" />
      <img src={magnifierTwo} className="magni2" alt="" />
      <img src={magnifierTwo} className="magni3" alt="" />
      <img src={magnifierTwo} className="magni4" alt="" />
      <img src={magnifierTwo} className="magni5" alt="" />
    </div>
  );
};

export default Error;
