import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import { capitalize, uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import {
  normFile,
  stripUndefined,
} from "../../pages/influencer/form/formUtils";
import "../adminStyle.css";
import firebase from "../../firebase";
import Loader from "../../components/common/Loader/Loader";

let addFAQ: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const ActivityPage = () => {
  const [activityForm] = useForm();
  const [categories, setCategories] = useState() as any;
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection("categories")
      .where("type", "==", "activity")
      .get()
      .then((querySnap) => {
        setCategories(querySnap.docs.map((doc) => doc.data().name));
      });
  }, []);

  const submitForm = async () => {
    const data = stripUndefined(activityForm.getFieldsValue());
    console.log(data);
    setLoading(1);
    let storageRef = firebase.storage().ref("activityPage/banner");
    await storageRef.put(data.banner[0].originFileObj);
    let downloadLink = await storageRef.getDownloadURL();
    let docName = data.activityType.toLowerCase();
    await firebase.firestore().collection("categories").doc(docName).set(
      {
        description: data.activityDescription,
        title: data.bannerLine,
        startingPrice: data.startingPrice,
        // activityType: data.activityType,
        banner: downloadLink,
      },
      { merge: true }
    );
    setLoading(0);
  };

  return (
    <div className="page-layout">
      <div className="home-cover">
        <div className="card-title">
          <h3>Activity Section</h3>
        </div>

        <Form
          form={activityForm}
          onFinish={(value) => {
            submitForm();
          }}
          size="large"
          layout="vertical"
          className="tw-mt-5"
        >
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item
                name="activityType"
                label="Activity Type"
                rules={[
                  {
                    required: true,
                    message: "Please select activity type!",
                  },
                ]}
              >
                <Select placeholder="Select activity type">
                  {categories?.map((d: any, i: any) => (
                    <Select.Option key={i} value={d}>
                      {capitalize(d)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Starting Price"
                name="startingPrice"
                rules={[
                  {
                    required: true,
                    message: "Please enter starting price!",
                  },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Starting Price"
                  className="tw-rounded-lg"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="banner"
                label="Upload Banner"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  {
                    required: true,
                    message: "Please upload activity banner!",
                  },
                ]}
              >
                <Upload
                  name="banner"
                  beforeUpload={() => false}
                  maxCount={1}
                  listType="picture"
                >
                  <Button
                    type="default"
                    className="tw-bg-gray-background tw-rounded-lg tw-m-0 hover:tw-bg-gray-background"
                    icon={<UploadOutlined />}
                  >
                    Click to upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Banner Line"
                name="bannerLine"
                rules={[
                  {
                    required: true,
                    message: "Please enter banner line!",
                  },
                ]}
              >
                <Input placeholder="Banner line" className="tw-rounded-lg" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Activity Description"
                name="activityDescription"
                rules={[
                  {
                    required: true,
                    message: "Please enter activity description!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Activity description"
                  className="tw-rounded-lg"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="tw-mb-5 tw-relative">
                <div className="tw-flex tw-gap-10">
                  <h3 className="tw-text-base tw-font-medium">FAQ's section</h3>
                  <p
                    className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                    onClick={() => addFAQ()}
                  >
                    <PlusOutlined />
                    <span>Add</span>
                  </p>
                </div>
              </Form.Item>

              <Form.List name="fnqSection">
                {(fields, { add, remove }) => {
                  addFAQ = add;
                  return (
                    <>
                      {fields.map((field) => (
                        <div
                          className="tw-flex tw-items-center tw-gap-10 tw-mb-5 tw-w-full"
                          key={uniqueId("faqSection")}
                        >
                          <Form.Item
                            {...field}
                            key={uniqueId("question")}
                            name={[field.name, "question"]}
                            fieldKey={[field.fieldKey, "question"]}
                            className="tw-w-10/12 tw-m-0"
                            label="Question"
                            rules={[
                              {
                                required: true,
                                message: "Please enter question",
                              },
                            ]}
                          >
                            <Input
                              className="tw-rounded-md"
                              placeholder="Enter question"
                            />
                          </Form.Item>

                          <Form.Item
                            {...field}
                            key={uniqueId("answer")}
                            name={[field.name, "answer"]}
                            fieldKey={[field.fieldKey, "answer"]}
                            className="tw-w-10/12 tw-m-0"
                            label="Answer"
                            rules={[
                              {
                                required: true,
                                message: "Please enter answer",
                              },
                            ]}
                          >
                            <Input
                              className="tw-rounded-md"
                              placeholder="Enter answer"
                            />
                          </Form.Item>

                          <MinusCircleOutlined
                            className="tw-text-2xl tw-text-secondary-color tw-mt-7"
                            onClick={() => remove(field.name)}
                          />
                        </div>
                      ))}
                    </>
                  );
                }}
              </Form.List>
            </Col>
            <Col span={24}>
              <div className="tw-flex tw-justify-end tw-gap-5">
                <div style={{ width: "200px" }}>
                  {loading ? (
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      htmlType="submit"
                    >
                      <Loader size={"small"} />
                    </Button>
                  ) : (
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      htmlType="submit"
                      // onClick={submitForm}
                    >
                      Submit
                    </Button>
                  )}
                </div>
                <div style={{ width: "200px" }}>
                  <Button
                    className="tw-w-full border-btn tw-rounded-lg"
                    onClick={() => {
                      activityForm.resetFields();
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ActivityPage;
