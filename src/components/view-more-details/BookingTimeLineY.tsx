import { Timeline } from "antd";

const tripTimeline = [
  {
    day: "Day 1 : 12 May’ 2020 ( Monday )  →  Pick up Lonavala to Longhard",
    activity: [
      {
        time: "10:45 hrs",
        activity: "Arrive at Bagdgora",
      },
      {
        time: "10:45 hrs",
        activity: "Departure for Psling",
      },
      {
        time: "10:45 hrs",
        activity: "Arrive at Psling and proceed for late lunch",
      },
      {
        time: "10:45 hrs",
        activity: "Proceed for Biometric",
      },
      {
        time: "10:45 hrs",
        activity: "Proceed towards Thimphu",
      },
      {
        time: "10:45 hrs",
        activity: "Arrive at Thimphu & Check into Hotel",
      },
    ],
  },
  {
    day: "Day 2 : 13 May’ 2020 ( Tuesday )  →  Pick up Longhard to Lonavala",
    activity: [
      {
        time: "10:45 hrs",
        activity: "Arrive at Bagdgora",
      },
      {
        time: "10:45 hrs",
        activity: "Departure for Psling",
      },
      {
        time: "10:45 hrs",
        activity: "Arrive at Psling and proceed for late lunch",
      },
      {
        time: "10:45 hrs",
        activity: "Proceed for Biometric",
      },
      {
        time: "10:45 hrs",
        activity: "Proceed towards Thimphu",
      },
      {
        time: "10:45 hrs",
        activity: "Arrive at Thimphu & Check into Hotel",
      },
    ],
  },
];

const BookingTimeLineY = (props: any) => {
  console.log(props);
  if (Array.isArray(props.itinerary)) {
    return (
      <div className="tw-pt-8 time-line-y">
        {Object.values(props.itinerary).map((details: any, i) => (
          <div className="tw-pt-1">
            <h4 className="tw-font-bold">{details.title}</h4>
            <Timeline mode="left" className="tw-mt-5">
              {details.itineraryDetails.map((d: any, i: any) => (
                <Timeline.Item label={d.time}>{d.activity}</Timeline.Item>
              ))}
            </Timeline>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="tw-pt-8 time-line-y">
        <div className="tw-pt-1">
          <h4 className="tw-font-bold">{props.itinerary.title}</h4>
          <Timeline mode="left" className="tw-mt-5">
            {/* {details.itineraryDetails.map((d: any, i: any) => ( */}
            <Timeline.Item label={props.itinerary.date}>
              {props.itinerary.itineraryDetails}
            </Timeline.Item>
            {/* ))} */}
          </Timeline>
        </div>
      </div>
    );
  }
};

export default BookingTimeLineY;
