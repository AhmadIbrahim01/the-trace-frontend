import React from "react";
import "./InvestigatorStats.css";

const InvestigatorStats = () => {
  const data = {
    total: "50",
    solved: 35,
    resolution: 75,
    undergoing: 3,
    cold: 12,
  };

  const { total, solved, resolution, undergoing, cold } = data;

  return (
    <div className="investigator-stats flex column center">
      <h1>Investigator Ahmad Stats</h1>
      <p className="t-center">
        Here you can find all your stats including number of cases, solved cases
        undergoing cases and much more informations
      </p>
      <div class="investigator-grid">
        <div class="div1 flex column center">
          <p>Total Case Handled</p>
          <h1>{total}</h1>
        </div>
        <div class="div2 flex column center">
          <p>Solved Cases</p>
          <h1>{solved}</h1>
        </div>
        <div class="div3 flex column center">
          <p>Case Resolution Rate</p>
          <h1>{resolution}%</h1>
        </div>
        <div class="div4 flex column center">
          <p>Undergoing Cases</p>
          <h1>{undergoing}</h1>
        </div>
        <div class="div5 flex column center">
          <p>Cold Cases</p>
          <h1>{cold}</h1>
        </div>
      </div>
      <h3 className="t-center">
        “An investigator's greatest tools are a sharp mind, an observant eye,
        and an unyielding determination to uncover the truth.”
      </h3>
    </div>
  );
};

export default InvestigatorStats;
