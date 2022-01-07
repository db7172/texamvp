import React from "react";
import HomeCover from "../HomeCover/HomeCover";
import HomeDescriptions from "../HomeDescriptions/HomeDescriptions";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeCover />
      <HomeDescriptions />
    </div>
  );
};

export default HomePage;
