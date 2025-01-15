import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const token = localStorage.getItem("authToken");
  const decoded = jwtDecode(token);
  const adminId = decoded.userId;
  const adminName = decoded.name ?? "";
  const adminRole = decoded.role;

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

        setFormData({
          firstName: response.data.admin.firstName,
          lastName: response.data.admin.lastName,
          email: response.data.admin.email,
          phone: response.data.admin.phone,
          password: response.data.admin.password,
          profilePicture: response.data.admin.profilePicture,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdminData();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        formData,
        setFormData,
        token,
        decoded,
        adminId,
        adminName,
        adminRole,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminData = () => useContext(AdminContext);
