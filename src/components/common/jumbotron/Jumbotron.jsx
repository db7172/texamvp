import classNames from "classnames";
import { indCurrency } from "../../../utils/utils";
import { startCase } from "lodash";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import firebase from "../../../firebase";
import { useEffect, useState } from "react";

const Jumbotron = ({
  className,
  image,
  title,
  description,
  startingPrice,
  ratting,
  review,
  type,
  destinationName,
  path = "#",
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if (destinationName) {
      let docName = destinationName.toLowerCase();
      firebase
        .firestore()
        .collection("destinations")
        .doc(docName)
        .get()
        .then((doc) => {
          setData(doc.data());
        });
    } else {
      firebase
        .firestore()
        .collection("categories")
        .doc(type)
        .get()
        .then((doc) => {
          setData(doc.data());
        });
    }
  });

  return (
    <>
      <div className={classNames("tw-w-full tw-h-96 tw-relative", className)}>
        {/* <img className="tw-w-full tw-h-auto" src={image} alt="" /> */}
        <img
          className="tw-h-full tw-w-full tw-object-cover"
          src={
            data?.image || data.banner
              ? data.banner || data.image
              : "https://images.unsplash.com/photo-1501555088652-021faa106b9b"
          }
          // src={
          //   data?.image
          //     ? data.image || data.banner
          //     : "https://images.unsplash.com/photo-1501555088652-021faa106b9b"
          // }
          alt=""
        />
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-20 tw-z-10 tw-flex tw-items-center tw-flex-col tw-justify-evenly tw-text-white">
          <div className="tw-text-center">
            <h3 className="tw-main-title-other-page tw-text-white">
              {startCase(data.name)}
            </h3>
            <p className="tw-subtitle-other-page lg:tw-mt-4 tw-mt-0">
              {data.title || data.bannerLine}
            </p>
            <p className="tw-text-lg tw-mt-14 tw-font-lato tw-animate-bounce">
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
      <div className="tw-relative tw-z-20 md:tw-w-5/6 lg:tw-px-9 tw-px-3 lg:tw-py-12 tw-py-6 tw-mx-auto md:tw-flex tw-bg-white xl:tw-text-lg tw-text-base tw-items-center tw-shadow-card lg:tw--top-16 md:tw--top-12 tw-rounded-xl">
        <div className="md:tw-w-6/12">
          <p className="tw-text-center tw-font-medium">
            Starting from{" "}
            <span className="tw-price tw-text-2xl tw-mx-1">
              {indCurrency(data.startingPrice)}
            </span>{" "}
            Per Person on twin sharing
          </p>
        </div>
        <div className="md:tw-w-6/12 tw-flex tw-justify-center">
          <div className="tw-flex tw-gap-2 tw-flex-row tw-items-center">
            {/* <div className="tw-flex">
              {Array(ratting)
                .fill(null)
                .map((_, i) => (
                  <img key={i} className="tw-w-6 tw-mr-2" src={star} alt="" />
                ))}
            </div> */}
            <Rate disabled defaultValue={ratting || 5} />
            <p className="tw-mt-1 tw-font-medium lg:tw-mt-0">
              ( Based on {review} )
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
