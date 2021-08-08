import location from "../../assets/svg/logistics.svg";
import BookingTimeLineY from "./BookingTimeLineY";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";

const ViewMoreSummary = () => {
  return (
    <section>
      <ViewMoreSectionTitleWithImg image={location} header="Summary" />
      <BookingTimeLineY />
    </section>
  );
};

export default ViewMoreSummary;
