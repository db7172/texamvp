import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";
import hotel from "../../assets/svg/hotel.svg";
import room1 from "../../assets/png/hotel_room1.png";
import room2 from "../../assets/png/hotel_room2.png";
import { indCurrency } from "../../utils/utils";
import { Button } from "antd";

type RoomType = {
  roomType?: {
    name: string;
    imgage: string;
    service: string[];
  };
  notes: string[];
  price: {
    mrp: number;
    discountPrice: number;
    nights: number;
    tax: number;
  };
};

const SECTION_DETAILS = {
  header: "Rooms",
  image: hotel,
};

const ROOM_DETAILS: Array<RoomType[]> = [
  [
    {
      roomType: {
        name: "Superior AC Room",
        imgage: room1,
        service: ["Room service", "Power backup", "Smoking room", "Bathroom"],
      },
      notes: [
        "Basic info, for a faster booking experience and travel",
        "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod ",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      price: {
        mrp: 16999,
        discountPrice: 15999,
        nights: 2,
        tax: 1465,
      },
    },
    {
      notes: [
        "Basic info, for a faster booking experience and travel",
        "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod ",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      price: {
        mrp: 21999,
        discountPrice: 20999,
        nights: 2,
        tax: 1465,
      },
    },
  ],
  [
    {
      roomType: {
        name: "Premium AC Room",
        imgage: room2,
        service: ["Room service", "Power backup", "Smoking room", "Bathroom"],
      },
      notes: [
        "Basic info, for a faster booking experience and travel",
        "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod ",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      price: {
        mrp: 16999,
        discountPrice: 15999,
        nights: 2,
        tax: 1465,
      },
    },
    {
      notes: [
        "Basic info, for a faster booking experience and travel",
        "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod ",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      price: {
        mrp: 21999,
        discountPrice: 20999,
        nights: 2,
        tax: 1465,
      },
    },
    {
      notes: [
        "Basic info, for a faster booking experience and travel",
        "Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod ",
        "Lorem ipsum dolor sit amet, consectetur",
      ],
      price: {
        mrp: 21999,
        discountPrice: 20999,
        nights: 2,
        tax: 1465,
      },
    },
  ],
];

const ViewMoreRoomDetails = () => {
  return (
    <div>
      <ViewMoreSectionTitleWithImg
        header={SECTION_DETAILS.header}
        image={SECTION_DETAILS.image}
      />

      <div className="tw-mt-5">
        <table className="tw-w-full tw-border-collapse tw-border">
          <thead>
            <tr className="tw-bg-gray-background">
              <th className="tw-py-2">Room Type</th>
              <th className="tw-py-2">Notes</th>
              <th className="tw-py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {ROOM_DETAILS.map((data) =>
              data.map((d) => (
                <tr>
                  {d.roomType && (
                    <td
                      className="tw-w-1/3 tw-border tw-p-5"
                      rowSpan={data.length}
                    >
                      <div className="tw-pt-4 tw-flex tw-flex-col">
                        <p className="tw-mb-4 tw-font-medium tw-text-base">
                          {d.roomType.name}
                        </p>
                        <div className="tw-mb-4">
                          <img
                            className="tw-rounded-lg"
                            src={d.roomType.imgage}
                            alt="roomPhoto"
                          />
                        </div>
                        <div>
                          {d.roomType.service.map((list) => (
                            <li className="tw-text-secondary-color" key={list}>
                              {list}
                            </li>
                          ))}
                        </div>
                      </div>
                    </td>
                  )}
                  <td className="tw-w-1/3 tw-border tw-p-5">
                    <ul className="tw-list-disc tw-list-outside tw-p-2 tw-pl-4 tw-pt-4">
                      {d.notes.map((list) => (
                        <li
                          className="tw-text-secondary-color tw-pb-1"
                          key={list}
                        >
                          {list}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="tw-w-1/3 tw-border tw-p-5">
                    <div className="tw-text-secondary-color tw-text-xs tw-p-2 tw-pt-4">
                      <p className="tw-line-through tw-mb-1.5">
                        {indCurrency(d.price.mrp)}
                      </p>
                      <p className="tw-mb-1.5">
                        <span className="tw-text-2xl tw-text-primary-color tw-font-medium tw-mr-2">
                          {indCurrency(d.price.discountPrice)}
                        </span>
                        <span className="">For {d.price.nights} Nights</span>
                      </p>
                      <p className="tw-text-secondary-color tw-font-medium">
                        + {indCurrency(d.price.tax)} Taxes & Fees
                      </p>
                      <div className="tw-pt-5">
                        <Button
                          type="default"
                          className="tw-texa-button tw-m-0"
                        >
                          Select Room
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMoreRoomDetails;
