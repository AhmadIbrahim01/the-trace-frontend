import React, { useEffect, useState } from "react";
import "./ManageAdmins.css";
import adminImage from "../../../../assets/images/suspect.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAdminData } from "../../../../context/AdminContext";

const ManageAdmins = () => {
  const { formData, token, decoded, adminId, adminRole, adminName } =
    useAdminData();

  const [admins, setAdmins] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchAdminsData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:${
            import.meta.env.VITE_SERVER_PORT
          }/api/admin/admins`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setAdmins(response.data.admins);
        setRefresh(false);
      } catch (error) {
        console.log(error.message);
        setRefresh(false);
      }
    };
    fetchAdminsData();
  }, [refresh]);

  const banAdmin = async (id) => {
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

  const deleteAdmin = async (id) => {
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
  const editAdmin = (adminId) => {
    navigate("/edit-admin", { state: adminId });
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
  const addAdmin = () => {
    navigate("/add-admin");
  };

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
            <li className="dashboard-li dashboard-li-clicked">
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
        <div className="suspect-profile-header manage-investigator-header flex center">
          <h2>Admins List</h2>
          <button onClick={addAdmin}>Add Admin</button>
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
              {admins &&
                admins.map((row, index) =>
                  row.role !== "super_admin" ? (
                    <tr key={index}>
                      <td>
                        {row.firstName} {row.lastName}
                      </td>
                      <td>{row.email}</td>
                      <td>{row.phone}</td>
                      <td>{row.banned ? "Banned" : "Active"}</td>
                      <td className="table-actions">
                        <button onClick={() => editAdmin(row._id)}>Edit</button>
                        <button onClick={() => deleteAdmin(row._id)}>
                          Delete
                        </button>
                        <button onClick={() => banAdmin(row._id)}>
                          {row.banned ? "Activate" : "Ban"}
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <></>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;
