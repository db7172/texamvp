import React, { useContext, useState } from "react";
import "./leftPane.css";
import { Link } from "react-router-dom";
// import { AuthContext } from '../../Auth';

const LeftPane = ({ mobileNav, setMobile, mob }) => {
  const desktopSide = {
    transition: "all 0.5s",
  };

  const [filter, setFilter] = useState(0);

  return (
    <div className="left-pane" style={desktopSide}>
      <div className="company-logo-lp">
        <h3>Texatrove Admin</h3>
      </div>
      <ul className="side-nav">
        <Link to="/admin/dashboard/homepage">
          <li
            onClick={() => {
              setFilter(0);
            }}
            style={{ backgroundColor: filter === 0 ? "#2e538a" : null }}
          >
            <span>
              <img alt=""></img>
            </span>
            <p>Home Page</p>
          </li>
        </Link>
        <Link to="/admin/dashboard/activity">
          <li
            onClick={() => {
              setFilter(1);
            }}
            style={{ backgroundColor: filter === 1 ? "#2e538a" : null }}
          >
            <span>
              <img alt=""></img>
            </span>
            <p>Activity</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LeftPane;
