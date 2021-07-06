import React, { useState } from "react";
import Container from "../common/Container";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as Location } from "../../assets/svg/location.svg";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import NavBarOption from "./NavBarOption";
import { ACTIVITY_DATA } from "./navData/activityType";
// import { chunkArray } from "../../utils/utils";

function NavBar() {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState({});

  const handleShow = () => {
    setIsShow(!isShow);
    setData(ACTIVITY_DATA);
  };
  return (
    <>
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
                  onClick={handleShow}
                >
                  <span className="tw-mr-2">Activity Type</span>
                  <span className="tw-pt-1">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-mr-8 tw-flex tw-items-center"
                  onClick={handleShow}
                >
                  <span className="tw-mr-2">Event Type</span>
                  <span className="tw-pt-1">
                    <DownArrow />
                  </span>
                </button>
              </li>
              <li>
                <button
                  className="tw-flex tw-items-center"
                  onClick={handleShow}
                >
                  <span className="tw-mr-2">Retreat Destination</span>
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
                <span>Location</span>
              </li>
              <li className="tw-mr-6 tw-flex tw-items-center">
                <span className="tw-mr-2">
                  <Telephone />
                </span>
                <span>1800-1200-1400</span>
              </li>
              <li className="tw-mr-10">BLOG</li>
              <li className="tw-mr-3">LOGIN</li>
            </ul>
            <button className="tw-bg-secondary-color tw-px-6 tw-py-3 tw-rounded-md">
              GET STARTED
            </button>
          </div>
        </Container>
      </div>
      <Container>
        <NavBarOption isShow={isShow} data={data} />
      </Container>
    </>
  );
}

export default NavBar;
