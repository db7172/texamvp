import React, { useState } from "react";
import Container from "../../components/common/Container";
import MainTitle from "../../components/mainTitle/MainTitle";
import NavBar from "../../components/navBar/NavBar";

const getTabClasses = (tab, activeTab) => {
  return "tw-gh-tabs" + (activeTab === tab ? " active" : "");
};

function Home() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <NavBar />
      <Container>
        <div className="tw-mt-28">
          <MainTitle />
        </div>
        <div className="tw-mt-24">
          <div className="tw-max-w-4xl tw-mx-auto">
            <div className="tw-flex tw-justify-center">
              <nav className="tw-flex tw-flex-row tw-px-4">
                <button
                  className={getTabClasses(1, activeTab)}
                  onClick={() => setActiveTab(1)}
                >
                  {"Activity "}
                </button>

                <button
                  className={getTabClasses(2, activeTab)}
                  onClick={() => setActiveTab(2)}
                >
                  {"Event "}
                </button>

                <button
                  className={getTabClasses(3, activeTab)}
                  onClick={() => setActiveTab(3)}
                >
                  {"Retreat "}
                </button>
              </nav>
            </div>
            <div className="tw-tab-container">
              {activeTab === 1 && "Activity"}
              {activeTab === 2 && "Event"}
              {activeTab === 3 && "Retreat"}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
