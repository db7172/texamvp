import React from "react";
import "./dashboard.css";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default Dashboard;
