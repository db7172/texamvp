import {
  Col,
  DatePicker,
  Form,
  Modal,
  Row,
  Select,
  Table,
  Tooltip,
} from "antd";
import { uniqueId } from "lodash";
import { indCurrency } from "../../../utils/utils";
import dummyImg from "../../../assets/png/influencer/details_activity.png";
import { ColumnsType } from "antd/lib/table";
import { StatementTableData } from "Models";
import { useState } from "react";
import { detailsTabTableData } from "./DetailsTab";
import DetailsTabTableComponent from "./details-tab-component/DetailsTabTable";

const StatementTab = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRecord, setActiveRecord] = useState<StatementTableData>();

  const handleCancel = () => {
    setIsModalVisible(false);
    setActiveRecord(undefined);
  };

  const showModal = (record: StatementTableData) => {
    setActiveRecord(record);
    setIsModalVisible(true);
  };

  const columns: ColumnsType<StatementTableData> = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ORDER ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "PACKAGE",
      dataIndex: "package",
      key: "package",
      width: 300,
      render: (value: any) => (
        <div
          className="tw-flex tw-gap-3"
          style={{
            maxWidth: "250px",
          }}
        >
          <div>
            <img src={value.image} alt="details card" />
          </div>
          <div
            style={{
              width: "180px",
            }}
          >
            <Tooltip title={value.title}>
              <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                {value.title}
              </h5>
            </Tooltip>
            <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
              {value.description}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "NO. OF TICKET SOLD",
      dataIndex: "noOfTicketSold",
      key: "noOfTicketSold",
    },
    {
      title: "TOTAL AMOUNT",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => indCurrency(text),
    },
    {
      title: "AMOUNT TRANSFERRED",
      dataIndex: "amountTransferred",
      key: "amountTransferred",
      render: (text) => (
        <span className="tw-text-green-background">{indCurrency(text)}</span>
      ),
    },
    {
      title: "TEXA COMMISION",
      dataIndex: "texaCommision",
      key: "texaCommision",
      render: (_, obj) => (
        <span className="tw-text-dark-red">
          - {indCurrency((obj.totalAmount * 5) / 100)}
        </span>
      ),
    },
    {
      title: "TCS",
      dataIndex: "tcs",
      key: "tcs",
      width: 100,
      render: (_, obj) => (
        <span className="tw-text-dark-red">
          - {indCurrency((obj.totalAmount * 1) / 100)}
        </span>
      ),
    },
    {
      title: "TDS",
      dataIndex: "tds",
      key: "tds",
      width: 100,
      render: (_, obj) => (
        <span className="tw-text-dark-red">
          - {indCurrency((obj.totalAmount * 1) / 100)}
        </span>
      ),
    },
    {
      title: "GST",
      dataIndex: "gst",
      key: "gst",
      width: 100,
      render: (_, obj) => (
        <span className="tw-text-dark-red">
          - {indCurrency((obj.totalAmount * 2) / 100)}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "moreDtails",
      key: "moreDtails",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <button
          onClick={() => showModal(record)}
          className="tw-text-blue-500 tw-underline"
        >
          more info
        </button>
      ),
    },
  ];

  const tableData: StatementTableData[] = [
    {
      key: uniqueId(),
      date: "20 Oct' 20",
      orderId: 136489881,
      package: {
        image: dummyImg,
        title: "Open mic ft. Hyderabad Comedy Scene",
        description: "3 Hr Comedy",
      },
      noOfTicketSold: 23,
      totalAmount: 160000,
      amountTransferred: 100000,
      moreInfo: detailsTabTableData,
    },
    {
      key: uniqueId(),
      date: "22 Oct' 20",
      orderId: 136489671,
      package: {
        image: dummyImg,
        title: "Open mic ft. Hyderabad Comedy Scene",
        description: "3 Hr Comedy",
      },
      noOfTicketSold: 20,
      totalAmount: 200000,
      amountTransferred: 100000,
      moreInfo: detailsTabTableData,
    },
  ];

  return (
    <div>
      <p className="tw-font-bold tw-text-3xl tw-text-secondary-color tw-mb-10">
        Statements
      </p>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
            <Form
              layout="vertical"
              autoComplete="off"
              className="tw-w-6/12"
              //   for converting moment date in to string use formatMomentDate(momentObj) function
              onValuesChange={(value) => console.log(value)}
              initialValues={{
                category: "all",
              }}
            >
              <div className="tw-flex tw-gap-5">
                <Form.Item
                  label="Date Range"
                  name="dateRange"
                  className="tw-w-6/12"
                >
                  <DatePicker.RangePicker className="tw-rounded-md" />
                </Form.Item>
                <Form.Item
                  label="Category"
                  name="category"
                  className="tw-w-6/12"
                >
                  <Select className="tw-rounded-md" placeholder="Category">
                    <Select.Option value="all">All</Select.Option>
                    <Select.Option value="activity">Activity</Select.Option>
                    <Select.Option value="event">Event</Select.Option>
                    <Select.Option value="retreate">Retreate</Select.Option>
                    <Select.Option value="workcation">Workcation</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </Form>
            <div className="tw-w-6/12 tw-flex tw-justify-end">
              <button className="tw-text-blue-500 tw-underline">
                Download Statement
              </button>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{ x: 1800 }}
          />
          <Modal
            visible={isModalVisible}
            width={1600}
            footer={null}
            onCancel={handleCancel}
          >
            {activeRecord && (
              <div className="tw-pt-5">
                <DetailsTabTableComponent dataSource={activeRecord.moreInfo} />
              </div>
            )}
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default StatementTab;
