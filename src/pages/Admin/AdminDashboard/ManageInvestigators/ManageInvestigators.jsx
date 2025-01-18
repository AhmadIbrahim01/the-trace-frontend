import React, { useEffect, useState } from "react";
import "./ManageInvestigators.css";
import adminImage from "../../../../assets/images/suspect.svg";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { useAdminData } from "../../../../context/AdminContext";

const ManageInvestigators = () => {
  const { formData, token, decoded, adminId, adminName, adminRole } =
    useAdminData();

  const [investigators, setInvestigators] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchInvestigators = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/api/admin/investigators`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setInvestigators(response.data.investigators);
        setRefresh(false);
      } catch (error) {
        console.log(error.message);
        setRefresh(false);
      }
    };
    fetchInvestigators();
  }, [refresh]);

  const deleteInvestigator = async (investigatorId) => {
    await axios.delete(`http://127.0.0.1:8080/api/admin/${investigatorId}`);
    setInvestigators([]);
    setRefresh(true);
  };

  const navigate = useNavigate();
  const editInvestigator = (row) => {
    navigate("/edit-investigator", { state: row });
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
  const addInvestigator = () => {
    navigate("/add-investigator");
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
          <li className="dashboard-li dashboard-li-clicked">
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
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Investigator List</h2>
          <button className="add-investigator" onClick={addInvestigator}>
            Add Investigator
          </button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {investigators.map((row, index) => (
                <tr key={index}>
                  <td>
                    {row.firstName} {row.lastName}
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.banned === true ? "Banned" : "Active"}</td>
                  <td className="table-actions">
                    <button onClick={() => editInvestigator(row._id)}>
                      Edit
                    </button>
                    <button onClick={() => deleteInvestigator(row._id)}>
                      Delete
                    </button>
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

export default ManageInvestigators;
