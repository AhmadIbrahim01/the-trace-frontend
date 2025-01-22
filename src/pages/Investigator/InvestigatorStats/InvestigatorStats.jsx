import React, { useEffect, useState } from "react";
import "./InvestigatorStats.css";
import magnifierTwo from "../../../assets/images/magnifier-2.svg";
import caribbeanFingerprint from "../../../assets/images/caribbean-fingerprint.svg";
import axios from "axios";

import { jwtDecode } from "jwt-decode";

const InvestigatorStats = () => {
  const [data, setData] = useState({
    investigatorCaseCount: 0,
    investigatorSolvedCasesCount: 0,
    investigatorOpenCasesCount: 0,
    investigatorClosedCasesCount: 0,
  });

  const token = localStorage.getItem("authToken");
  const [investigatorId, setInvestigatorId] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setInvestigatorId(decoded.userId);
      setName(decoded.name);
    }
  }, [token]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:${
            import.meta.env.VITE_SERVER_PORT
          }/api/investigator/stats/${investigatorId}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getStats();
  }, [investigatorId]);

  const {
    investigatorCaseCount,
    investigatorSolvedCasesCount,
    investigatorOpenCasesCount,
    investigatorClosedCasesCount,
  } = data;

  const resolution =
    (investigatorSolvedCasesCount / investigatorCaseCount) * 100;
  return (
    <>
      <div className="investigator-stats flex column center">
        {name ? (
          <h1>Investigator {name} Stats</h1>
        ) : (
          <h1>Investigator Stats</h1>
        )}

        <p className="t-center">
          Here you can find all your stats including number of cases, solved
          cases undergoing cases and much more informations
        </p>
        <div className="investigator-grid">
          <div className="div1 flex column center">
            <p>Total Case Handled</p>
            <h1>{investigatorCaseCount}</h1>
          </div>
          <div className="div2 flex column center">
            <p>Solved Cases</p>
            <h1>{investigatorSolvedCasesCount}</h1>
          </div>
          <div className="div3 flex column center">
            <p>Case Resolution Rate</p>
            <h1>{resolution.toFixed(0)}%</h1>
            <img src={caribbeanFingerprint} alt="" />
          </div>
          <div className="div4 flex column center">
            <p>Undergoing Cases</p>
            <h1>{investigatorOpenCasesCount}</h1>
          </div>
          <div className="div5 flex column center">
            <p>Cold Cases</p>
            <h1>{investigatorClosedCasesCount}</h1>
          </div>
        </div>
        <h3 className="t-center">
          “An investigator's greatest tools are a sharp mind, an observant eye,
          and an unyielding determination to uncover the truth.”
        </h3>
      </div>
      <img className="magnifier-two" src={magnifierTwo} alt="" />
    </>
  );
};

export default InvestigatorStats;
