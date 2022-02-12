import { Button, Divider } from "antd";
import { indCurrency } from "../../utils/utils";
import clock from "../../assets/svg/clock.svg";
import user from "../../assets/svg/user.svg";
import bed from "../../assets/svg/bed.svg";
import { Link } from "react-router-dom";

const mockSummery = [
  {
    img: clock,
    description: "Mon, 11 Jan  -  Sat, 16 Jan",
  },
  {
    img: user,
    description: "Guest - 2 Adults 1 Child",
  },
  {
    img: bed,
    description: "Rooms - 2",
  },
];

const ViewMoreWorkcationBookingCard = (props: any) => {
  console.log(props.checkinAndCheckOutTime.chcekOut);

  return (
    <div className="tw-relative">
      <p className="tw-px-5 tw-py-1 tw-bg-lite-red tw-text-dark-red tw-absolute tw-right-0 tw-rounded-l-full">
        Hurry! Last room at this price
      </p>
      <div className="tw-shadow-card tw-px-5 tw-pt-12 tw-pb-5 tw-rounded-lg">
        <p>
          <span className="tw-text-yellow-color tw-text-xl tw-mr-3">
            {indCurrency(props.accomodation.data.room1.paymentRatePerPerson)}
          </span>
          <span className="tw-text-secondary-color tw-line-through">
            {indCurrency(29000)}
          </span>
        </p>
        <p className="tw-text-xs tw-text-secondary-color tw-font-lato">
          Inclusive of all taxes
        </p>
        <Divider />

        <div className="tw-flex tw-items-center tw-mb-2 tw-gap-2">
          <div className="tw-w-4 tw-h-4">
            <img src={mockSummery[0].img} alt="clock" />
          </div>
          <p className="tw-text-secondary-color tw-font-lato tw-text-base">
            {props.checkinAndCheckOutTime.checkIn} -{" "}
            {props.checkinAndCheckOutTime.chcekOut}
          </p>
        </div>
        <div className="tw-flex tw-items-center tw-mb-2 tw-gap-2">
          <div className="tw-w-4 tw-h-4">
            <img src={mockSummery[1].img} alt="clock" />
          </div>
          <p className="tw-text-secondary-color tw-font-lato tw-text-base">
            Guest -
          </p>
        </div>
        <div className="tw-flex tw-items-center tw-mb-2 tw-gap-2">
          <div className="tw-w-4 tw-h-4">
            <img src={mockSummery[2].img} alt="clock" />
          </div>
          <p className="tw-text-secondary-color tw-font-lato tw-text-base">
            Rooms - {Object.values(props.accomodation.data).length}
          </p>
        </div>

        <Link to="#">
          <Button type="default" className="tw-texa-button tw-w-full">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewMoreWorkcationBookingCard;
