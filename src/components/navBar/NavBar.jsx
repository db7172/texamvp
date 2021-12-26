/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import NavBarOption from "./NavBarOption";
import {
  ACTIVITY_DATA,
  EVENT_DATA,
  RETREAT_DATA,
  WORKCATION_DATA,
} from "../../constant/navData.const";
import { upperCase } from "../../utils/utils";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { CITY_ARR } from "../../constant/city-array";
import { lowerCase } from "lodash";
import UserLoginModal from "./UserLoginModal";
import UserLogin from "./UserLogin";

const default_Options = {
  data: { title: "", options: [] },
  path: "",
};

function NavBar() {
  const [isShow, setIsShow] = useState(false);
  // const [showReterat, setShowReterat] = useState(false);
  const [navData, setNavData] = useState(default_Options);
  const [showModal, setShowModal] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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

  const handleShow = (data) => {
    // setShowReterat(false);
    if (data.data.title === navData.data.title) {
      setIsShow(false);
      setNavData(default_Options);
    } else {
      setIsShow(true);
      setNavData(data);
    }
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
                  onClick={() =>
                    handleShow({ data: ACTIVITY_DATA, path: "activity" })
                  }
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
                  onClick={() =>
                    handleShow({ data: EVENT_DATA, path: "event" })
                  }
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
                  onClick={() =>
                    handleShow({ data: RETREAT_DATA, path: "destination" })
                  }
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
                  onClick={() =>
                    handleShow({ data: WORKCATION_DATA, path: "destination" })
                  }
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
