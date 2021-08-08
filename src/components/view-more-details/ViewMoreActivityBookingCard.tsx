import { Button, Select } from "antd";
import classNames from "classnames";
import { lowerCase } from "lodash";
import { useState } from "react";
import { CITY_ARR } from "../../constant/city-array";

const MOCK_DATE = [
  {
    month: "May",
    date: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    month: "Jun",
    date: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
];

const ViewMoreActivityBookingCard = () => {
  const [departureCity, setDepartureCity] = useState("mumbai");
  const [selectedDate, setSelectedDate] = useState("");

  const handleClick = (e: any) => {
    setSelectedDate(e.target.dataset.valueid);
  };

  const handleSubmit = () => {
    console.log({ departureCity, selectedDate });
  };

  return (
    <section>
      <div className="tw-py-4 tw-border-b tw-border-t">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-secondary-color">Departure City</span>
          <Select
            showSearch
            // defaultValue="mumbai"
            value={departureCity}
            className="tw-font-medium"
            style={{ width: 120 }}
            placeholder="Location"
            onChange={(e) => setDepartureCity(e)}
          >
            {CITY_ARR.map((c, i) => (
              <Select.Option key={i} value={lowerCase(c)}>
                {c}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="tw-mt-3">
          <div className="tw-pb-2 tw-border-b">
            <h4 className="tw-font-bold">Total Departues</h4>
          </div>
          <div>
            {MOCK_DATE.map((d, i) => (
              <div className="tw-flex-center tw-gap-5 tw-mt-3">
                <p className="tw-text-secondary-color">{d.month}</p>
                <div className="tw-flex tw-gap-2 tw-flex-wrap">
                  {d.date.map((date, index) => (
                    <button
                      data-valueid={`${lowerCase(d.month)}-${date}`}
                      key={index}
                      className={classNames(
                        "tw-h-8 tw-w-8 tw-flex-center tw-border tw-cursor-pointer",
                        selectedDate === `${lowerCase(d.month)}-${date}`
                          ? "tw-border-primary-yellow"
                          : null
                      )}
                      onClick={handleClick}
                    >
                      <p
                        data-valueid={`${lowerCase(d.month)}-${date}`}
                        className={classNames(
                          "tw-w-6 tw-h-6 tw-flex-center tw-rounded-full",
                          selectedDate === `${lowerCase(d.month)}-${date}`
                            ? "tw-bg-secondary-color"
                            : "tw-bg-gray-background"
                        )}
                      >
                        {date}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tw-py-2">
        <Button
          type="default"
          onClick={handleSubmit}
          className="tw-texa-button tw-w-full"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default ViewMoreActivityBookingCard;
