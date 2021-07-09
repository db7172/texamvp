import React, { useState } from "react";
import Container from "../../components/common/container/Container";
import MainTitle from "../../components/mainTitle/MainTitle";
import NavBar from "../../components/navBar/NavBar";
import { TentIcon, HotelIcon, CalendarIcon } from "../../assets/svg/SVGIcon";
import { SECONDARY_COLOR } from "../../constant/comman.const";
import ActivityTab from "../../components/home-page-tabs/ActivityTab";
import Retreat from "../../components/home-page-tabs/Retreat";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import { ACTIVITY } from "../../constant/dummyData";
import Title from "../../components/common/title/Title";
import { getActivityIcon } from "../../constant/activity-icon";
import IconCard from "../../components/common/icon-card/IconCard";

const getTabClasses = (tab, activeTab) => {
  return "tw-gh-tabs" + (activeTab === tab ? " active" : "");
};

//TODO:- remove dummy data once API come

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
  const [activityIcon] = useState(getActivityIcon(8));

  const handleClick = (activity, date) => {
    console.log({ activity, date });
  };

  return (
    //TODO: remove mb-10 class once the page is created
    <div className="tw-mb-10">
      {/* <NavBar /> */}
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
        <div className="tw-mt-32">
          <div className="tw-text-center">
            <p className="tw-text-2xl tw-tracking-wider">
              Escape to your faviourite
            </p>
            <h3 className="tracking-wider tw-font-bold tw-text-7xl">
              Destination
            </h3>
          </div>
          <div className="tw-mt-14">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </div>
        <div className="tw-mt-20">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Popular Activities"
            data={ACTIVITY}
          />
        </div>
        <div className="tw-mt-20">
          <Title title="Browse Activities" />
          <div className="tw-flex tw-justify-between tw-mt-10">
            {activityIcon.map(({ icon, name }, i) => (
              <IconCard path={icon} name={name} number={124} key={i} />
            ))}
          </div>
        </div>
        <div className="tw-mt-20">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Activity of the Month"
            data={ACTIVITY}
          />
        </div>
        <div className="tw-mt-20">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Best Activity of Maldives"
            data={ACTIVITY}
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
