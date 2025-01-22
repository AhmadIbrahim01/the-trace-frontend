import React from "react";
import { getToken, getUserType } from "../../utils/auth.js";
import { Navigate } from "react-router-dom";

const ProtectedRegistirationRoutes = ({ children }) => {
  const token = getToken();
  const user_type = getUserType();

  if (token || user_type) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRegistirationRoutes;
