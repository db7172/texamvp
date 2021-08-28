import { Button } from "antd";
import ActivityTrip from "../../../assets/svg/influencer/ActivityTrip.svg";

function Deshboardopshan() {
  return (
    <div className="tw-bg-white tw-shadow-md tw-py-7 tw-px-5 tw-rounded-xl">
      <div className="tw-w-28 tw-m-auto tw-bg-gray-background tw-h-28 tw-rounded-full tw-flex-center">
        <img src={ActivityTrip} alt="" className=" tw-w-10" />
      </div>
      <div className="tw-mt-5">
        <h4 className="tw-font-semibold tw-text-lg tw-mb-3">Activity / Trip</h4>
        <p className="tw-text-secondary-color">
          Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit.
          Elit varius sed facilis
        </p>
      </div>
      <Button
        type="default"
        className="tw-bg-secondary-color hover:tw-bg-secondary-color tw-w-full tw-text-base tw-font-medium"
      >
        Create Activity +
      </Button>
    </div>
  );
}

export default Deshboardopshan;
