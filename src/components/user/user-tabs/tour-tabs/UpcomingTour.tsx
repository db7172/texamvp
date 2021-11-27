import { uniqueId } from "lodash";
import TripDetailCard from "../../card/TripDetailCard";
import { UPCOMING_TRIP_DATA } from "../userTabsConstants";

const UpcomingTour = () => {
  return (
    <div>
      {UPCOMING_TRIP_DATA.map((value) => (
        <TripDetailCard
          key={uniqueId()}
          title={value.title}
          description={value.duration}
          icon={value.icon}
          bookingDate={value.bookingDate}
          bookingId={value.bookingId}
          paidAmt={value.bookingAmt}
          type={value.type}
        />
      ))}
    </div>
  );
};

export default UpcomingTour;
