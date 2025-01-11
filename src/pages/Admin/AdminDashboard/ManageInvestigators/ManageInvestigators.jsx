import React, { useEffect, useState } from "react";
import "./ManageInvestigators.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ManageInvestigators = () => {
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
            <button onClick={navigateToAdmins}>Manage Admins</button>
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
                {/* <th>Case Handled</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {investigators.map((row, index) => (
                <tr key={index}>
                  <td>{row._id}</td>
                  <td>
                    {row.firstName} {row.lastName}
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  {/* <td>{row.caseHandled}</td> */}
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
