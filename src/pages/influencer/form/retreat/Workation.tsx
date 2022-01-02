import {
  CloudUploadOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Tabs,
  Tag,
  Upload,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import { formatMomentDate } from "../../../../utils/utils";
import { ItineraryFormTab } from "../activity/form-tabs/ItineraryFormTab";
import { RoomAccomodationTab } from "../activity/form-tabs/RoomAccomodationTab";
import { TabsVariant } from "../activity/HourlyAndSingleDay";
import { SIDE_PENAL_DATA } from "../activity/mockData";
import CreateActivity from "../CreateActivity";
import { normFile, onKeyDownEvent, stripUndefined } from "../formUtils";
import { RightSidePenal } from "../RightSidePenal";
import { useTabs } from "../useTabs";

const accomodationPanes = [
  {
    title: "Room 1",
    Content: RoomAccomodationTab,
    key: "room1",
    closable: false,
  },
  {
    title: "Room 2",
    Content: RoomAccomodationTab,
    key: "room2",
  },
];

const itineraryPanes = [
  {
    title: "Day 1",
    Content: ItineraryFormTab,
    key: "day1",
    closable: false,
  },
  { title: "Day 2", Content: ItineraryFormTab, key: "day2" },
];

const Workation = () => {
  const [accomodationFormData, setAccomodationFormData] = useState<any>();
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const { state: accomodationTabs, methods: accomodationMethods } = useTabs(
    {
      activeKey: accomodationPanes[0].key,
      panes: accomodationPanes,
    },
    RoomAccomodationTab,
    "room"
  );

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: itineraryPanes[0].key,
      panes: itineraryPanes,
    },
    ItineraryFormTab
  );

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "accomodation") {
      setAccomodationFormData({
        ...accomodationFormData,
        [key]: value,
      });
    } else if (type === "itinerary") {
      setItineraryPanesFormData({
        ...itineraryPanesFormData,
        [key]: value,
      });
    }
  };

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  const onFinishForm = (value: any) => {
    const formValue: any = {
      workationName: value.eventName,
      description: value.description,
      destinations: {
        destination: value.destinationFistField,
        googleMap: value.googleMap,
      },
      checkinAndCheckOutTime: {
        chcekIn: formatMomentDate(value.checkIn),
        chcekOut: formatMomentDate(value.checkOut),
      },
      accomodation: {
        accomodationName: value.accomodationName,
        data: accomodationFormData,
      },
      itinerary: itineraryPanesFormData,
      featuredKeyword: tags,
      inclusion: value.inclusion,
      exclusion: value.exclusion,
      termsAndCondition: value.termsAndCondition,
      cancellationPolicy: value.cancellationPolicy,
      includes: value.includes,
    };
    const finalData = stripUndefined(formValue);
    console.log(finalData);
  };

  return (
    <Container>
      <Link to="/influencer/dashboard" className="tw-my-10 tw-inline-block">
        <div className="tw-flex tw-items-center tw-text-secondary-color hover:tw-text-secondary-color">
          <LeftOutlined className="tw-mr-1" />{" "}
          <span className="tw-underline tw-font-medium">GO BACK</span>
        </div>
      </Link>
      <Row gutter={20} className="">
        <Col span={6}>
          <FormLeftPenal />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={18} className="tw-p-8 tw-shadow-card">
              <div className="tw-relative">
                <h1 className="tw-font-medium tw-text-lg tw-mb-5">
                  Create a Retreat - Workation
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                <CreateActivity title="Create Workation" />
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="workationForm"
                onKeyDown={onKeyDownEvent}
                onFinish={onFinishForm}
                onFinishFailed={(error) => console.log(error)}
                // onValuesChange={(value, obj) => console.log(obj)}
                layout="vertical"
                size="large"
                autoComplete="off"
              >
                <Form.Item
                  label="Upload Image"
                  className="tw-text-base tw-font-medium"
                >
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger
                      name="files"
                      multiple={true}
                      listType="picture-card"
                      beforeUpload={() => false}
                    >
                      <p className="ant-upload-drag-icon">
                        <CloudUploadOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        ( Recommended size - 840 x 460 px )
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
                <Divider className="tw-my-10" />
                <Form.Item label="Retreat Name" name="eventName">
                  <Input className="tw-rounded-md" placeholder="Retreat Name" />
                </Form.Item>
                <Form.Item
                  label="About Retreat (Description)"
                  name="description"
                >
                  <Input.TextArea
                    className="tw-rounded-md"
                    rows={4}
                    placeholder="Description"
                  />
                </Form.Item>
                <Divider className="tw-my-10" />
                <Form.Item className="tw-mb-5 tw-relative">
                  <RightSidePenal
                    title="Destination"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Destinations
                    </h3>
                  </div>
                </Form.Item>
                <Form.Item noStyle>
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

                    <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                  </div>
                </Form.Item>

                <Divider className="tw-my-10" />

                <Form.Item className="tw-mb-5 tw-relative">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Check in and Check Out Timing
                    </h3>
                  </div>
                </Form.Item>

                <Form.Item noStyle>
                  <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                    <Form.Item
                      label="Check-in"
                      name="checkIn"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <DatePicker
                        className="tw-rounded-md tw-w-full"
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
                        placeholder="Eneter Check Out Timing"
                      />
                    </Form.Item>

                    <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                  </div>
                </Form.Item>
                <Divider className="tw-my-10" />

                <Form.Item className="tw-mb-5 tw-relative">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">Inclusion</h3>
                  </div>
                </Form.Item>

                <Form.Item
                  className="tw-mb-0"
                  label="What package includes?"
                  name="includes"
                >
                  <Checkbox.Group className="tw-w-full">
                    <Row>
                      <Col span={6}>
                        <Checkbox
                          value="picAnddrop"
                          style={{ lineHeight: "32px" }}
                        >
                          Picup & Drop
                        </Checkbox>
                      </Col>
                      <Col span={6}>
                        <Checkbox
                          value="hotalStay"
                          style={{ lineHeight: "32px" }}
                        >
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

                <Divider className="tw-my-10" />

                <Form.Item className="tw-relative">
                  <RightSidePenal
                    title="Accomodation"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Accomodation
                    </h3>
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
                            keyValue={key}
                            updateTabFormData={updateTabFormData}
                            singleDay
                          />
                        </Tabs.TabPane>
                      )
                    )}
                  </Tabs>
                </Form.Item>
                <Divider className="tw-my-10" />

                {/* itineray */}
                <Form.Item className="tw-relative tw-mb-5">
                  <RightSidePenal
                    title="Itinerary"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
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
                </Form.Item>

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
                    {itinerayTabs.panes.map(
                      ({ title, Content, key, closable }) => (
                        <Tabs.TabPane tab={title} key={key} closable={closable}>
                          <Content
                            keyValue={key}
                            updateTabFormData={updateTabFormData}
                          />
                        </Tabs.TabPane>
                      )
                    )}
                  </Tabs>
                </Form.Item>

                <Divider className="tw-my-10" />

                <Form.Item noStyle>
                  <h3 className="tw-text-base tw-font-medium tw-mb-5">
                    Featured Keyword
                  </h3>
                </Form.Item>
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

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item name="inclusion" label="Inclusion">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Trip Inclusion"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Inclusion"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item name="exclusion" label="Exclusion">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Trip Exclusion"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Exclusion"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item
                    name="termsAndCondition"
                    label="Terms and Conditions"
                  >
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Terms and Conditions"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Terms and Conditions"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <Form.Item
                  name="cancellationPolicy"
                  label="Cancellation Policy"
                >
                  <Input.TextArea
                    rows={6}
                    className="tw-rounded-md"
                    placeholder="Cancellation Policy"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    htmlType="submit"
                    className="tw-texa-button tw-w-full"
                  >
                    Upload Workation
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Workation;
