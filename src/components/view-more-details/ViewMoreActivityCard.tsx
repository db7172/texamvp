import moment from "moment";
import { INCLUSTION_IMG } from "../../pages/view-more/data.mock";
import { indCurrency } from "../../utils/utils";

// do not remove this, below is the classnames for rounded img of inclusion card
const classNamesInclustionImg = {
  div: "tw-p-2 tw-rounded-full tw-bg-gray-background",
  img: "tw-h-4 tw-w-4",
};

const ViewMoreActivityCard = (props: any) => {
  const data = props;

  var startDate = moment(props.departureDate[0].dateRange.start, "DD.MM.YYYY");
  var endDate = moment(props.departureDate[0].dateRange.end, "DD.MM.YYYY");
  var numDays = endDate.diff(startDate, "days");

  return (
    <main>
      <p className="tw-text-secondary-color">
        Starting from{" "}
        <span className="tw-mx-1 tw-text-yellow-color tw-text-lg tw-font-bold">
          {indCurrency(data.payment)}
        </span>{" "}
        Per Person
      </p>
      <p className="tw-mt-3">
        <span className="tw-text-secondary-color tw-mr-2">Start From :</span>{" "}
        <span className="tw-font-medium">{data.departureCity[0]}</span>
      </p>
      <p className="tw-mt-3">
        <span className="tw-text-secondary-color tw-mr-2">Duration :</span>{" "}
        <span className="tw-font-medium">
          {props.departureDate
            ? `${numDays} Days & ${numDays - 1} Nights`
            : "One Day"}
        </span>
      </p>
      <p className="tw-mt-3">
        <span className="tw-text-secondary-color tw-mr-2">Activity Type :</span>{" "}
        <span className="tw-font-medium">
          {data.sailentFeatures.activityType}
        </span>
      </p>
      <p className="tw-mt-3">
        <span className="tw-text-secondary-color tw-mr-2">
          Activity Level :
        </span>{" "}
        <span className="tw-font-medium">
          {data.sailentFeatures.activityLevel}
        </span>
      </p>
      <p className="tw-mt-3">
        <span className="tw-text-secondary-color tw-mr-2">Activity By :</span>{" "}
        <span className="tw-font-medium tw-text-blue-500 tw-underline">
          {props.venderName}
        </span>
      </p>
      <div className="tw-mt-3 tw-flex tw-items-center">
        <p className="tw-text-secondary-color tw-mr-2">Includes :</p>
        <div className="tw-flex tw-flex-wrap tw-gap-3">
          <div className={classNamesInclustionImg.div}>
            <img
              className={classNamesInclustionImg.img}
              src={INCLUSTION_IMG.hotel}
              alt="hotel"
            />
          </div>
          <div className={classNamesInclustionImg.div}>
            <img
              className={classNamesInclustionImg.img}
              src={INCLUSTION_IMG.plane}
              alt="plane"
            />
          </div>
          <div className={classNamesInclustionImg.div}>
            <img
              className={classNamesInclustionImg.img}
              src={INCLUSTION_IMG.taxi}
              alt="taxi"
            />
          </div>
          <div className={classNamesInclustionImg.div}>
            <img
              className={classNamesInclustionImg.img}
              src={INCLUSTION_IMG.photo}
              alt="camera"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewMoreActivityCard;
