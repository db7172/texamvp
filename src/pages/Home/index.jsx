import { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { lowerCase } from "lodash";
import firebase from "../../firebase";

const getTabClasses = (tab, activeTab) => {
  return "tw-gh-tabs" + (activeTab === tab ? " active" : "");
};

//TODO:- remove dummy data once API come

// const activityOptions = [
//   "Trekking",
//   "Camping",
//   "Skiingg",
//   "Surfing",
//   "Kayking",
//   "Scuba Diving",
//   "Snookering",
//   "Web Shows",
//   "Ladakh",
//   "Cycle Trip",
//   "Trekking",
//   "Camping",
//   "Skiingg",
//   "Surfing",
//   "Kayking",
//   "Scuba Diving",
//   "Snookering",
//   "Web Shows",
//   "Ladakh",
// ];

// const eventOptions = [
//   "Comedy",
//   "Music Fest",
//   "Online Course",
//   "Theatre",
//   "Music",
//   "Comedy",
//   "Music Fest",
//   "Online Course",
//   "Theatre",
//   "Music",
//   "Comedy",
//   "Music Fest",
//   "Online Course",
//   "Theatre",
// ];

const getIcon = (icon, active) => (active ? icon(SECONDARY_COLOR) : icon());

function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [activityIcon, setActivityIcon] = useState([]);
  const { width } = useWindowDimensions();
  const [dropData, setDropData] = useState({
    activities: [],
    events: [],
    retreats: [],
    workations: [],
  });

  const history = useHistory();

  // const fetchDropData = (type) => {
  //   firebase
  //     .firestore()
  //     .collection("categories")
  //     .get()
  //     .then((querySnap) => {
  //       setDropData(querySnap.docs.map((doc) => doc.data)).filter(
  //         (item) => item.data.type === type
  //       );
  //     });
  // };

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
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((querySnap) => {
        setDropData({
          ...dropData,
          activities: querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "activity";
            }),

          events: querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "event";
            }),

          retreats: querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "retreat";
            }),

          workations: querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "workation";
            }),
        });
      });
  }, [width]);

  const handleClick = (activity, date, type) => {
    console.log({ activity, date });
    history.push(
      `/activity/${activity.charAt(0).toLowerCase() + activity.slice(1)}`
    );
  };

  console.log(dropData);

  return (
    <>
      <div className="tw-relative tw-h-96 tw-flex tw-items-center tw-justify-center">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-left-0">
          <img
            className="tw-w-full tw-h-auto tw-object-cover"
            src="https://img.traveltriangle.com/public-product/homepage_illustrations/hero_general.gif"
            alt="cover-picure"
          />
        </div>
        <div className="tw-relative tw-z-10">
          <MainTitle />
        </div>
      </div>
      <Container>
        <div>
          <div className="tw-mt-5 tw-relative" style={{ zIndex: 2 }}>
            <div
              className={`${!(activeTab === 3) && "tw-max-w-4xl"} tw-mx-auto`}
            >
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
                      <span>Workcation</span>
                    </div>
                  </button>

                  <button
                    className={getTabClasses(4, activeTab)}
                    onClick={() => setActiveTab(4)}
                  >
                    <div className="tw-flex">
                      <span className="tw-mr-2">
                        {getIcon(CalendarIcon, activeTab === 4)}
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
                    type="activity"
                    placeHolder="Select your activity"
                    DropDownOptions={dropData.activities}
                    dateLabel="START DATE"
                    onClick={handleClick}
                  />
                )}
                {activeTab === 2 && (
                  <ActivityTab
                    dropDownLabel="EVENT TYPE"
                    type="event"
                    placeHolder="Select your event"
                    DropDownOptions={dropData.events}
                    dateLabel="DATE"
                    onClick={handleClick}
                  />
                )}
                {activeTab === 3 && <Retreat />}
                {activeTab === 4 && (
                  <ActivityTab
                    dropDownLabel="Retreat"
                    type="retreat"
                    placeHolder="Select your retreat"
                    DropDownOptions={dropData.workations}
                    dateLabel="DATE"
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="tw-mt-32">
            <Title
              title="Destination"
              description="Lorem ipsum is the dummy text for placing any thing"
              path="/workcations"
            />
            <div className="tw-mt-3">
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
              path="/activities"
            />
            <div className="tw-flex tw-justify-between tw-mt-5">
              {activityIcon.map(({ icon, name }, i) => (
                <Link to={getActivityPagePath(lowerCase(name))}>
                  <IconCard
                    path={icon}
                    name={name}
                    description={`124 Activites`}
                    key={i}
                  />
                </Link>
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
          {/* <div className="tw-mt-20">
            <Title
              title="Events"
              description="Lorem ipsum is the dummy text for placing any thing"
            />
            <div className="tw-mt-3">
              <DestinationCarousel setting={{ slidesToShow: 4 }} />
            </div>
          </div> */}
          <div className="tw-mt-20">
            <EventCarousel
              title="Events"
              data={EVENT}
              setting={{ slidesToShow: 3 }}
              path="/events"
              description="Lorem ipsum is the dummy text for placing any thing"
              event
            />
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
              title="Popular Workcation"
              data={WORKATION}
              setting={{ slidesToShow: 3 }}
              description="Lorem ipsum is the dummy text for placing any thing"
              path={getWorkationPagePath("Popular Workation")}
            />
          </div>
          <div className="tw-mt-20">
            <div className="tw-max-w-6xl tw-mx-auto">
              <h3 className="tw-text-2xl tw-font-medium tw-text-center">
                Over 40 Lac+ Happy Travelers
              </h3>
              <div className="tw-mt-14">
                <Testimonials />
              </div>
            </div>
          </div>
          <div className="tw-mt-20">
            <BlogCarousel
              description="Lorem ipsum is the dummy text for placing any thing"
              title="Binge worthy blogs by members"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
