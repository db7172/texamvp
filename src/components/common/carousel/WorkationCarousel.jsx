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
  const [loading, setLoading] = useState(false);

  const getData = async (type) => {
    const snapshot = await firebase.firestore().collection(type).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  };

  useEffect(() => {
    const setData = async () => {
        const data = await getData("workation");
        setWorkations(data);
        setLoading(false);
      };
    setLoading(true);
    setData();
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <Title
            hideViewAll={hideViewAll}
            title={title}
            path={path}
            description={description}
          />
          <div className="tw-mt-3 menual-carousal auto-width-carousal">
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
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default WorkationCarousel;
