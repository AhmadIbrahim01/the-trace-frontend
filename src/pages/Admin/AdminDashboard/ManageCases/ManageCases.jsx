import React, { useEffect, useState } from "react";
import "./ManageCases.css";
import adminImage from "../../../../assets/images/suspect.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAdminData } from "../../../../context/AdminContext";

const ManageCases = () => {
  const { formData, token, decoded, adminId, adminName, adminRole } =
    useAdminData();

  const [cases, setCases] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/case/`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCases(response.data.cases);
        setRefresh(false);
      } catch (error) {
        console.log(error.message);
        setRefresh(false);
      }
    };
    fetchCases();
  }, [refresh]);

  const deleteCase = async (caseId) => {
    await axios.delete(
      `http://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/case/${caseId}`
    );
    setRefresh(true);
  };
  const navigate = useNavigate();
  const editCase = (row) => {
    navigate("/edit-case", { state: row });
  };
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
  const addCase = () => {
    navigate("/add-case");
  };

  function formatDateTime(isoDateString) {
    const date = new Date(isoDateString);

    return date.toLocaleString();
  }

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const goToAdminProfile = () => {
    navigate("/admin-profile");
  };

  return (
    <div className="admin-dashboard flex">
      <div className="admin-sidebar flex column center">
        <button
          className="admin-profile flex column center"
          onClick={goToAdminProfile}
        >
          <img src={formData.profilePicture || adminImage} alt="" />
          <h1>Admin {formData.firstName || adminName}</h1>
        </button>
        <ul className="dashboard-ul flex center column">
          <li className="dashboard-li">
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
          <li className="dashboard-li dashboard-li-clicked">
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
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Cases List</h2>
          <button onClick={addCase}>Add Case</button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Investigator</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((row, index) => (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td>{row.investigatorId.firstName}</td>
                  <td>{row.status}</td>
                  <td>{formatDateTime(row.updatedAt)}</td>
                  <td className="table-actions">
                    <button onClick={() => editCase(row._id)}>Edit</button>
                    <button onClick={() => deleteCase(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCases;
