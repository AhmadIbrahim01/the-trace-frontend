import React, { useEffect, useState } from "react";
import "./ManageInvestigators.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ManageInvestigators = () => {
  const tableData = [
    {
      id: 1,
      name: "Ahmad",
      email: "ahmad@gmail.com",
      phone: "76468212",
      caseHandled: "50",
    },
    {
      id: 2,
      name: "Ahmad",
      email: "ahmad@gmail.com",
      phone: "76468212",
      caseHandled: "50",
    },
    {
      id: 3,
      name: "Ahmad",
      email: "ahmad@gmail.com",
      phone: "76468212",
      caseHandled: "50",
    },
  ];

  const [investigators, setInvestigators] = useState([]);

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
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInvestigators();
  }, [investigators]);

  const deleteInvestigator = async (investigatorId) => {
    const response = await axios.delete(
      `http://127.0.0.1:8080/api/admin/${investigatorId}`
    );
    console.log(response.message);
    setInvestigators([]);
  };

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
  const addInvestigator = () => {
    navigate("/add-investigator");
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
      </div>
      <div className="admin-dashboard-stats flex column center">
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Investigator List</h2>
          <button onClick={addInvestigator}>Add New Investigator</button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Case Handled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {investigators.map((row, index) => (
                <tr key={index}>
                  <td>{row._id}</td>
                  <td>
                    {row.firstName} {row.firstName}
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.caseHandled}</td>
                  <td className="table-actions">
                    <button>Edit</button>
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
