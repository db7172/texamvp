import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { DetailsTabTable } from "Models";
import { indCurrency } from "../../../../utils/utils";

type Props = {
  dataSource: any[];
};

const DetailsTabTableComponent = ({ dataSource }: Props) => {
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
      render: (text: any, column: any) => (
        <button
          className="tw-text-blue-500 tw-underline"
          onClick={() => console.log(column)}
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
    </div>
  );
};

export default DetailsTabTableComponent;
