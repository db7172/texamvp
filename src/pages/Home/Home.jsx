import React, { useState } from "react";
import Container from "../../components/common/Container";
import MainTitle from "../../components/mainTitle/MainTitle";
import NavBar from "../../components/navBar/NavBar";
import { TentIcon, HotelIcon, CalendarIcon } from "../../assets/svg/SVGIcon";
import { SECONDARY_COLOR } from "../../constant/comman.const";
import ActivityTab from "../../components/home-page-tabs/ActivityTab";
import Retreat from "../../components/home-page-tabs/Retreat";

const getTabClasses = (tab, activeTab) => {
  return "tw-gh-tabs" + (activeTab === tab ? " active" : "");
};

const activityOptions = [
  "Trekking",
  "Camping",
  "Skiingg",
  "Surfing",
  "Kayking",
  "Scuba Diving",
  "Snookering",
  "Web Shows",
  "Ladakh",
  "Cycle Trip",
  "Trekking",
  "Camping",
  "Skiingg",
  "Surfing",
  "Kayking",
  "Scuba Diving",
  "Snookering",
  "Web Shows",
  "Ladakh",
];

const eventOptions = [
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
  "Music",
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
  "Music",
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
];

const getIcon = (icon, active) => (active ? icon(SECONDARY_COLOR) : icon());

function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (activity, date) => {
    console.log({ activity, date });
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="tw-mt-28">
          <MainTitle />
        </div>
        <div className="tw-mt-24">
          <div className={`${!(activeTab === 3) && "tw-max-w-4xl"} tw-mx-auto`}>
            <div className="tw-flex tw-justify-center">
              <nav className="tw-flex tw-flex-row tw-px-4">
                <button
                  className={getTabClasses(1, activeTab)}
                  onClick={() => setActiveTab(1)}
                >
                  <div className="tw-flex">
                    <span className="tw-mr-2">
                      {getIcon(TentIcon, activeTab === 1)}
                    </span>
                    <span>Activity</span>
                  </div>
                </button>

                <button
                  className={getTabClasses(2, activeTab)}
                  onClick={() => setActiveTab(2)}
                >
                  <div className="tw-flex">
                    <span className="tw-mr-2">
                      {getIcon(HotelIcon, activeTab === 2)}
                    </span>
                    <span>Event</span>
                  </div>
                </button>

                <button
                  className={getTabClasses(3, activeTab)}
                  onClick={() => setActiveTab(3)}
                >
                  <div className="tw-flex">
                    <span className="tw-mr-2">
                      {getIcon(CalendarIcon, activeTab === 3)}
                    </span>
                    <span>Retreat</span>
                  </div>
                </button>
              </nav>
            </div>
            <div className="tw-tab-container">
              {activeTab === 1 && (
                <ActivityTab
                  dropDownLabel="ACTIVITY TYPE"
                  placeHolder="Select your activity"
                  DropDownOptions={activityOptions}
                  dateLabel="START DATE"
                  onClick={handleClick}
                />
              )}
              {activeTab === 2 && (
                <ActivityTab
                  dropDownLabel="EVENT TYPE"
                  placeHolder="Select your event"
                  DropDownOptions={eventOptions}
                  dateLabel="DATE"
                  onClick={handleClick}
                />
              )}
              {activeTab === 3 && <Retreat />}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
