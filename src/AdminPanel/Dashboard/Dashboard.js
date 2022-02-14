import React from "react";
import "./dashboard.css";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import TopPane from "../TopPane/TopPane";

const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <div className="company-logo-lp">
          <h3>Texatrove Admin</h3>
        </div>
        <TopPane />
      </div>
      <div className="dashboard">
        <LeftPane />
        <RightPane />
      </div>
    </>
  );
};

export default Dashboard;
