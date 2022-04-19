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
import Success from "../Cards/Success/Success";

const MOCK_ACTIVITY = ["retreat1", "retreat2", "retreat3", "retreat4"];

let addFAQ: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const RetreatPage = () => {
  const [retreatForm] = useForm();
  const [categories, setCategories] = useState() as any;
  const [loading, setLoading] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("categories")
      .where("type", "==", "retreat")
      .get()
      .then((querySnap) => {
        setCategories(querySnap.docs.map((doc) => doc.data().name));
      });
  }, []);

  const handleSubmit = async () => {
    const data = stripUndefined(retreatForm.getFieldsValue());
    setLoading(1);
    let storageRef = firebase.storage().ref("retreatPage/banner");
    await storageRef.put(data.banner[0].originFileObj);
    let downloadLink = await storageRef.getDownloadURL();
    let docName = data.retreatType.toLowerCase();
    await firebase.firestore().collection("categories").doc(docName).set(
      {
        description: data.retreatDescription,
        title: data.retreatType,
        startingPrice: data.startingPrice,
        banner: downloadLink,
      },
      { merge: true }
    );
    setLoading(0);
    setSuccess(true);
  };

  return (
    <div className="page-layout">
      {success ? (
        <Success
          close={() => {
            setSuccess(false);
          }}
        />
      ) : null}
      <div className="home-cover">
        <div className="card-title">
          <h3>Retreat Section</h3>
        </div>

        <Form
          form={retreatForm}
          onFinish={handleSubmit}
          size="large"
          layout="vertical"
          className="tw-mt-5"
        >
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item
                name="retreatType"
                label="Retreat Type"
                rules={[
                  {
                    required: true,
                    message: "Please select retreat type!",
                  },
                ]}
              >
                <Select placeholder="Select retreat type">
                  {categories?.map((d: any, i: any) => (
                    <Select.Option value={d}>{capitalize(d)}</Select.Option>
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
                    message: "Please upload banner!",
                  },
                ]}
              >
                <Upload
                  name="banner"
                  beforeUpload={() => false}
                  maxCount={1}
                  multiple
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
                label="Retreat Description"
                name="retreatDescription"
                rules={[
                  {
                    required: true,
                    message: "Please enter retreat description!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Retreat description"
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
                      retreatForm.resetFields();
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

export default RetreatPage;
