import React, { useEffect, useState } from "react";
import "./ManageUsers.css";
import adminImage from "../../../../assets/images/suspect.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { useAdminData } from "../../../../context/AdminContext";

const ManageUsers = () => {
  const { formData, token, decoded, adminId, adminName, adminRole } =
    useAdminData();

  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/admin`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setUsers(response.data.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, [refresh]);

  const toggleRole = async (id) => {
    try {
      await axios.put(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/admin/investigator/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const banUser = async (id) => {
    try {
      await axios.post(
        `http://127.0.0.1:${
          import.meta.env.VITE_SERVER_PORT
        }/api/admin/ban/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/admin/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate();
  const editUser = (userId) => {
    navigate("/edit-user", { state: userId });
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
  const addUser = () => {
    navigate("/add-user");
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
          <li className="dashboard-li">
            <button onClick={navigateToCases}>Manage Cases</button>
          </li>
          <li className="dashboard-li dashboard-li-clicked">
            <button onClick={navigateToUsers}>Manage Users</button>
          </li>
        </ul>
        <button className="admin-logout-btn" onClick={logOut}>
          log out
        </button>
      </div>
      <div className="admin-dashboard-stats flex column center">
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Users List</h2>
          <button onClick={addUser}>Add User</button>
        </div>
        <div className="table_component">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((row, index) =>
                row.role !== "admin" && row.role !== "super_admin" ? (
                  <tr key={row._id}>
                    <td>
                      {row.firstName} {row.lastName}
                    </td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.role}</td>
                    <td>{row.banned ? "Banned" : "Active"}</td>
                    <td className="table-actions">
                      <button onClick={() => editUser(row._id)}>Edit</button>
                      <button onClick={() => deleteUser(row._id)}>
                        Delete
                      </button>
                      <button onClick={() => toggleRole(row._id)}>Role</button>
                      <button onClick={() => banUser(row._id)}>
                        {row.banned ? "Activate" : "Ban"}
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={row._id}></tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
