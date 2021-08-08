type Props = {
  image: string;
  header: string;
};

const ViewMoreSectionTitleWithImg = ({ image, header }: Props) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-4 tw-py-8 tw-border-t tw-border-b">
      <div className="tw-p-6 tw-rounded-full tw-bg-gray-background">
        <img src={image} alt="Summary" />
      </div>
      <h4 className="tw-section-title">{header}</h4>
    </div>
  );
};

export default ViewMoreSectionTitleWithImg;
