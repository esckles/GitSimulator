import React from "react";
import { Outlet } from "react-router-dom";

const DevopsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DevopsLayout;
