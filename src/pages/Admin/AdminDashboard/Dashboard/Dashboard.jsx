import React from "react";
import "./Dashboard.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const adminDashboardStats = {
    active: 8,
    investigators: 10,
    tools: 3,
    resolvedCases: 50,
  };

  const { active, investigators, tools, resolvedCases } = adminDashboardStats;

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/admin-dashboard");
  };
  const navigateToInvestigators = () => {
    navigate("/manage-investigators");
  };
  const navigateToUsers = () => {
    navigate("/manage-users");
  };
  const navigateToCases = () => {
    navigate("/manage-cases");
  };

  return (
    <div className="admin-dashboard flex">
      <div className="admin-sidebar flex column center">
        <button className="admin-profile flex column center">
          <img src={adminImage} alt="" />
          <h1>Admin Name</h1>
        </button>
        <ul className="dashboard-ul flex center column">
          <li className="dashboard-li dashboard-li-clicked">
            <button onClick={navigateToDashboard}>Dashboard</button>
          </li>
          <li className="dashboard-li">
            <button onClick={navigateToInvestigators}>
              Manage Investigators
            </button>
          </li>
          <li className="dashboard-li">
            <button onClick={navigateToCases}>Manage Cases</button>
          </li>
          <li className="dashboard-li">
            <button onClick={navigateToUsers}>Manage Users</button>
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
