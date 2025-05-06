import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../page/static/Header";
// import Footer from "../page/static/Footer";

const LandinpageLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LandinpageLayout;
