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
  const [popData, setPopData] = useState([]);
  const [aomData, setAomData] = useState([]);
  const [bestActivites, setBestActivities] = useState([]);
  const [events, setEvents] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [popularRetreat, setPopularRetreat] = useState([]);
  const [popularWorkation, setPopularWorkation] = useState([]);
  const { width } = useWindowDimensions();
  const [dropData, setDropData] = useState({
    activities: [],
    events: [],
    retreats: [],
    workations: [],
  });

  const history = useHistory();

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
    firebase
      .firestore()
      .collection("homepage")
      .doc("popular")
      .get()
      .then((doc) => {
        setPopData(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("activity_of_month")
      .get()
      .then((doc) => {
        setAomData(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("best_activities")
      .get()
      .then((doc) => {
        setBestActivities(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("events")
      .get()
      .then((doc) => {
        setEvents(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("popular_events")
      .get()
      .then((doc) => {
        setPopularEvents(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("popular_retreat")
      .get()
      .then((doc) => {
        setPopularRetreat(doc.data());
      });
    firebase
      .firestore()
      .collection("homepage")
      .doc("popular_workation")
      .get()
      .then((doc) => {
        setPopularWorkation(doc.data());
      });
  }, [width]);

  const handleClick = (activity, date, type) => {
    console.log({ activity, date });
    history.push(
      `/activity/${activity.charAt(0).toLowerCase() + activity.slice(1)}`
    );
  };

  console.log(dropData.activities);

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
              title={popData.title}
              data={popData.trips}
              path={getActivityPagePath("Popular Activities")}
              description={popData.description}
            />
          </div>
          <div className="tw-mt-20">
            <Title
              title="Browse Activities"
              description="Lorem ipsum is the dummy text for placing any thing"
              path="/activities"
            />
            <div className="tw-flex tw-justify-between tw-mt-5">
              {dropData.activities.map((d, i) => (
                <Link key={i} to={getActivityPagePath(lowerCase(d.data.name))}>
                  <IconCard
                    // path={icon}
                    name={d.data.name}
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
              title={aomData.title}
              data={aomData.trips}
              path={getActivityPagePath("Activity of the Month")}
              description={aomData.description}
            />
          </div>
          <div className="tw-mt-20">
            <ActivityCarousel
              setting={{ slidesToShow: 3 }}
              title={bestActivites.title}
              data={bestActivites.trips}
              path={getActivityPageWithCityPath("Best Activity", "Maldives")}
              description={bestActivites.description}
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
              title={events.title}
              data={events.trips}
              setting={{ slidesToShow: 3 }}
              path="/events"
              description={events.description}
              event
            />
          </div>
          <div className="tw-mt-20">
            <EventCarousel
              title={popularEvents.title}
              data={popularEvents.trips}
              setting={{ slidesToShow: 3 }}
              path={getEventPagePath("Popular Events")}
              description={popularEvents.description}
              event
            />
          </div>
          {/* <div className="tw-mt-20">
            <EventCarousel
              title="Music"
              data={EVENT}
              setting={{ slidesToShow: 3 }}
              path={getEventPagePath("Music")}
              description="Lorem ipsum is the dummy text for placing any thing"
              event
            />
          </div> */}
          <div className="tw-mt-20">
            <EventCarousel
              title={popularRetreat.title}
              data={popularRetreat.trips}
              setting={{ slidesToShow: 3 }}
              description={popularRetreat.description}
              path={getRetreatPagePath("Popular Retreat")}
            />
          </div>
          <div className="tw-mt-20">
            <WorkationCarousel
              title={popularWorkation.title}
              data={popularWorkation.trips}
              setting={{ slidesToShow: 3 }}
              description={popularWorkation.description}
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
