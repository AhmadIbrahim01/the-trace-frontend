import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import adminImage from "../../../../assets/images/suspect.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAdminData } from "../../../../context/AdminContext";

const Dashboard = () => {
  const { formData, token, decoded, adminId, adminRole, adminName } =
    useAdminData();

  const [status, setStatus] = useState({ success: true, message: "" });

  const [adminData, setAdminData] = useState({});

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/admin/admins/${adminId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setAdminData(response.data.admin);
      } catch (error) {
        console.log(error.message);
        setStatus({
          success: false,
          message: "An Error Occured",
        });
      }
    };

    fetchAdminData();
  }, []);
  const [stats, setStats] = useState({
    activeCases: 0,
    resolvedCases: 0,
    totalInvestigators: 0,
  });

  useEffect(() => {
    const websiteStats = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/api/admin/stats",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setStats(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    websiteStats();
  }, []);

  const { activeCases, resolvedCases, totalInvestigators } = stats;

  const navigate = useNavigate();
  const navigateToAdmins = () => {
    navigate("/manage-admins");
  };
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
  const goToAdminProfile = () => {
    navigate("/admin-profile");
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-dashboard flex">
      <div className="admin-sidebar flex column center">
        <button
          className="admin-profile flex column center"
          onClick={goToAdminProfile}
        >
          <img src={formData.profilePicture || adminImage} alt="" />
          <h1>Admin {formData.firstName}</h1>
        </button>
        <ul className="dashboard-ul flex center column">
          <li className="dashboard-li dashboard-li-clicked">
            <button onClick={navigateToDashboard}>Dashboard</button>
          </li>
          {adminRole === "super_admin" ? (
            <li className="dashboard-li">
              <button onClick={navigateToAdmins}>Manage Admins</button>
            </li>
          ) : (
            <></>
          )}
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
        <button className="admin-logout-btn" onClick={logOut}>
          log out
        </button>
      </div>
      <div className="admin-dashboard-stats flex column center">
        <div className="dashboard-cards flex center">
          <div className="dashboard-card flex center column">
            <p>Active Cases</p>
            <h1>{activeCases}</h1>
          </div>
          <div className="dashboard-card flex center column">
            <p>Total Investigators</p>
            <h1>{totalInvestigators}</h1>
          </div>
          <div className="dashboard-card flex center column">
            <p>Tools in Use</p>
            <h1>3</h1>
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
