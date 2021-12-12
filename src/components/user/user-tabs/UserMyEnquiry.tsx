import { Modal, Steps } from "antd";
import { isUndefined } from "lodash";
import React, { useState } from "react";
import EnquiryCard from "./my-enquiries/EnquiryCard";
import { INCLUDE_EXCLUDE, UPCOMING_TRIP_DATA } from "./userTabsConstants";

const { Step } = Steps;

const UserMyEnquiry = () => {
  const [activeId, setActiveId] = useState<number | undefined>();
  const handleViewBookingClick = (id: number) => {
    setActiveId(id);
  };

  const getStatus = (id: number) => {
    switch (id) {
      case 1:
        return "Recived";

      case 2:
        return "Processing";

      case 3:
        return "Assigned";

      case 4:
        return "Completed";

      default:
        return "Error";
    }
  };

  return (
    <div>
      <p className="tw-font-bold tw-text-3xl tw-mb-14">My Enquiries</p>
      <div>
        {UPCOMING_TRIP_DATA.map((value, id) => (
          <EnquiryCard
            key={id}
            id={id}
            title={value.title}
            description={value.duration}
            icon={value.icon}
            bookingDate={value.bookingDate}
            bookingId={value.bookingId}
            paidAmt={value.bookingAmt}
            type={value.type}
            status={getStatus(id)}
            handleButtonClick={handleViewBookingClick}
          />
        ))}
      </div>
      <Modal
        visible={!isUndefined(activeId)}
        width={600}
        onCancel={() => setActiveId(undefined)}
        footer={null}
      >
        {!isUndefined(activeId) && (
          <>
            <Steps current={activeId - 1} className="tw-my-10" progressDot>
              <Step title="Recieved" />
              <Step
                title="Internal Team Workinng
                on the query"
              />
              <Step
                title="Query Assigned to
                the vendor"
              />
              <Step title="Completed" />
            </Steps>

            <div className="tw-pl-7">
              <ul className="tw-list-disc tw-list-outside">
                <li className="tw-text-secondary-color">
                  INR.3300 has been proceed in HDFC bank ******3137 It takes 3
                  working days for refund to reflect in HDFC Bank account.
                </li>
                {INCLUDE_EXCLUDE[0].details.map((s, i) => (
                  <li key={i} className="tw-text-secondary-color">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default UserMyEnquiry;
