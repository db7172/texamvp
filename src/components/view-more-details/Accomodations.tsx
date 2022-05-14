import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";
import hotel from "../../assets/svg/hotel.svg";
import cooking from "../../assets/svg/cooking.svg";
import bed from "../../assets/svg/bed.svg";
import { Button, Carousel, Col, Row } from "antd";
import { defaultSettings } from "../../utils/utils";
import { useState } from "react";
import Modal from "antd/lib/modal/Modal";

type TypeModal = {
  title: string;
  body: string[];
};

const mockData = [
  {
    images: [
      "https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1628243163801-7cd2bf509288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1606815455082-ad72381c6b41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
    ],
    details: {
      title: "Tashi namgay resort",
      subTitle: "Phuentsholing",
      description: "Day 1 ( 16 Jul’ 2020 ) & Day 2 ( 17 Jul ‘2020 )",
      modal: {
        title: "Accommodation Amenities",
        body: [
          "Room service",
          "Power backup",
          "Smoking room",
          "Wifi",
          "Intercom",
          "Telephone",
          "Housekeeping",
          "Bathroom",
          "Restaurant",
        ],
      },
      accomodationDetails: [
        {
          image: hotel,
          detail: "Per Room Sharing : 1",
        },
        {
          image: cooking,
          detail: "Meal Provided : Lunch",
        },
        {
          image: bed,
          detail: "Accommodation Type : Tent",
        },
      ],
    },
  },
  {
    images: [
      "https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1628243163801-7cd2bf509288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1606815455082-ad72381c6b41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
    ],
    details: {
      title: "Tashi namgay resort",
      subTitle: "Phuentsholing",
      description: "Day 1 ( 16 Jul’ 2020 ) & Day 2 ( 17 Jul ‘2020 )",
      modal: {
        title: "Accommodation Amenities",
        body: [
          "Room service",
          "Power backup",
          "Smoking room",
          "Wifi",
          "Intercom",
          "Telephone",
          "Housekeeping",
          "Bathroom",
          "Restaurant",
        ],
      },
      accomodationDetails: [
        {
          image: hotel,
          detail: "Per Room Sharing : 1",
        },
        {
          image: cooking,
          detail: "Meal Provided : Lunch",
        },
        {
          image: bed,
          detail: "Accommodation Type : Tent",
        },
      ],
    },
  },
  {
    images: [
      "https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1628243163801-7cd2bf509288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
      "https://images.unsplash.com/photo-1606815455082-ad72381c6b41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&h=192&q=80",
    ],
    details: {
      title: "Tashi namgay resort",
      subTitle: "Phuentsholing",
      description: "Day 1 ( 16 Jul’ 2020 ) & Day 2 ( 17 Jul ‘2020 )",
      modal: {
        title: "Accommodation Amenities",
        body: [
          "Room service",
          "Power backup",
          "Smoking room",
          "Wifi",
          "Intercom",
          "Telephone",
          "Housekeeping",
          "Bathroom",
          "Restaurant",
        ],
      },
      accomodationDetails: [
        {
          image: hotel,
          detail: "Per Room Sharing : 1",
        },
        {
          image: cooking,
          detail: "Meal Provided : Lunch",
        },
        {
          image: bed,
          detail: "Accommodation Type : Tent",
        },
      ],
    },
  },
];

const Accomodations = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]) as any;

  const showModal = (modalData: TypeModal) => {
    setData(modalData);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setData(undefined);
  };

  if (props.accomodation) {
    return (
      <section>
        <ViewMoreSectionTitleWithImg header="Accomodations" image={hotel} />
        <Row gutter={[0, 20]} className="tw-mt-8">
          {Object.values(props.accomodation).map((d: any, i: any) => (
            <Col span={24}>
              <Row gutter={20}>
                <Col span={12} className="small-carousal details_page_carousal">
                  <Carousel
                    className=""
                    autoplay
                    {...defaultSettings}
                    nextArrow={<span> &gt; </span>}
                    prevArrow={<span> &gt; </span>}
                  >
                    {mockData[0].images.map((img, i) => (
                      <div className="tw-h-48 tw-w-96" key={i}>
                        <img
                          className="tw-w-full tw-h-auto tw-object-cover tw-rounded-lg"
                          src={img}
                          alt="carousal"
                        />
                      </div>
                    ))}
                  </Carousel>
                </Col>
                <Col span={12}>
                  <div>
                    <p className="tw-font-medium">Phuentsholing</p>
                    <h4 className="tw-text-lg tw-font-medium tw-mt-2">
                      {d.accomodationName}
                    </h4>
                    <p className="tw-text-secondary-color tw-mt-2">{`Day 1(${d.dateRange[0]}) - Day 3(${d.dateRange[1]})`}</p>
                  </div>
                  <Row gutter={[0, 8]} className="tw-mt-2 tw-items-center">
                    {/* {mockData[0]?.details.accomodationDetails.map( */}
                    {/* (data: any, i: any) => ( */}
                    <Col
                      span={i === d.length - 1 ? 18 : 24}
                      className="tw-flex tw-gap-3 tw-items-center tw-text-secondary-color"
                      key={i}
                    >
                      <div className="tw-w-4">
                        <img
                          src={mockData[0].details.accomodationDetails[0].image}
                          alt="room"
                        />
                      </div>
                      <p>Room Per Sharing: {d.roomSharing}</p>
                    </Col>
                    <Col
                      span={i === d.length - 1 ? 18 : 24}
                      className="tw-flex tw-gap-3 tw-items-center tw-text-secondary-color"
                      key={i}
                    >
                      <div className="tw-w-4">
                        <img
                          src={mockData[0].details.accomodationDetails[1].image}
                          alt="room"
                        />
                      </div>
                      <p>Meal Provided: Lunch</p>
                    </Col>
                    <Col
                      span={i === d.length - 1 ? 18 : 24}
                      className="tw-flex tw-gap-3 tw-items-center tw-text-secondary-color"
                      key={i}
                    >
                      <div className="tw-w-4">
                        <img
                          src={mockData[0].details.accomodationDetails[2].image}
                          alt="room"
                        />
                      </div>
                      <p>Accomodation Type: {d.accomodationType}</p>
                    </Col>
                    {/* ) */}
                    {/* )} */}
                    <Col span={6}>
                      <Button
                        type="link"
                        className="tw-m-0 tw-p-0 tw-text-blue-500 hover:tw-text-blue-500 focus:tw-text-blue-500"
                        onClick={() => showModal(d.amenities)}
                      >
                        <span className="tw-underline">View More</span>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
        {data && (
          <Modal
            title={data.title || "Accommodation Amenities"}
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <Row gutter={[10, 6]}>
              {data.map((s: any, i: any) => (
                <Col span={8}>
                  <p className="tw-flex tw-items-center">
                    <span className="tw-inline-block tw-h-1 tw-w-1 tw-bg-lightGray-background tw-rounded-full tw-mr-2" />
                    <span className="tw-text-secondary-color">{s}</span>
                  </p>
                </Col>
              ))}
            </Row>
          </Modal>
        )}
      </section>
    );
  } else {
    return null;
  }
};

export default Accomodations;
