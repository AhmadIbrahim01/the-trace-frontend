import React from "react";
import "./Dashboard.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";

const Dashboard = () => {
  const adminDashboardStats = {
    active: 8,
    investigators: 10,
    tools: 3,
    resolvedCases: 50,
  };

  const { active, investigators, tools, resolvedCases } = adminDashboardStats;

  return (
    <div className="admin-dashboard flex">
      <div className="admin-sidebar flex column center">
        <button className="admin-profile flex column center">
          <img src={adminImage} alt="" />
          <h1>Admin Name</h1>
        </button>
        <ul className="dashboard-ul flex center column">
          <li className="dashboard-li">
            <button>
              <img src={dashboardIconOne} alt="" />
              Dashboard
            </button>
          </li>
          <li className="dashboard-li">
            <button>
              <img src={dashboardIconTwo} alt="" />
              Manage Investigators
            </button>
          </li>
          <li className="dashboard-li">
            <button>
              <img src={dashboardIconTwo} alt="" />
              Manage Cases
            </button>
          </li>
          <li className="dashboard-li">
            <button>
              <img src={dashboardIconTwo} alt="" />
              Manage Tools
            </button>
          </li>
        </ul>
      </div>
      <div className="admin-dashboard-stats flex column center">
        <div className="dashboard-cards flex center">
          <div className="dashboard-card flex center column">
            <p>Active Cases</p>
            <h1>{active}</h1>
          </div>
          <div className="dashboard-card flex center column">
            <p>Total Investigators</p>
            <h1>{investigators}</h1>
          </div>
          <div className="dashboard-card flex center column">
            <p>Tools in Use</p>
            <h1>{tools}</h1>
          </div>
          <div className="dashboard-card flex center column">
            <p>Resolved Cases</p>
            <h1>{resolvedCases}</h1>
          </div>
        </div>
        <div className="dashboard-chart"></div>
      </div>
    </div>
  );
};

export default Dashboard;
