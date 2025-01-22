import React from "react";
import { Navigate } from "react-router-dom";
import { getToken, getUserType } from "../../utils/auth.js";

const AdminProtectedRoute = ({ children }) => {
  const token = getToken();
  const user_type = getUserType();

  if (!token || (user_type !== "admin" && user_type !== "super_admin")) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminProtectedRoute;
