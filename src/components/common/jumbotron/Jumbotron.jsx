import React from "react";
import classNames from "classnames";
import { indCurrency } from "../../../utils/utils";
import star from "../../../assets/svg/star.svg";
import { startCase } from "lodash";
import { DoubleRightOutlined } from "@ant-design/icons";

const Jumbotron = ({
  className,
  image,
  title,
  description,
  startingPrice,
  ratting,
  review,
  path = "#",
}) => {
  return (
    <>
      <div className={classNames("tw-w-full tw-h-96 tw-relative", className)}>
        {/* <img className="tw-w-full tw-h-auto" src={image} alt="" /> */}
        <img
          className="tw-h-full tw-w-full tw-object-cover"
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
          alt=""
        />
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-20 tw-z-10 tw-flex tw-items-center tw-flex-col tw-justify-evenly tw-text-white">
          <div className="tw-text-center">
            <h3 className="tw-main-title-other-page tw-text-white">
              {startCase(title)}
            </h3>
            <p className="tw-subtitle-other-page lg:tw-mt-4 tw-mt-0">
              {description}
            </p>
            <p className="tw-subtitle-other-page tw-mt-14 tw-font-lato tw-animate-bounce">
              <a
                className="hover:tw-text-white tw-flex tw-items-center tw-justify-center"
                href={path}
              >
                <DoubleRightOutlined rotate={90} />
                <span className="tw-mx-2">Scroll down to discover</span>
                <DoubleRightOutlined rotate={90} />
              </a>
            </p>
          </div>
          <div className="tw-max-h-16" />
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
