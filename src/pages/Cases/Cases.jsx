import React, { useEffect, useState } from "react";
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
import axios from "axios";

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

const CaseCard = ({ caseData, index }) => {
  const navigate = useNavigate();
  const goToCase = () => {
    localStorage.setItem("caseId", caseData._id);
    navigate("/case");
  };

  const date = new Date(caseData.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(caseData.caseImages);

  return (
    <div className="case">
      <p className="t-center flex center">
        {Array(20).fill(caseData.title).join(" ")}
      </p>
      <div className="case-container flex">
        <div className="case-image">
          <img src={caseData.caseImages[0] || caseOne} alt={caseData.title} />
        </div>
        <div className="case-info">
          <p>Case {index + 1}</p>
          <div className="case-name flex">
            <h2>{caseData.title}</h2>
            <button className="flex center">
              <img src={courthouseIcon} alt="Courthouse Icon" />
            </button>
          </div>
          <div className="case-date flex">
            <img src={calendarIcon} alt="Calendar Icon" />
            <p>Published on {formattedDate}</p>
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
  // const cases = [
  //   {
  //     id: 1,
  //     title: "The Victim of AI",
  //     description:
  //       "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
  //     date: "January 5, 2023",
  //     tags: ["Tag One", "Tag Two", "Tag Three"],
  //     status: "Case closed",
  //     image: caseOne,
  //   },
  //   {
  //     id: 2,
  //     title: "The Victim of AI",
  //     description:
  //       "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
  //     date: "January 5, 2023",
  //     tags: ["Tag One", "Tag Two", "Tag Three"],
  //     status: "Case closed",
  //     image: caseTwo,
  //   },
  //   {
  //     id: 3,
  //     title: "Hitman in the night",
  //     description:
  //       "The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI The Victim of AI ",
  //     date: "January 5, 2023",
  //     tags: ["Tag One", "Tag Two", "Tag Three"],
  //     status: "Case closed",
  //     image: caseThree,
  //   },
  // ];

  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getCases = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/api/case/", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setCases(response.data.cases);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCases();
  }, []);

  console.log(cases);

  return (
    <div className="cases-list flex center column">
      <h1>Cases List</h1>
      <p className="t-center">
        Joining us is very simple, just a few steps and you’ll be set up to go!
      </p>
      {cases.length !== 0 ? (
        cases.map((caseData, index) => (
          <CaseCard key={index} index={index} caseData={caseData} />
        ))
      ) : (
        <>
          <h1 style={{ color: "red" }}>No available cases</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
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
