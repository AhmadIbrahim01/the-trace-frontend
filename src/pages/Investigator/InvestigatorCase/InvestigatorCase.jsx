import React from "react";
import "./investigatorCase.css";

const InvestigatorCase = () => {
  return (
    <div className="investigator-case flex column center">
      <div className="inevstigator-case-header flex">
        <div className="case-evidence-container flex center column">
          <h3>Evidence</h3>
          <div className="case-evidences flex">
            <div className="case-evidence flex center column">
              <button className="case-evidence-button">
                <img className="case-evidence-img" src="" alt="" />
              </button>
            </div>
          </div>
          <div className="case-evidences"></div>
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
