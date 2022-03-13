import React, { useContext, useState } from "react";
import "./leftPane.css";
import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from '../../Auth';

const leftPannelData = [
  {
    path: "/admin/dashboard/homepage",
    key: "homepage",
    title: "Home Page",
  },
  {
    path: "/admin/dashboard/activity",
    key: "activity",
    title: "Activity",
  },
  {
    path: "/admin/dashboard/event",
    key: "event",
    title: "Event",
  },
  {
    path: "/admin/dashboard/retreat",
    key: "retreat",
    title: "Retreat",
  },
  {
    path: "/admin/dashboard/workcation",
    key: "workcation",
    title: "Workcation",
  },
  {
    path: "/admin/dashboard/destination",
    key: "destination",
    title: "Destination",
  },
  {
    path: "/admin/dashboard/popularservice",
    key: "popularservice",
    title: "Popular Service",
  },
  {
    path: "/admin/dashboard/serviceofthemonth",
    key: "serviceofthemonth",
    title: "Service of the Month",
  },
  {
    path: "/admin/dashboard/vendor",
    key: "vendor",
    title: "Vendor",
  },
  {
    path: "/admin/dashboard/earning",
    key: "earning",
    title: "Earning",
  },
  {
    path: "/admin/dashboard/relaunchservice",
    key: "relaunchservice",
    title: "Relaunch Service",
  },
  {
    path: "/admin/dashboard/customer",
    key: "customer",
    title: "Daily User",
  },
  {
    path: "/admin/dashboard/servicecustomer",
    key: "servicecustomer",
    title: "Service User",
  },
  {
    path: "/admin/dashboard/requests",
    key: "requests",
    title: "Call Requests",
  },
];

const LeftPane = ({ mobileNav, setMobile, mob }) => {
  const desktopSide = {
    transition: "all 0.5s",
  };

  const location = useLocation();
  const pathnameArr = location.pathname.split("/");
  const filterKey =
    pathnameArr[pathnameArr.length - 1] || leftPannelData[0].key;

  const [filter, setFilter] = useState(filterKey);

  return (
    <div className="left-pane" style={desktopSide}>
      <ul className="side-nav">
        {leftPannelData.map((data) => (
          <Link to={data.path} key={data.key}>
            <li
              onClick={() => {
                setFilter(data.key);
              }}
              style={{
                backgroundColor: filter === data.key ? "#2e538a" : null,
              }}
            >
              <span>
                <img alt=""></img>
              </span>
              <p>{data.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LeftPane;
