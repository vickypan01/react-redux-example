import React from "react";
import AppHeader from "../Header/header";
import { Outlet } from "react-router-dom";

const RouteLayout: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div className="container pb-4">
        <Outlet />
      </div>
    </>
  );
};

export default RouteLayout;
