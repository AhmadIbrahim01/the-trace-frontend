import React from "react";
import "./Dashboard.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";

const Dashboard = () => {
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
      <div></div>
    </div>
  );
};

export default Dashboard;
