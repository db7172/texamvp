import React from "react";
import classNames from "classnames";
import { indCurrency } from "../../../utils/utils";
import star from "../../../assets/svg/star.svg";
import { startCase } from "lodash";

const Jumbotron = ({
  className,
  image,
  title,
  description,
  startingPrice,
  ratting,
  review,
}) => {
  return (
    <>
      <div className={classNames("tw-w-full tw-h-auto tw-relative", className)}>
        {/* <img className="tw-w-full tw-h-auto" src={image} alt="" /> */}
        <img
          className="tw-w-full tw-h-auto"
          src="https://img.traveltriangle.com/attachments/pictures/847421/original/Kerala-honeymoon-packages-g.jpg"
          alt=""
        />
        <div className="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-items-center tw-flex-col tw-justify-evenly tw-text-white">
          <div className="tw-text-center">
            <h3 className="tw-title-main tw-text-white">{startCase(title)}</h3>
            <p className="tw-subtitle-secondary lg:tw-mt-4 tw-mt-0">
              {description}
            </p>
          </div>
          <div>
            <p className="md:tw-text-xl tw-text-base tw-font-lato tw-font-medium">
              Scroll down to descover
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative tw-z-20 md:tw-w-5/6 lg:tw-px-9 tw-px-3 lg:tw-py-12 tw-py-6 tw-mx-auto md:tw-flex tw-bg-white xl:tw-text-lg tw-text-base tw-items-center tw-shadow-md lg:tw--top-16 md:tw--top-12 tw-rounded-xl">
        <div className="md:tw-w-6/12">
          <p className="tw-text-center tw-font-medium">
            Starting from{" "}
            <span className="tw-price tw-text-2xl tw-mx-1">
              {indCurrency(startingPrice)}
            </span>{" "}
            Per Person on twin sharing
          </p>
        </div>
        <div className="md:tw-w-6/12 tw-flex tw-justify-center">
          <div className="tw-flex md:tw-flex-col lg:tw-flex-row tw-flex-row tw-items-center">
            <div className="tw-flex">
              {Array(ratting)
                .fill(null)
                .map((_, i) => (
                  <img key={i} className="tw-w-6 tw-mr-2" src={star} alt="" />
                ))}
            </div>
            <p className="tw-mt-1 tw-font-medium lg:tw-mt-0">( {review} )</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
