import { Button, Col, Row } from "antd";
import taxi from "../../assets/svg/taxi.svg";
import user from "../../assets/svg/user.svg";
import portfolio from "../../assets/png/portfolio.png";
import place from "../../assets/png/place.png";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import InformationSection from "./InformationSection";

const mockData = [
  {
    header: "Day 1 : 15 Jul’ 2020 - 16 Jul’ 2020",
    passenger: "Upto 6 Passengers",
    luggage: "Small Bag x 2 or Medium Bag x1",
    vehical: "Car Type : Sedan",
    travelling: {
      from: "Phuentsholing",
      to: "Thimphu",
    },
  },
  {
    header: "Day 2 : 16 Jul’ 2020 - 17 Jul’ 2020",
    passenger: "Upto 6 Passengers",
    luggage: "Small Bag x 2 or Medium Bag x1",
    vehical: "Car Type : Sedan",
    travelling: {
      from: "Phuentsholing",
      to: "Thimphu",
    },
  },
];

const informationData = [
  {
    header: "Additional Charges",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
  {
    header: "Notes",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
  {
    header: "Disclaimer",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
];

const cancellationRule = {
  header: "Cancellation Rules",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
  ],
};
const termsAndCondition = {
  header: "Terms & Condition",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
  ],
};

const ViewMoreTravellingInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section>
      <ViewMoreSectionTitleWithImg header="Cab" image={taxi} />
      <div>
        {mockData.map((d, i) => (
          <div key={i} className="tw-pt-8">
            <div>
              <div className="tw-flex tw-justify-between tw-w-3/4 tw-mb-3">
                <h4 className="tw-font-bold tw-text-base">{d.header}</h4>
                <Button
                  type="link"
                  className="tw-m-0 tw-p-0 tw-text-blue-500 hover:tw-text-blue-500 focus:tw-text-blue-500"
                  onClick={showModal}
                >
                  <span className="tw-underline">View More</span>
                </Button>
              </div>
              <Row gutter={[20, 10]} className="tw-text-secondary-color">
                <Col span={10} className="tw-flex tw-gap-3">
                  <div className="tw-w-4">
                    <img src={user} alt="passanger" />
                  </div>
                  <p>{d.passenger}</p>
                </Col>
                <Col span={14} className="tw-flex tw-gap-3">
                  <div className="tw-w-4">
                    <img src={portfolio} alt="luggage" />
                  </div>
                  <p>{d.luggage}</p>
                </Col>
                <Col span={10} className="tw-flex tw-gap-3">
                  <div className="tw-w-4">
                    <img src={taxi} alt="car" />
                  </div>
                  <p>{d.vehical}</p>
                </Col>
                <Col span={14} className="tw-flex tw-gap-3">
                  <div className="tw-w-4">
                    <img src={place} alt="travelling" />
                  </div>
                  <p>
                    {d.travelling.from}
                    <span className="tw-mx-1"> --&gt; </span>
                    {d.travelling.to}
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        ))}

        <Modal
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          width={700}
        >
          <div className="tw-flex tw-items-center tw-gap-4 tw-py-4 tw-border-b">
            <div className="tw-p-6 tw-rounded-full tw-bg-gray-background">
              <img className="tw-w-7" src={taxi} alt="texi" />
            </div>
            <div className="tw-text-secondary-color">
              <h4 className="tw-text-primary-color tw-font-semibold">
                <span className="tw-text-lg tw-mr-1">
                  Day 1 : Paro - Thimpu
                </span>
                <span>( Wed, 17 Jun 20 )</span>
              </h4>
              <p>Hatchback</p>
              <p>( Tata Indica, Chevrolet Beat or similar )</p>
            </div>
          </div>
          <div className="tw-pt-5 tw-h-96 tw-overflow-y-auto">
            <h4 className="tw-section-title">Important Note</h4>
            <div className="tw-mt-5">
              {informationData.map((d, i) => (
                <InformationSection
                  key={i}
                  header={d.header}
                  content={d.content}
                />
              ))}
            </div>
            <div className="tw-py-3 tw-border-t tw-border-b">
              <InformationSection
                header={cancellationRule.header}
                content={cancellationRule.content}
                className="tw-section-title"
              />
            </div>
            <div className="tw-mt-5">
              <InformationSection
                header={termsAndCondition.header}
                content={termsAndCondition.content}
                className="tw-section-title"
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ViewMoreTravellingInfo;
