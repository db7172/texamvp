import location from "../../assets/svg/logistics.svg";
import BookingTimeLineY from "./BookingTimeLineY";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";

const ViewMoreSummary = (props: any) => {
  return (
    <section>
      <ViewMoreSectionTitleWithImg image={location} header="Summary" />
      <BookingTimeLineY {...props} />
    </section>
  );
};

export default ViewMoreSummary;
