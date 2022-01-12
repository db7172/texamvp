import { isString } from "lodash";
import InformationSection from "./InformationSection";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";

type InfoSection = {
  header: string;
  content: string[];
};

type Props = {
  header: string;
  image: string;
  data: string | InfoSection | InfoSection[];
};

const ViewMoreOtherInformation = ({ header, image, data }: Props) => {
  return (
    <section>
      <ViewMoreSectionTitleWithImg header={header} image={image} />
      <div className="tw-pt-5">
        {isString(data) ? (
          <p className="tw-text-secondary-color tw-font-lato">{data}</p>
        ) : Array.isArray(data) ? (
          data.map((d, i) => (
            <InformationSection header={d.header} content={d.content} />
          ))
        ) : (
          <InformationSection header={data.header} content={data.content} />
        )}
      </div>
    </section>
  );
};

export default ViewMoreOtherInformation;
