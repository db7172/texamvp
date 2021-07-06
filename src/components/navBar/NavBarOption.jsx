import React from "react";

function NavBarOption({ isShow = false, data }) {
  const { title, options = [] } = data;
  return (
    <div className={`${isShow ? "tw-block" : "tw-hidden"} tw-py-6`}>
      <div>
        <h3 className="tw-text-h4 tw-font-medium">{title}</h3>
      </div>
      <div className="tw-flex tw-mt-2">
        {options.map((option, index) => (
          <ul key={index} className="tw-mr-24">
            {option.map((label, i) => (
              <li key={i} className="tw-p-1 tw-cursor-pointer">
                {label}
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
