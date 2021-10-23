import { Modal, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DetailsTabTable } from "Models";
import { useState } from "react";
import { indCurrency } from "../../../../utils/utils";
import PaymentDetails from "../../payment-details/PaymentDetails";

type Props = {
  dataSource: any[];
};

const DetailsTabTableComponent = ({ dataSource }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<DetailsTabTable>();

  const handleCancel = () => {
    setIsModalOpen(false);
    setActiveId(undefined);
  };

  const handleModalOpen = (value: DetailsTabTable) => {
    setActiveId(value);
    setIsModalOpen(true);
  };

  const detailsTabTablecolumns: ColumnsType<DetailsTabTable> = [
    {
      title: "S.No.",
      dataIndex: "sno",
      key: "sno",
      width: 100,
    },
    {
      title: "Trip Id",
      dataIndex: "tripId",
      key: "tripId",
      width: 150,
      render: (text: any, column: DetailsTabTable) => (
        <button
          className="tw-text-blue-500 tw-underline"
          onClick={() => handleModalOpen(column)}
        >
          {text}
        </button>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "No. of People",
      dataIndex: "noOfPeople",
      key: "noOfPeople",
      width: 150,
    },
    {
      title: "Phone No.",
      dataIndex: "phoneNo",
      key: "phoneNo",
      width: 150,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: 150,
    },
    {
      title: "Amount Recieved",
      dataIndex: "amtRecd",
      key: "amtRecd",
      width: 150,
      render: (value) => indCurrency(value),
    },
    {
      title: "Pending Amount",
      dataIndex: "pendingAmt",
      key: "pendingAmt",
      width: 150,
      render: (value) => indCurrency(value),
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "commission",
      width: 150,
      render: (value) => indCurrency(value),
    },
  ];

  return (
    <div>
      <Table
        columns={detailsTabTablecolumns}
        dataSource={dataSource}
        scroll={{ x: 1200 }}
      />
      <Modal
        visible={isModalOpen}
        style={{ top: 10 }}
        width={1600}
        footer={null}
        className="tw-rounded-lg"
        onCancel={handleCancel}
      >
        {activeId && (
          <PaymentDetails
            customerDetails={{
              name: activeId.name,
              number: activeId.phoneNo,
              city: activeId.city,
            }}
            tripId={activeId.tripId}
          />
        )}
      </Modal>
    </div>
  );
};

export default DetailsTabTableComponent;
