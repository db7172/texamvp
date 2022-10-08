import location from "../../assets/svg/logistics.svg";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";

// const mockData = [
//   {
//     title: "Day 1 : 17 May’ 2020 ( Monday )",
//     description:
//       "Pulvinar tincidunt id tellus, proin consectetur sapien nec. Tempus vitae donec phasellus urna. Ipsum elementum faucibus et ac urna. Porttitor suspendisse nisl nisl eget in tristique orci posuere. Sed felis in duis magna ut. Ornare quis duis accumsan non ut. Massa consectetur ut duis id tempor, semper. Vulputate adipiscing fermentum bibendum facilisis ac, neque. Amet nisl, quis semper massa quis lectus et tristique. Pulvinar nulla eget quis consequat elit vulputate facilisis nunc egestas. Placerat nulla egestas fermentum nibh massa nisi magna. Nunc arcu ipsum lectus volutpat rhoncus non lacus, rhoncus eu. Neque at arcu lectus pulvinar pretium massa lacus facilisis convallis. A venenatis neque adipiscing lectus venenatis elementum eget vel cras. Pellentesque justo, morbi placerat nulla arcu aenean. Volutpat purus congue lectus viverra pharetra, elit enim. Et sed porta magna in eu id. Platea quis elementum bibendum rhoncus magna sit viverra. Vivamus tincidunt ut massa ut enim vitae mattis. Consectetur dui proin nulla sit.",
//   },
//   {
//     title: "Day 2 : 18 May’ 2020 ( Tuesday )",
//     description:
//       "Pulvinar tincidunt id tellus, proin consectetur sapien nec. Tempus vitae donec phasellus urna. Ipsum elementum faucibus et ac urna. Porttitor suspendisse nisl nisl eget in tristique orci posuere. Sed felis in duis magna ut. Ornare quis duis accumsan non ut. Massa consectetur ut duis id tempor, semper. Vulputate adipiscing fermentum bibendum facilisis ac, neque. Amet nisl, quis semper massa quis lectus et tristique. Pulvinar nulla eget quis consequat elit vulputate facilisis nunc egestas. Placerat nulla egestas fermentum nibh massa nisi magna. Nunc arcu ipsum lectus volutpat rhoncus non lacus, rhoncus eu. Neque at arcu lectus pulvinar pretium massa lacus facilisis convallis. A venenatis neque adipiscing lectus venenatis elementum eget vel cras. Pellentesque justo, morbi placerat nulla arcu aenean. Volutpat purus congue lectus viverra pharetra, elit enim. Et sed porta magna in eu id. Platea quis elementum bibendum rhoncus magna sit viverra. Vivamus tincidunt ut massa ut enim vitae mattis. Consectetur dui proin nulla sit.",
//   },
// ];

const ViewMoreEventSummary = (props: any) => {
  if (props.summary) {
    return (
      <section>
        <ViewMoreSectionTitleWithImg image={location} header="Summary" />
        <div>
          {Object.values(props.summary).map((d: any, i: any) => (
            <div className="tw-my-5" key={i}>
              <h4 className="tw-text-base tw-font-medium">
                {d.date}: {d.title}
              </h4>
              <p className="tw-mt-3 tw-text-secondary-color">
                {d.itineraryDetails}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <ViewMoreSectionTitleWithImg image={location} header="Summary" />
        <div>
          <div className="tw-my-5">
            <h4 className="tw-text-base tw-font-medium">
              {`${props.sailentFeatures.startDate} | ${props.sailentFeatures.startTime} `}
              : {props.eventName}
            </h4>
            <p className="tw-mt-3 tw-text-secondary-color">
              {props.eventDescription}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default ViewMoreEventSummary;
