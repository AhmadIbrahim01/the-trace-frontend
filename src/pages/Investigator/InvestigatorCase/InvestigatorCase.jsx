import React from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";

const InvestigatorCase = () => {
  return (
    <div className="investigator-case flex column center">
      <div className="investigator-case-header flex">
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
            <button className="flex center">+</button>
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
      <div className="inevstigator-case-body flex center">
        <div className="case-map"></div>
        <div className="case-statements flex center column">
          <div className="case-statements-header flex center">
            <h3>Statements</h3>
            <button className="flex center">+</button>
          </div>
          <div className="case-statements-body flex center column">
            <button className="flex center">
              <img src={suspect} alt="" />
              <div className="statement-info flex column">
                <h4 className="t-left">Name</h4>
                <p className="t-left">Given on January 5, 2025</p>
              </div>
            </button>
            <button className="flex center">
              <img src={suspect} alt="" />
              <div className="statement-info flex column">
                <h4 className="t-left">Name</h4>
                <p className="t-left">Given on January 5, 2025</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorCase;
