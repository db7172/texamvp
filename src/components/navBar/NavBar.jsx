/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import NavBarOption from "./NavBarOption";
import {
  ACTIVITY_DATA,
  EVENT_DATA,
  RETREAT_DESTINATION,
} from "./navData/navData";
import { upperCase } from "../../utils/utils";

function NavBar() {
  const [isShow, setIsShow] = useState(false);
  const [showReterat, setShowReterat] = useState(false);
  const [navData, setNavData] = useState({});

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShow(false);
          setShowReterat(false);
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
    setShowReterat(false);
    if (data.title === navData.title) {
      setIsShow(false);
      setNavData({});
    } else {
      setIsShow(true);
      setNavData(data);
    }
  };

  const handleShowReterat = () => {
    setIsShow(false);
    setNavData({});
    setShowReterat(!showReterat);
  };
  return (
    <div ref={wrapperRef}>
      <div className="tw-bg-white tw-shadow-nav-bar">
        <Container className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-text-black">
          <div>
            <h1 className="tw-font-bold tw-text-4xl">Texa Trove</h1>
          </div>
          <div>
            <ul className="tw-flex">
              <li>
                <button
                  className="tw-mr-8 tw-flex tw-items-center"
                  onClick={() => handleShow(ACTIVITY_DATA)}
                >
                  <span className="tw-mr-2">{upperCase("Activity Type")}</span>
                  <span className="tw-pt-1">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-mr-8 tw-flex tw-items-center"
                  onClick={() => handleShow(EVENT_DATA)}
                >
                  <span className="tw-mr-2">{upperCase("Event Type")}</span>
                  <span className="tw-pt-1">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-flex tw-items-center"
                  onClick={handleShowReterat}
                >
                  <span className="tw-mr-2">
                    {upperCase("Retreat Destination")}
                  </span>
                  <span className="tw-pt-1">
                    <DownArrow />
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="tw-flex">
            <ul className="tw-flex tw-items-center">
              <li className="tw-mr-6 tw-flex tw-items-center">
                <span className="tw-mr-2">
                  <Location />
                </span>
                <span>{upperCase("Location")}</span>
              </li>
              <li className="tw-mr-6 tw-flex tw-items-center">
                <span className="tw-mr-2">
                  <Telephone />
                </span>
                <span>1800-1200-1400</span>
              </li>
              <li className="tw-mr-10">{upperCase("BLOG")}</li>
              <li className="tw-mr-3">{upperCase("LOGIN")}</li>
            </ul>
            <button className="tw-bg-secondary-color tw-font-medium tw-px-6 tw-py-3 tw-rounded-md">
              {upperCase("GET STARTED")}
            </button>
          </div>
        </Container>
      </div>
      <Container className="tw-relative">
        <div className="tw-z-10 tw-w-full tw-absolute tw-bg-primary-color">
          {showReterat ? (
            <div className="tw-flex tw-justify-evenly tw-items-center">
              <div className="">
                <NavBarOption
                  isShow={showReterat}
                  data={RETREAT_DESTINATION.workcation}
                />
              </div>
              <div className="tw-min-h-32 tw-border-r-2" />
              <div className="tw-pl-24">
                <NavBarOption
                  isShow={showReterat}
                  data={RETREAT_DESTINATION.reterat}
                />
              </div>
            </div>
          ) : (
            <NavBarOption isShow={isShow} data={navData} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
