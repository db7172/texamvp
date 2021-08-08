import { Steps } from "antd";

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

const BookingTimeLineX = () => {
  const { Step } = Steps;
  return (
    <div>
      <h3 className="tw-base-title ">Booking for Bhutan : 6Days & 5Nights</h3>
      <div className="tw-mt-2 tw-py-5 tw-overflow-x-auto time-line-x">
        <Steps current={stepsData.length} progressDot size="small">
          {stepsData.map((d, i) => (
            <Step title={d.title} description={d.description} key={i} />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default BookingTimeLineX;
