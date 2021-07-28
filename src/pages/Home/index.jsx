import React, { useEffect, useState } from "react";
import Container from "../../components/common/container/Container";
import MainTitle from "../../components/mainTitle/MainTitle";
import { TentIcon, HotelIcon, CalendarIcon } from "../../assets/svg/SVGIcon";
import {
  getActivityPagePath,
  getActivityPageWithCityPath,
  getEventPagePath,
  getRetreatPagePath,
  getWorkationPagePath,
  SECONDARY_COLOR,
} from "../../constant/comman.const";
import ActivityTab from "../../components/home-page-tabs/ActivityTab";
import Retreat from "../../components/home-page-tabs/Retreat";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import { ACTIVITY, EVENT, RETREAT, WORKATION } from "../../constant/dummyData";
import Title from "../../components/common/title/Title";
import { getActivityIcon } from "../../constant/activity-icon";
import IconCard from "../../components/card/icon-card/IconCard";
import useWindowDimensions from "../../components/common/useWindowDimensions/useWindowDimensions";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import Testimonials from "../../components/common/carousel/Testimonials";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import { Button, Input } from "antd";

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
  const [activityIcon, setActivityIcon] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1440) {
      setActivityIcon(getActivityIcon(6));
    } else if (width < 1440 && width >= 1024) {
      setActivityIcon(getActivityIcon(6));
    } else if (width < 1024 && width >= 768) {
      setActivityIcon(getActivityIcon(4));
    } else {
      setActivityIcon(getActivityIcon(3));
    }
  }, [width]);

  const handleClick = (activity, date) => {
    console.log({ activity, date });
  };

  return (
    //TODO: remove mb-10 class once the page is created
    <Container>
      <div className="tw-mb-10">
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
          <Title
            title="Destination"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-14">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </div>
        <div className="tw-mt-20">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Popular Activities"
            data={ACTIVITY}
            path={getActivityPagePath("Popular Activities")}
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </div>
        <div className="tw-mt-20">
          <Title
            title="Browse Activities"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
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
            path={getActivityPagePath("Activity of the Month")}
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </div>
        <div className="tw-mt-20">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Best Activity of Maldives"
            data={ACTIVITY}
            path={getActivityPageWithCityPath("Best Activity", "Maldives")}
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </div>
        <div className="tw-mt-20">
          <Title
            title="Events"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-14">
            {/* <ImageGallery /> */}
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
          {/* </div> */}
        </div>
        <div className="tw-mt-20">
          <EventCarousel
            title="Popular Events"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Popular Events")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </div>
        <div className="tw-mt-20">
          <EventCarousel
            title="Worshop"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Worshop")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </div>
        <div className="tw-mt-20">
          <EventCarousel
            title="Music"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Music")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </div>
        <div className="tw-mt-20">
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getRetreatPagePath("Popular Retreat")}
          />
        </div>
        <div className="tw-mt-20">
          <WorkationCarousel
            title="Popular Workation"
            data={WORKATION}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getWorkationPagePath("Popular Workation")}
          />
        </div>
        <div className="tw-mt-20">
          <div className="tw-max-w-6xl tw-mx-auto">
            <h3 className="tw-text-4xl tw-font-medium tw-text-center">
              Over 40 Lac+ Happy Travelers
            </h3>
            <div className="tw-mt-14">
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="tw-mt-20">
          <BlogCarousel title="Binge worthy blogs by members" />
        </div>
      </div>
    </Container>
  );
}

export default Home;
