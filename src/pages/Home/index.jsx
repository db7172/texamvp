import React, { useEffect, useState } from "react";
import Container from "../../components/common/container/Container";
import MainTitle from "../../components/mainTitle/MainTitle";
import { TentIcon, HotelIcon, CalendarIcon } from "../../assets/svg/SVGIcon";
import { SECONDARY_COLOR } from "../../constant/comman.const";
import ActivityTab from "../../components/home-page-tabs/ActivityTab";
import Retreat from "../../components/home-page-tabs/Retreat";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import { ACTIVITY, EVENT, RETREAT, WORKATION } from "../../constant/dummyData";
import Title from "../../components/common/title/Title";
import { getActivityIcon } from "../../constant/activity-icon";
import IconCard from "../../components/card/icon-card/IconCard";
import useWindowDimensions from "../../components/common/useWindowDimensions/useWindowDimensions";
import ImageGallery from "../../components/home-page-tabs/ImageGallery";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import Testimonials from "../../components/common/carousel/Testimonials";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";

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
      setActivityIcon(getActivityIcon(8));
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
        <div className="md:tw-mt-28 tw-mt-14">
          <MainTitle />
        </div>
        <div className="md:tw-mt-24 tw-mt-14">
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
        <div className="md:tw-mt-32 tw-mt-14">
          <div className="tw-text-center">
            <p className="md:tw-text-2xl tw-text-lg tw-tracking-wider">
              Escape to your faviourite
            </p>
            <h3 className="tracking-wider tw-font-bold md:tw-text-7xl tw-text-5xl">
              Destination
            </h3>
          </div>
          <div className="md:tw-mt-14 tw-mt-11">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Popular Activities"
            data={ACTIVITY}
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <Title title="Browse Activities" />
          <div className="tw-flex tw-justify-between tw-mt-10">
            {activityIcon.map(({ icon, name }, i) => (
              <IconCard path={icon} name={name} number={124} key={i} />
            ))}
          </div>
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Activity of the Month"
            data={ACTIVITY}
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Best Activity of Maldives"
            data={ACTIVITY}
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center">
            <div className="lg:tw-w-2/4 tw-mb-10 lg:tw-mb-0">
              <p className="xl:tw-text-4xl lg:tw-text-2xl tw-text-xl tw-pl-2 tw-tracking-wide ">
                Find perfect{" "}
                <span className="tw-inline-block tw-border-b-4 xl:tw-w-20 tw-w-10 tw-border-primary-yellow" />
              </p>
              <h4 className="xl:tw-text-8xl lg:tw-text-6xl tw-text-5xl tw-tracking-wide tw-font-bold">
                Events
              </h4>
            </div>
            <div>
              <ImageGallery />
            </div>
          </div>
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <EventCarousel
            title="Popular Events"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            event
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <EventCarousel
            title="Worshop"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            event
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <EventCarousel
            title="Music"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            event
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <WorkationCarousel
            title="Popular Workation"
            data={WORKATION}
            setting={{ slidesToShow: 3 }}
          />
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <div className="tw-max-w-6xl tw-mx-auto">
            <h3 className="tw-text-4xl tw-font-medium tw-text-center">
              Over 40 Lac+ Happy Travelers
            </h3>
            <div className="tw-mt-14">
              <Testimonials />
            </div>
          </div>
        </div>
        <div className="md:tw-mt-20 tw-mt-14">
          <BlogCarousel title="Binge worthy blogs by members" />
        </div>
      </div>
    </Container>
  );
}

export default Home;
