import React from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";

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
              <img className="add-evidence" src={addEvidence} alt="" />
            </button>
          </div>
        </div>
        <div className="case-suspects flex center column">
          <div className="case-suspects-header flex">
            <h3>Suspects</h3>
            <button>+</button>
          </div>
          <div className="case-suspects-body flex center">
            <button>
              <img src={suspect} alt="" />
            </button>
            <button>
              <img src={suspect} alt="" />
            </button>
            <button>
              <img src={suspect} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="inevstigator-case-body">
        <div className="case-map"></div>
        <div className="case-statements"></div>
      </div>
    </div>
  );
};

export default InvestigatorCase;
