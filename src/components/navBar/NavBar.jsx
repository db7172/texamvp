/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Container from "../common/container/Container";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import NavBarOption from "./NavBarOption";
import {
  ACTIVITY_DATA,
  EVENT_DATA,
  RETREAT_DESTINATION,
} from "../../constant/navData.const";
import { upperCase } from "../../utils/utils";
import { Link } from "react-router-dom";
import { LoginModal } from "../modals/login-modal/LoginModal";

const default_Options = {
  data: { title: "", options: [] },
  path: "",
};

function NavBar() {
  const [isShow, setIsShow] = useState(false);
  const [showReterat, setShowReterat] = useState(false);
  const [navData, setNavData] = useState(default_Options);
  const [showModal, setShowModal] = useState(false);

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
    if (data.data.title === navData.data.title) {
      setIsShow(false);
      setNavData(default_Options);
    } else {
      setIsShow(true);
      setNavData(data);
    }
  };

  const handleShowReterat = () => {
    setIsShow(false);
    setNavData(default_Options);
    setShowReterat(!showReterat);
  };

  const handleLinkClick = () => {
    setIsShow(false);
    setShowReterat(false);
  };
  return (
    // <div ref={wrapperRef} className="tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-9999">

    <div ref={wrapperRef}>
      <div className="tw-bg-white tw-shadow-nav-bar">
        <Container className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-text-primary-color">
          <div>
            <Link to="/">
              <button>
                <h1 className="tw-font-bold tw-text-4xl">Texa Trove</h1>
              </button>
            </Link>
          </div>
          <div>
            <ul className="tw-flex">
              <li>
                <button
                  className="tw-mr-8 tw-flex tw-items-center"
                  onClick={() =>
                    handleShow({ data: ACTIVITY_DATA, path: "activity" })
                  }
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
                  onClick={() =>
                    handleShow({ data: EVENT_DATA, path: "event" })
                  }
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
              <li className="tw-mr-3">
                <button
                  className="tw-bg-secondary-color tw-font-medium tw-px-6 tw-py-3 tw-rounded-md"
                  onClick={() => setShowModal(true)}
                >
                  {upperCase("LOGIN")}
                </button>
              </li>
            </ul>
            {/* <button className="tw-bg-secondary-color tw-font-medium tw-px-6 tw-py-3 tw-rounded-md">
              {upperCase("GET STARTED")}
            </button> */}
          </div>

          {showModal && (
            <LoginModal
              onCancel={() => setShowModal(!showModal)}
              onSave={() => console.log("Saved!")}
            />
          )}
        </Container>
      </div>
      <Container className="tw-relative">
        <div className="tw-z-9999 tw-w-full tw-absolute tw-bg-primary-color">
          {showReterat ? (
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
              <div className="tw-pl-24">
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
            <NavBarOption
              toggleNavBar={handleLinkClick}
              isShow={isShow}
              data={navData}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
