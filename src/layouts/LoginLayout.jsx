import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavbar from "../pages/Shared/Nav/HeaderNavbar";

const LoginLayout = () => {
  return (
    <div className="bg-dark bg-opacity-10" style={{ height: "100vh" }}>
      <HeaderNavbar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
