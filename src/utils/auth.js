import { jwtDecode } from "jwt-decode";

export const getToken = () => localStorage.getItem("authToken");

export const getUserType = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
