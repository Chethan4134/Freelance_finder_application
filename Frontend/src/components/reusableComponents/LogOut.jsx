import React from "react";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  window.sessionStorage.clear();
  return <Navigate to="/" />;
};
export default LogOut;
