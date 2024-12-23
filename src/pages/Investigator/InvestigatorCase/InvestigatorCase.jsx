import React from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";

const InvestigatorCase = () => {
  return (
    <div className="investigator-case flex column center">
      <div className="inevstigator-case-header flex">
        <div className="case-evidence-container flex center column">
          <h3>Evidence</h3>
          <div className="case-evidences flex">
            <button className="case-evidence flex center column">
              <img className="case-evidence-img" src={evidenceOne} alt="" />
            </button>
            <button className="case-evidence flex center column">
              <img className="case-evidence-img" src={evidenceTwo} alt="" />
            </button>
            <button className="case-evidence flex center column">
              <img className="case-evidence-img" src={evidenceOne} alt="" />
            </button>
            <button className="case-evidence flex center column">
              <img className="case-evidence-img" src={evidenceTwo} alt="" />
            </button>
          </div>
        </div>
        <div className="case-suspects"></div>
      </div>
      <div className="inevstigator-case-body">
        <div className="case-map"></div>
        <div className="case-statements"></div>
      </div>
    </div>
  );
};

export default InvestigatorCase;
