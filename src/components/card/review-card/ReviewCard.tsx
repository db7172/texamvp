import { Divider, Modal, Rate } from "antd";
import { useState } from "react";

type ReviewCardType = {
  img: string;
  name: string;
  comment: string;
  place: string;
  date: string;
  star: number;
};

const ReviewCard = ({
  img,
  name,
  comment,
  place,
  date,
  star,
}: ReviewCardType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="tw-shadow-card tw-rounded-lg tw-p-5">
      <div className="tw-flex tw-gap-4 tw-items-center tw-mb-5">
        <div className="tw-w-12 tw-h-12">
          <img className="tw-w-full tw-rounded-full" src={img} alt="profile" />
        </div>
        <p className="tw-text-base tw-font-medium">{name}</p>
        <Rate className="tw-text-base" value={star} />
      </div>
      <p className="tw-text-secondary-color tw-text-xs tw-font-lato tw-w-11/12 tw-mb-5 tw-truncate">
        {comment}
      </p>
      <Divider />
      <div className="tw-flex tw-justify-between">
        <p className="tw-text-secondary-color tw-text-xs tw-font-medium">{`Visited ${place} on ${date}`}</p>
        <p
          className="tw-underline tw-text-blue-500 tw-text-xs tw-cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          View Review
        </p>
      </div>
      <Modal
        visible={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className="tw-flex tw-gap-4 tw-items-center tw-mb-5">
          <div className="tw-w-12 tw-h-12">
            <img
              className="tw-w-full tw-rounded-full"
              src={img}
              alt="profile"
            />
          </div>
          <p className="tw-text-base tw-font-medium">{name}</p>
          <Rate className="tw-text-base" value={star} />
        </div>
        <p className="tw-text-secondary-color tw-text-xs tw-font-lato tw-w-11/12 tw-mb-5">
          {comment}
        </p>
      </Modal>
    </div>
  );
};

export default ReviewCard;
