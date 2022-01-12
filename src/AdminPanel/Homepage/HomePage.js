import React from "react";
import CreateCategory from "../CreateCategory/CreateCategory";
import HomeCover from "../HomeCover/HomeCover";
import HomeDescriptions from "../HomeDescriptions/HomeDescriptions";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeCover />
      <HomeDescriptions />
      <CreateCategory />
    </div>
  );
};

export default HomePage;
