import { Button, Col, Form, Input, Row } from "antd";
import reviewBG from "../../assets/png/reviewBG.png";
import Container from "../../components/common/container/Container";
import { useState } from "react";
import ReviewCard from "../../components/card/review-card/ReviewCard";
import { reviewDummyData } from "../../constant/reviewData.const";

const AllReviews = () => {
  const [reviewData, setReviewData] = useState(reviewDummyData.slice(0, 6));
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  const handleClick = () => {
    const currentCount = reviewData.length;

    if (currentCount < reviewDummyData.length) {
      setReviewData(reviewDummyData.slice(0, currentCount + 4));
    } else {
      setShowLoadMoreButton(false);
    }
  };

  return (
    <div>
      <div style={{ height: "737px" }} className="tw-relative">
        <div className="tw-absolute tw-inset-0">
          <img src={reviewBG} alt="background" />
        </div>
        <Container className="tw-relative tw-h-full">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-full">
            <p className="tw-text-5xl tw-font-bold tw-mb-7">
              Where are you headed next?
            </p>
            <p className="tw-text-secondary-color tw-font-lato tw-text-lg tw-w-2/4 tw-text-center tw-mb-16">
              The human instinct to explore new places and things is always
              there. People travel for all sorts of reasons, be it to spend time
              with
            </p>
            <div style={{ width: "450px" }}>
              <Form
                name="formSearch"
                size="large"
                onFinish={(value) => console.log(value)}
              >
                <Row gutter={25}>
                  <Col span={16}>
                    <Form.Item name="searchTerm">
                      <Input
                        className="tw-rounded-lg"
                        placeholder="Enter your destination"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item>
                      <Button
                        type="default"
                        className="tw-w-full tw-m-0 tw-texa-button"
                        htmlType="submit"
                      >
                        Search
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <p className="tw-text-center tw-text-3xl tw-font-medium tw-mt-16">
          Texatrove’s got the details covered in one place
        </p>

        <p className="tw-w-3/5 tw-text-center tw-text-secondary-color tw-font-lato tw-mx-auto tw-mt-3 tw-text-lg">
          Bonsai’s integrated and automated design empowers you to seamlessly
          run your business like a pro - from proposal to tax season.
        </p>
        <Row className="tw-mt-16" gutter={[25, 25]}>
          {reviewData.map((d) => (
            <Col span={12}>
              <ReviewCard
                img={d.img}
                name={d.name}
                comment={d.comment}
                place={d.place}
                date={d.date}
                star={d.star}
              />
            </Col>
          ))}
          <Col span={24}>
            {showLoadMoreButton && (
              <div className="tw-flex tw-justify-center tw-mt-10">
                <Button
                  type="default"
                  className="tw-m-0 tw-texa-button"
                  onClick={handleClick}
                >
                  View more Reviews
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllReviews;
