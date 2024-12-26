import React from "react";
import "./Cases.css";
import searchIcon from "../../assets/icons/search-icon.svg";
import caseOne from "../../assets/images/case1.svg";
import caseTwo from "../../assets/images/case2.svg";
import caseThree from "../../assets/images/case3.svg";
import courthouseIcon from "../../assets/icons/courthouse-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import arrow from "../../assets/icons/arrow-2.svg";
import tickCircleIcon from "../../assets/icons/tick-circle-icon.svg";
import { useNavigate } from "react-router-dom";

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
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  </div>
);

const CaseCard = ({ caseData }) => {
  const navigate = useNavigate();
  const goToCase = () => {
    navigate("/case");
  };

  return (
    <div className="case">
      <p className="t-center flex center">{caseData.description}</p>
      <div className="case-container flex">
        <div className="case-image">
          <img src={caseData.image || caseOne} alt={caseData.title} />
        </div>
        <div className="case-info">
          <p>Case {caseData.id}</p>
          <div className="case-name flex">
            <h2>{caseData.title}</h2>
            <button className="flex center">
              <img src={courthouseIcon} alt="Courthouse Icon" />
            </button>
          </div>
          <div className="case-date flex">
            <img src={calendarIcon} alt="Calendar Icon" />
            <p>Published on {caseData.date}</p>
          </div>
          <div className="tags flex">
            {caseData.tags.map((tag, index) => (
              <h3 key={index}>{tag}</h3>
            ))}
          </div>
          <div className="case-state flex center">
            <p>{caseData.status}</p>
            <img src={tickCircleIcon} alt="Tick Circle Icon" />
          </div>
          <button className="flex center" onClick={goToCase}>
            View full case
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CasesSection = () => {
  const cases = [
    {
      id: 1,
      title: "The Victim of AI",
      description:
        "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
      date: "January 5, 2023",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      status: "Case closed",
      image: caseOne,
    },
    {
      id: 2,
      title: "The Victim of AI",
      description:
        "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
      date: "January 5, 2023",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      status: "Case closed",
      image: caseTwo,
    },
    {
      id: 3,
      title: "Hitman in the night",
      description:
        "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
      date: "January 5, 2023",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      status: "Case closed",
      image: caseThree,
    },
  ];

  return (
    <div className="cases-list flex center column">
      <h1>Cases List</h1>
      <p className="t-center">
        Joining us is very simple, just a few steps and you’ll be set up to go!
      </p>
      {cases.map((caseData) => (
        <CaseCard key={caseData.id} caseData={caseData} />
      ))}
    </div>
  );
};

const Cases = () => (
  <>
    <HeroSection />
    <CasesSection />
  </>
);

export default Cases;
