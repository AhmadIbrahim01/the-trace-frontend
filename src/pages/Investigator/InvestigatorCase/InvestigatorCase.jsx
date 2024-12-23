import React from "react";

const InvestigatorCase = () => {
  return (
    <div className="investigator-case flex column center">
      <div className="inevstigator-case-header">
        <div className="case-evidence"></div>
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
