import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <button type="button" onClick={logOut}>
        Log Out
      </button>
    </>
  );
};

export default UserProfile;
