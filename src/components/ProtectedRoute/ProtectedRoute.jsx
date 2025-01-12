import React from "react";
import { Navigate } from "react-router-dom";
import { getToken, getUserType } from "../../utils/auth.js";

const ProtectedRoute = ({ allowedUserType, children }) => {
  const token = getToken();
  const user_type = getUserType();

  console.log(token);
  console.log("user type: ", user_type);

  if (!token || user_type !== allowedUserType) {
    return <Navigate to="/Unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
