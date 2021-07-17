import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function NavBarOption({ isShow = false, data, toggleNavBar }) {
  const { path, data: pageInfo } = data;
  const { title, options } = pageInfo;
  let { url } = useRouteMatch();

  const handleLinkClick = (label) => {
    console.log(`${url}${path}/${label}`);
    toggleNavBar();
  };
  return (
    <div className={`${isShow ? "tw-block" : "tw-hidden"} tw-py-6`}>
      <div>
        <h3 className="tw-text-h4 tw-font-medium">{title}</h3>
      </div>
      <div className="tw-flex tw-mt-2">
        {options.map((option, index) => (
          <ul key={index} className="tw-mr-24">
            {option.map((label, i) => (
              <li
                key={i}
                className="tw-p-1 tw-cursor-pointer"
                onClick={() => handleLinkClick(label)}
              >
                <Link to={`${url}${path}/${label}`}>{label}</Link>
              </li>
            ))}
            {options.length - 1 === index && (
              <li
                key={"viewAll"}
                className="tw-p-1 tw-cursor-pointer tw-text-blue-600 tw-underline"
              >
                View All
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default NavBarOption;
