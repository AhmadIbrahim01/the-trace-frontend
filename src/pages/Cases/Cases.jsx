import React from "react";
import "./Cases.css";
import searchIcon from "../../assets/icons/search-icon.svg";

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
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
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
