import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Tabs,
  Tag,
} from "antd";
import classNames from "classnames";
import moment from "moment";
import { useState } from "react";
import { ItineraryFormTab } from "../../../pages/influencer/form/activity/form-tabs/ItineraryFormTab";
import { RoomAccomodationTab } from "../../../pages/influencer/form/activity/form-tabs/RoomAccomodationTab";
import { TabsVariant } from "../../../pages/influencer/form/activity/HourlyAndSingleDay";
import {
  onKeyDownEvent,
} from "../../../pages/influencer/form/formUtils";
import { useTabs } from "../../../pages/influencer/form/useTabs";
import { generatePanes } from "../../utils/commonAdminUtils";

type Props = {
  data: any;
  handleModalClose: () => void;
  isRelaunch: boolean;
};

const WorkcationModalForm = ({ data, handleModalClose, isRelaunch }: Props) => {
  const [accomodationFormData, setAccomodationFormData] = useState<any>(
    data.data?.accomodation?.data || {}
  );
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>(
    data.data?.itinerary || {}
  );
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>(
    data.data.featuredKeyword || []
  );
  const [isRejected, setIsRejected] = useState(false);

  const handleRejectionConfirmation = (value: any) => {
    setIsRejected(false);
    handleModalClose();
  };

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  const { state: accomodationTabs, methods: accomodationMethods } = useTabs(
    {
      activeKey: "room1",
      panes: generatePanes(
        Object.keys(data.data?.accomodation?.data || {}).length || 1,
        "Room",
        RoomAccomodationTab
      ),
    },
    RoomAccomodationTab,
    "room"
  );

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: "day1",
      panes: generatePanes(
        Object.keys(data.data?.itinerary || {}).length || 1,
        "Day",
        ItineraryFormTab
      ),
    },
    ItineraryFormTab
  );

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "accomodation") {
      setAccomodationFormData({
        ...accomodationFormData,
        [key]: value.data,
      });
    } else if (type === "itinerary") {
      setItineraryPanesFormData({
        ...itineraryPanesFormData,
        [key]: value,
      });
    }
  };

  const onSubmit = (value: any) => {
    // let formValue: any = {
    //   workationName: value.eventName,
    //   description: value.description,
    //   destinations: {
    //     destination: value.destinationFistField,
    //     googleMap: value.googleMap,
    //   },
    //   checkinAndCheckOutTime: {
    //     checkIn: formatMomentDate(value.checkIn),
    //     chcekOut: formatMomentDate(value.checkOut),
    //   },
    //   accomodation: {
    //     accomodationName: value.accomodationName,
    //     data: accomodationFormData,
    //   },
    //   itinerary: itineraryPanesFormData,
    //   featuredKeyword: tags,
    //   inclusion: value.inclusion,
    //   exclusion: value.exclusion,
    //   termsAndCondition: value.termsAndCondition,
    //   cancellationPolicy: value.cancellationPolicy,
    //   includes: value.includes,
    //   userID: data.data.userID,
    //   status: "processing",
    //   booked: 0,
    //   imgLink: data.data.imgLink,
    // };

    handleModalClose();
  };

  const initialData = () => {
    const { data: d } = data;

    return {
      eventName: d.workationName,
      description: d.description,
      destinationFistField: d.destinations.destination,
      googleMap: d.destinations.googleMap,
      checkIn: moment(d.checkinAndCheckOutTime.checkIn, "DD-MM-YYYY"),
      chcekOut: moment(d.checkinAndCheckOutTime.chcekOut, "DD-MM-YYYY"),
      includes: d.includes,
      accomodationName: d.accomodation.accomodationName,
      cancellationPolicy: d.cancellationPolicy,
      termsAndCondition: d.termsAndCondition,
      exclusion: d.exclusion,
      inclusion: d.inclusion,
    };
  };

  return (
    <div className={classNames({ "tw-pointer-events-none": isRelaunch })}>
      <Form
        name="workcationForm"
        onKeyDown={onKeyDownEvent}
        onFinish={onSubmit}
        initialValues={initialData()}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item label="Retreat Name" name="eventName">
              <Input className="tw-rounded-md" placeholder="Retreat Name" />
            </Form.Item>
            <Form.Item label="About Retreat (Description)" name="description">
              <Input.TextArea
                className="tw-rounded-md"
                rows={4}
                placeholder="Description"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">
              Destinations
            </h3>
            <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
              <Form.Item
                label="Destination"
                name="destinationFistField"
                className="tw-w-10/12 tw-m-0"
              >
                <Input
                  className="tw-rounded-md"
                  placeholder="Enter Destination"
                />
              </Form.Item>

              <Form.Item
                label="Google Map Link"
                name="googleMap"
                className="tw-w-10/12 tw-m-0"
              >
                <Input
                  className="tw-rounded-md"
                  placeholder="Enter Google Map Link"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">
              Check in and Check Out Timing
            </h3>
            <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
              <Form.Item
                label="Check-in"
                name="checkIn"
                className="tw-w-10/12 tw-m-0"
              >
                <DatePicker
                  className="tw-rounded-md tw-w-full"
                  format="DD/MM/YYYY"
                  placeholder="Eneter Check In Timing"
                />
              </Form.Item>

              <Form.Item
                label="Check-out"
                name="checkOut"
                className="tw-w-10/12 tw-m-0"
              >
                <DatePicker
                  className="tw-rounded-md tw-w-full"
                  format="DD/MM/YYYY"
                  placeholder="Eneter Check Out Timing"
                />
              </Form.Item>
            </div>
          </Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">Inclusion</h3>
            <Form.Item
              className="tw-mb-0"
              label="What package includes?"
              name="includes"
            >
              <Checkbox.Group className="tw-w-full">
                <Row>
                  <Col span={6}>
                    <Checkbox value="picAnddrop" style={{ lineHeight: "32px" }}>
                      Picup & Drop
                    </Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox value="hotalStay" style={{ lineHeight: "32px" }}>
                      Hotal Stay
                    </Checkbox>
                  </Col>
                  <Col span={6}>
                    <Checkbox
                      value="photography"
                      style={{ lineHeight: "32px" }}
                    >
                      Photography
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between">
              <h3 className="tw-text-base tw-font-medium">Accomodation</h3>
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                onClick={accomodationMethods.add}
              >
                <PlusOutlined />
                <span>Add</span>
              </p>
            </div>
            <Form.Item
              label="Accomodation Name"
              name="accomodationName"
              className="tw-mt-7"
            >
              <Input
                className="tw-rounded-md"
                placeholder="Enter Accomdation Name"
              />
            </Form.Item>

            <Form.Item>
              <Tabs
                hideAdd
                onChange={accomodationMethods.onChange}
                activeKey={accomodationTabs.activeKey}
                type="editable-card"
                className="antd-custom-tabs"
                onEdit={accomodationMethods.onEdit}
                tabBarGutter={10}
              >
                {accomodationTabs.panes.map(
                  ({ title, Content, key, closable }) => (
                    <Tabs.TabPane tab={title} key={key} closable={closable}>
                      <Content
                        initialData={accomodationFormData[key]}
                        keyValue={key}
                        updateTabFormData={updateTabFormData}
                        singleDay
                      />
                    </Tabs.TabPane>
                  )
                )}
              </Tabs>
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-mb-5">
              <h3 className="tw-text-base tw-font-medium">
                Itinerary (Optional)
              </h3>
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                onClick={itinerayMethods.add}
              >
                <PlusOutlined />
                <span>Add Itinerary</span>
              </p>
            </div>
            <Form.Item>
              <Tabs
                hideAdd
                onChange={itinerayMethods.onChange}
                activeKey={itinerayTabs.activeKey}
                type="editable-card"
                className="antd-custom-tabs"
                onEdit={itinerayMethods.onEdit}
                tabBarGutter={10}
              >
                {itinerayTabs.panes.map(({ title, Content, key, closable }) => (
                  <Tabs.TabPane tab={title} key={key} closable={closable}>
                    <Content
                      initialData={itineraryPanesFormData[key]}
                      keyValue={key}
                      updateTabFormData={updateTabFormData}
                    />
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">
              Featured Keyword
            </h3>

            <Form.Item label="Places You Want to Include">
              <Form.Item
                className="tw-mb-0"
                extra={<p>* You can include upto 5 places</p>}
              >
                <Input
                  value={tagInput}
                  placeholder="Type a Tag and hit enter."
                  onPressEnter={updateTags}
                  onChange={(e) => setTagInput(e.target.value)}
                  disabled={tags.length > 4}
                />
              </Form.Item>

              <Form.Item noStyle>
                {tags.map((t, i) => (
                  <Tag closable key={i} onClose={() => onTagClose(i)}>
                    {t}
                  </Tag>
                ))}
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="inclusion" label="Inclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Inclusion"
              />
            </Form.Item>
            <Form.Item name="exclusion" label="Exclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Exclusion"
              />
            </Form.Item>
            <Form.Item name="termsAndCondition" label="Terms and Conditions">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Terms and Conditions"
              />
            </Form.Item>
            <Form.Item name="cancellationPolicy" label="Cancellation Policy">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Cancellation Policy"
              />
            </Form.Item>
          </Col>
          {!isRelaunch && (
            <Col span={24}>
              <div className="tw-flex tw-gap-5">
                <div className="tw-w-6/12">
                  <Button
                    className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                    onClick={() => {
                      setIsRejected(true);
                    }}
                  >
                    Reject
                  </Button>
                </div>

                <div className="tw-w-6/12">
                  <Button
                    type="default"
                    className="tw-texa-button tw-w-full tw-m-0"
                    htmlType="submit"
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Form>

      {isRejected && (
        <Modal
          title="Rejection reason"
          visible={isRejected}
          footer={null}
          onCancel={() => setIsRejected(false)}
        >
          <Form
            name="rejectionForm"
            onKeyDown={onKeyDownEvent}
            onFinish={handleRejectionConfirmation}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="reason"
              label="Reason"
              className="tw-mb-5"
              rules={[
                {
                  required: true,
                  message: "Please enter rejection reason!",
                },
              ]}
            >
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Rejection Reason"
              />
            </Form.Item>

            <div className="tw-flex tw-gap-5">
              <div className="tw-w-6/12">
                <Button
                  className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                  onClick={() => {
                    setIsRejected(false);
                  }}
                >
                  Cancel
                </Button>
              </div>

              <div className="tw-w-6/12">
                <Button
                  type="default"
                  htmlType="submit"
                  className="tw-texa-button tw-w-full tw-m-0"
                >
                  Reject
                </Button>
              </div>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default WorkcationModalForm;
