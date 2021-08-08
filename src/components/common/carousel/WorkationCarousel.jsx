import { Carousel } from "antd";
import React from "react";
import { defaultSettings } from "../../../utils/utils";
import WorkationCard from "../../card/workation-card/WorkationCard";
import Title from "../title/Title";

const WorkationCarousel = ({ title, data, setting, path, description }) => {
  const settings = {
    ...defaultSettings,
    ...setting,
  };

  return (
    <div>
      <Title title={title} path={path} description={description} />
      <div className="tw-mt-3 menual-carousal">
        {Boolean(data.length) ? (
          <Carousel autoplay {...settings}>
            {data?.map((d, i) => (
              <WorkationCard {...d} key={i} />
            ))}
          </Carousel>
        ) : (
          <div className="tw-flex tw-justify-center tw-items-center tw-h-96">
            <h1 className="tw-text-h1 tw-text-secondary-color">
              No Workation is available.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkationCarousel;
