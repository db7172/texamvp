import { Steps } from "antd";
import moment from "moment";

const stepsData = [
  {
    title: "Phuentsholing",
    description: "( 1 Day )",
  },
  {
    title: "Thimpu",
    description: "( 1 Day )",
  },
  {
    title: "Paro",
    description: "( 2 Day )",
  },
  {
    title: "Phuentsholing",
    description: "( 1 Day )",
  },
  {
    title: "Phuentsholing",
    description: "( 1 Day )",
  },
];

const BookingTimeLineX = (props: any) => {
  const { Step } = Steps;
  console.log(props);

  var startDate = moment(props.departureDate[0].dateRange.start, "DD.MM.YYYY");
  var endDate = moment(props.departureDate[0].dateRange.end, "DD.MM.YYYY");
  var numDays = endDate.diff(startDate, "days");

  Object.values(props.itinerary).map((entry) => {
    return console.log(entry);
  });

  if (Array.isArray(props.itinerary)) {
    return (
      <div>
        <h3 className="tw-base-title ">
          Booking for {props.activityName} :{" "}
          {props.departureDate
            ? `${numDays} Days & ${numDays - 1} Nights`
            : "One Day"}
        </h3>
        <div className="tw-mt-2 tw-py-5 tw-overflow-x-auto time-line-x">
          <Steps
            current={props.itinerary.Day1.itineraryDetails.length}
            progressDot
            size="small"
          >
            {Object.values(props.itinerary).map((d: any, i: any) => (
              <Step
                title={d.title}
                description={d.itineraryDetails[0].activity}
                key={i}
              />
            ))}
          </Steps>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="tw-base-title ">
          Booking for {props.activityName} :{" "}
          {props.departureDate
            ? `${numDays} Days & ${numDays - 1} Nights`
            : "One Day"}
        </h3>
        <div className="tw-mt-2 tw-py-5 tw-overflow-x-auto time-line-x">
          <Steps
            current={props.itinerary.itineraryDetails}
            progressDot
            size="small"
          >
            <Step
              title={props.itinerary.title}
              // description={props.itinerary.itineraryDetails.activity}
            />
          </Steps>
        </div>
      </div>
    );
  }
};

export default BookingTimeLineX;
