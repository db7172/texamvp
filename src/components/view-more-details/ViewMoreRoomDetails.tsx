import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";
import hotel from "../../assets/svg/hotel.svg";
import room1 from "../../assets/png/hotel_room1.png";
import room2 from "../../assets/png/hotel_room2.png";

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
];

const ViewMoreRoomDetails = () => {
  return (
    <div>
      <ViewMoreSectionTitleWithImg
        header={SECTION_DETAILS.header}
        image={SECTION_DETAILS.image}
      />

      <div className="tw-mt-5">
        <table className="tw-w-full">
          <tr>
            <th>Room Type</th>
            <th>Notes</th>
            <th>Price</th>
          </tr>
          {ROOM_DETAILS.map((data) =>
            data.map((d) => (
              <tr>
                {d.roomType && <td rowSpan={data.length}>{d.roomType.name}</td>}
                <td>{d.notes[0]}</td>
                <td>{d.price.discountPrice}</td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
};

export default ViewMoreRoomDetails;
