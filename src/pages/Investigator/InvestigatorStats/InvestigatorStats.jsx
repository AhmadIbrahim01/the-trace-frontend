import React from "react";
import "./InvestigatorStats.css";

const InvestigatorStats = () => {
  return (
    <div className="investigator-stats flex column center">
      <h1>Investigator Ahmad Stats</h1>
      <p className="t-center">
        Here you can find all your stats including number of cases, solved cases
        undergoing cases and much more informations
      </p>
      <div class="investigator-grid">
        <div class="div1"> </div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
        <div class="div5"> </div>
      </div>
      <h3 className="t-center">
        “An investigator's greatest tools are a sharp mind, an observant eye,
        and an unyielding determination to uncover the truth.”
      </h3>
    </div>
  );
};

export default InvestigatorStats;
