/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import NavBarOption from "./NavBarOption";
// import {
//   ACTIVITY_DATA,
//   EVENT_DATA,
//   RETREAT_DATA,
//   WORKCATION_DATA,
// } from "../../constant/navData.const";
import { upperCase } from "../../utils/utils";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { CITY_ARR } from "../../constant/city-array";
import { lowerCase } from "lodash";
import UserLoginModal from "./UserLoginModal";
import UserLogin from "./UserLogin";
import firebase from "../../firebase";
import { AuthContext } from "../../Auth";

// const default_Options = {
//   data: { title: "", options: [] },
//   path: "",
// };

function NavBar() {
  const [isShow, setIsShow] = useState(false);
  // const [showReterat, setShowReterat] = useState(false);
  const [navData, setNavData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [allData, setAllData] = useState({
    activities: [],
    events: [],
    retreats: [],
    workations: [],
  });
  const [path, setPath] = useState("");
  const { currentUss } = useContext(AuthContext);
  // const [flag, setFlag] = useState(0);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (currentUss) setIsLogedIn(true);
      }
    });
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((querySnap) => {
        setAllData({
          ...allData,
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
  }, []);

  console.log(allData.activities);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShow(false);
          // setShowReterat(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleShow = (data, path) => {
    // setShowReterat(false);
    // console.log(data.data.title, navData.data.title);
    // if (data.data.title === navData.data.title) {
    //   setIsShow(false);
    //   setNavData(default_Options);
    // } else {
    setIsShow(!isShow);
    setNavData(data);
    setPath(path);
    // }
  };

  // const handleShowReterat = () => {
  //   setIsShow(false);
  //   setNavData(default_Options);
  //   setShowReterat(!showReterat);
  // };

  const handleLinkClick = () => {
    setIsShow(false);
    // setShowReterat(false);
  };
  return (
    // <div ref={wrapperRef} className="tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-9999">

    <div ref={wrapperRef}>
      <div className="tw-bg-white tw-shadow-nav-bar">
        <div className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-text-primary-color tw-px-7">
          <div>
            <Link to="/">
              <button onClick={handleLinkClick}>
                <h1 className="tw-font-bold tw-text-4xl">Texa Trove</h1>
              </button>
            </Link>
          </div>
          <div>
            <ul className="tw-flex tw-gap-4">
              <li>
                <button
                  className="tw-navbar-link"
                  onClick={() => handleShow(allData.activities, "activity")}
                >
                  <span className="tw-mr-2">Activities</span>
                  <span className="">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-navbar-link"
                  onClick={() => handleShow(allData.events, "event")}
                >
                  <span className="tw-mr-2">Events</span>
                  <span className="">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-navbar-link"
                  onClick={() => handleShow(allData.retreats, "retreat")}
                >
                  <span className="tw-mr-2">Retreats</span>
                  <span className="">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-navbar-link tw-mr-0"
                  onClick={() => handleShow(allData.workations, "workcation")}
                >
                  <span className="tw-mr-2">Workcations</span>
                  <span className="">
                    <DownArrow />
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="tw-flex">
            <ul className="tw-flex tw-gap-4 tw-items-center">
              <li className="tw-navbar-link">
                <span>
                  <Location />
                </span>
                <Select
                  showSearch
                  defaultValue="mumbai"
                  style={{ width: 120 }}
                  bordered={false}
                  placeholder="Location"
                >
                  {CITY_ARR.map((c, i) => (
                    <Select.Option key={i} value={lowerCase(c)}>
                      {c}
                    </Select.Option>
                  ))}
                </Select>
              </li>
              <li className="tw-navbar-link">
                <span className="tw-mr-2">
                  <Telephone />
                </span>
                <span>1800-1200-1400</span>
              </li>
              <li className="tw-navbar-link">Blog</li>
              {isLogedIn ? (
                <li className="tw-navbar-link">
                  <UserLogin />
                </li>
              ) : (
                <li className="tw-navbar-link">
                  <button
                    className="tw-bg-secondary-color tw-font-medium tw-px-6 tw-py-3 tw-rounded-md"
                    onClick={() => setShowModal(true)}
                  >
                    {upperCase("LOGIN")}
                  </button>

                  <UserLoginModal
                    isModalOpen={showModal}
                    handleModalCancel={() => setShowModal(false)}
                    handleLogin={(value) => setIsLogedIn(value)}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="tw-relative">
        <div className="tw-z-50 tw-absolute tw-w-full">
          <div className="tw-w-10/12 tw-mx-auto tw-flex tw-justify-center tw-items-center tw-bg-white tw-shadow-2xl">
            {/* {showReterat ? (
              <div className="tw-flex tw-justify-evenly tw-items-center">
                <div className="">
                  <NavBarOption
                    toggleNavBar={handleLinkClick}
                    isShow={showReterat}
                    data={{
                      data: RETREAT_DESTINATION.workcation,
                      path: "destination",
                    }}
                  />
                </div>
                <div className="tw-min-h-32 tw-border-r-2" />
                <div className="tw-pl-12">
                  <NavBarOption
                    toggleNavBar={handleLinkClick}
                    isShow={showReterat}
                    data={{
                      data: RETREAT_DESTINATION.reterat,
                      path: "destination",
                    }}
                  />
                </div>
              </div>
            ) : (
              )} */}
            <NavBarOption
              toggleNavBar={handleLinkClick}
              isShow={isShow}
              data={navData}
              path={path}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
