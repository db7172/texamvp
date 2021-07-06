import React from "react";
import MainTitle from "../../components/mainTitle/MainTitle";
import NavBar from "../../components/navBar/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="tw-mt-28">
        <MainTitle />
      </div>
    </>
  );
}

export default Home;
