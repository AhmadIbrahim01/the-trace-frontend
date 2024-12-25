import React from "react";
import "./ManageCases.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";
import { useNavigate } from "react-router-dom";

const ManageCases = () => {
  const tableData = [
    {
      id: 1,
      name: "The Victim of AI",
      investigator: "Ahmad Ibrahim",
      status: "Active",
      updated: "01/03/2024",
    },
    {
      id: 2,
      name: "The Victim of AI",
      investigator: "Ahmad Ibrahim",
      status: "Active",
      updated: "01/03/2024",
    },
    {
      id: 3,
      name: "The Victim of AI",
      investigator: "Ahmad Ibrahim",
      status: "Active",
      updated: "01/03/2024",
    },
  ];

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
          <li className="dashboard-li">
            <button onClick={navigateToDashboard}>Dashboard</button>
          </li>
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
      </div>
      <div className="admin-dashboard-stats flex column center">
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Cases List</h2>
          <button>Add New Case</button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Title</th>
                <th>Investigator</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.investigator}</td>
                  <td>{row.status}</td>
                  <td>{row.updated}</td>
                  <td className="table-actions">
                    <button>Edit</button>
                    <button>Delete</button>
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
