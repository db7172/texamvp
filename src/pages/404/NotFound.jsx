import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-44">
      <h1 className="tw-font-semibold tw-text-4xl">
        Error: Code 404 Page Not Found
      </h1>
      <Link to="/">
        <button className="tw-bg-secondary-color tw-font-medium tw-px-6 tw-py-3 tw-mt-12 tw-rounded-md">
          Let's go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
