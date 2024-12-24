import React from "react";
import "./investigatorCase.css";
import evidenceOne from "../../../assets/images/evidence-1.svg";
import evidenceTwo from "../../../assets/images/evidence-2.svg";
import addEvidence from "../../../assets/images/add-evidence.svg";
import suspect from "../../../assets/images/suspect.svg";

const InvestigatorCase = () => {
  const statements = [
    { id: 1, name: "John Doe", date: "January 5, 2025" },
    { id: 2, name: "Jane Smith", date: "February 10, 2025" },
    { id: 3, name: "Jane Smith", date: "February 10, 2025" },
  ];

  const suspects = [
    { id: 1, name: "John Doe", imageUrl: suspect },
    { id: 2, name: "Jane Smith", imageUrl: suspect },
    { id: 3, name: "Tom Brown", imageUrl: suspect },
  ];

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
            {suspects.map((suspect) => (
              <button key={suspect.id} className="suspect-button">
                <img
                  src={suspect.imageUrl}
                  alt={suspect.name}
                  className="suspect-image"
                />
              </button>
            ))}
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
            {statements.map((statement) => (
              <button key={statement.id} className="flex center statement-item">
                <img
                  src={suspect}
                  alt={statement.name}
                  className="statement-image"
                />
                <div className="statement-info flex column">
                  <h4 className="t-left">{statement.name}</h4>
                  <p className="t-left">Given on {statement.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorCase;
