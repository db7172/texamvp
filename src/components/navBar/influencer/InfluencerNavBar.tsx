import { Button } from "antd";
import { upperCase } from "lodash";
import { Link, useLocation } from "react-router-dom";
import LogedIn from "./LogedIn";

const InfluencerNavBar = () => {
  let location = useLocation();

  return (
    <div className="tw-bg-white tw-shadow-nav-bar tw-flex tw-justify-between tw-items-center tw-py-4 tw-text-primary-color tw-px-7">
      <div>
        <Link to="/influencer">
          <h1 className="tw-font-bold tw-text-4xl">Texa Trove</h1>
        </Link>
      </div>
      <div>
        {location.pathname === "/influencer" && (
          <Link to="/influencer/signup">
            <Button className="tw-texa-button tw-m-0">
              {upperCase("GET STARTED")}
            </Button>
          </Link>
        )}
        {location.pathname !== "/influencer" &&
          location.pathname !== "/influencer/signup" && <LogedIn />}
      </div>
    </div>
  );
};

export default InfluencerNavBar;
