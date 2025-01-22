import React, { useEffect, useState } from "react";
import "./InvestigatorCases.css";
import searchIcon from "../../../assets/icons/search-icon.svg";
import caseOne from "../../../assets/images/case1.svg";
import caseTwo from "../../../assets/images/case2.svg";
import caseThree from "../../../assets/images/case3.svg";
import courthouseIcon from "../../../assets/icons/courthouse-icon.svg";
import calendarIcon from "../../../assets/icons/calendar-icon.svg";
import arrow from "../../../assets/icons/arrow-2.svg";
import tickCircleIcon from "../../../assets/icons/tick-circle-icon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const HeroSection = () => (
  <div className="cases-hero flex center column">
    <h1>Investigator Cases</h1>
    <p className="t-center">
      Stay informed with the latest open investigations. Our public case files
      are made available for transparency, offering detailed insights into
      ongoing criminal cases.
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
    navigate("/investigator-selected-case");
  };

  const date = new Date(caseData.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(caseData.caseImages);
  let caseStatus = "Not available";
  caseData.status === "in_progress"
    ? (caseStatus = "In progress")
    : (caseStatus = caseData.status);
  return (
    <div className="case">
      {/* <p className="t-center flex center">
        {Array(20).fill(caseData.title).join(" ")}
      </p> */}
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
            <p>{caseStatus}</p>
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
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken");
  const [investigatorId, setInvestigatorId] = useState("");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setInvestigatorId(decoded.userId);
    }
  }, [token]);

  useEffect(() => {
    if (investigatorId) {
      getCases();
    }
  }, [investigatorId]);

  const getCases = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/case/investigator/${investigatorId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setCases(response.data.cases);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  console.log("cases ", cases);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cases-list flex center column">
      <h1>Cases List</h1>
      <p className="t-center">Browse through each case and stay informed!</p>
      {cases.length !== 0 ? (
        cases.map((caseData, index) => (
          <CaseCard key={index} index={index} caseData={caseData} />
        ))
      ) : (
        <h1 style={{ color: "red" }}>No available cases</h1>
      )}
    </div>
  );
};

const InvestigatorCases = () => (
  <>
    <HeroSection />
    <CasesSection />
  </>
);

export default InvestigatorCases;
