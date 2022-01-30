import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { defaultSettings } from "../../../utils/utils";
import WorkationCard from "../../card/workation-card/WorkationCard";
import Title from "../title/Title";
import firebase from "../../../firebase";

const WorkationCarousel = ({
  title,
  data,
  setting,
  path,
  description,
  hideViewAll = false,
}) => {
  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const [workations, setWorkations] = useState([]);

  useEffect(() => {
    let dataArr = [];
    data?.map((data) => {
      firebase
        .firestore()
        .collection("workation")
        .doc(data)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dataArr.push(doc.data());
          }
        });
    });
    setWorkations(dataArr);
  }, [data]);

  return (
    <div>
      <Title
        hideViewAll={hideViewAll}
        title={title}
        path={path}
        description={description}
      />
      <div className="tw-mt-3 menual-carousal">
        {data ? (
          <Carousel autoplay {...settings}>
            {workations?.map((d, i) => (
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
