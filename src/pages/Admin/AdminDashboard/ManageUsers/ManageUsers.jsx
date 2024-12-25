import React from "react";
import "./ManageUsers.css";
import adminImage from "../../../../assets/images/suspect.svg";
import dashboardIconOne from "../../../../assets/icons/dashboard-icon.svg";
import dashboardIconTwo from "../../../../assets/icons/dashboard-icon-2.svg";

const ManageUsers = () => {
  const tableData = [
    {
      id: 1,
      name: "Ahmad Ibrahim",
      email: "ahmad@gmail.com",
      role: "Investigator",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmad Ibrahim",
      email: "ahmad@gmail.com",
      role: "Investigator",
      status: "Active",
    },
    {
      id: 3,
      name: "Ahmad Ibrahim",
      email: "ahmad@gmail.com",
      role: "Investigator",
      status: "Active",
    },
  ];
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
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Users List</h2>
          <button>Add New User</button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.role}</td>
                  <td>{row.status}</td>
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

export default ManageUsers;
