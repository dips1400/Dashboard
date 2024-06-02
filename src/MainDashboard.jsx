import React from "react";
import "./MainDashboard.css";
import DashboardTitle from "./components/DashboardTitle";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";

const MainDashboard = () => {
  return (
  <div className="Maincontainer">
    <div className="Dashboardheader">
      <DashboardTitle />
    </div>
    <div className="content-container">
      <div className="left-content">
        <LeftContent />
      </div>
      <div className="right-content">
        <RightContent />
      </div>
    </div>
  </div>
  )
};

export default MainDashboard;

