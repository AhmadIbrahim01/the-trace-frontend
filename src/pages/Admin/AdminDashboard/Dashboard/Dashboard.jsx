import React from "react";
import "./Dashboard.css";
import adminImage from "../../../../assets/images/suspect.svg";

const Dashboard = () => {
  return (
    <div className="admin-dashboard flex">
      <div className="admin-sidebar flex column center">
        <div className="admin-profile flex column center">
          <img src={adminImage} alt="" />
          <h1>Admin Name</h1>
        </div>
        <ul>
          <li>
            <button>
              <img src="" alt="" />
              Dashboard
            </button>
          </li>
          <li>
            <button>
              <img src="" alt="" />
              Manage Investigators
            </button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
