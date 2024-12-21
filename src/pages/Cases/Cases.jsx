import React from "react";
import "./Cases.css";
import searchIcon from "../../assets/icons/search-icon.svg";
import caseOne from "../../assets/images/case1.svg";

const HeroSection = () => (
  <div className="cases-hero flex center column">
    <h1>Public Cases</h1>
    <p className="t-center">
      “I've been using this web hosting service for a few months now and overall
      it's been fine. The uptime has been good and I haven't had any major
      issues. The pricing is also reasonable. Nothing particularly stands out
      as.
    </p>
    <div className="search-div flex center">
      <input type="text" placeholder="Search" />
      <button>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  </div>
);

const CasesSection = () => (
  <div className="cases-list flex center column">
    <h1>Cases List</h1>
    <p className="t-center">
      Joining us is very simple, just a few steps and you’ll be set up to go!
    </p>

    <div className="case">
      <p className="t-center flex center">
        The Victim of AI The Victim of AI The Victim of AI The Victim of AI The
        Victim of AI The Victim of AI The Victim of AI The Victim of AI The
        Victim of AI The Victim of AI The Victim of AI The Victim of AI The
      </p>
      <div className="case-container flex">
        <div className="case-image">
          <img src={caseOne} alt="" />
        </div>
        <div className="case-info">
          <p>Case 1</p>
          <div>
            <h2>The victim of AI</h2>
          </div>
          <div>
            <img src="" alt="" />
            <p>Published on January 5, 2023</p>
          </div>
          <div className="tags flex">
            <h3>Tag One</h3>
            <h3>Tag Two</h3>
            <h3>Tag Three</h3>
          </div>
          <div>
            <p>Case closed</p>
            <img src="" alt="" />
          </div>
          <button>View full case</button>
        </div>
      </div>
    </div>
  </div>
);

const Cases = () => (
  <>
    <HeroSection />
    <CasesSection />
  </>
);

export default Cases;
