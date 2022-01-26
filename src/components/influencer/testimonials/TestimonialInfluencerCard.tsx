import { Button, Col, Divider, Progress, Row } from "antd";
import { indCurrency } from "../../../utils/utils";

type Props = {
  data: {
    img: string;
    name: string;
    recommemed: string;
    earning: {
      total: number;
      currentMonth: number;
    };
    description: string;
  };
};

const TestimonialInfluencerCard = ({ data }: Props) => {
  const { img, name, recommemed, earning, description } = data;

  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <Row gutter={[10, 20]}>
          <Col span={24}>
            <div className="tw-h-20 tw-w-20 tw-mx-auto tw-mb-6">
              <img src={img} className="tw-rounded-full" alt="user" />
            </div>
            <div className="tw-text-center">
              <h4 className="tw-text-base tw-font-medium">{name}</h4>
              <p className="tw-text-secondary-color">{recommemed}</p>
            </div>
          </Col>
          <Col span={24}>
            <div>
              <div className="tw-text-base tw-font-medium tw-flex tw-justify-between tw-mb-4">
                <p>Total earnings</p>
                <p>{indCurrency(earning.total)}</p>
              </div>
              <div>
                <p className="tw-mb-1 tw-text-xs">Current month’s earning</p>
                <div className="tw-flex tw-gap-5 tw-items-center">
                  <Progress
                    percent={50}
                    size="small"
                    showInfo={false}
                    status="active"
                  />
                  <p>{indCurrency(earning.currentMonth)}</p>
                </div>
              </div>
              <div className="tw-flex tw-justify-center">
                <Divider className="tw-w-1/2 tw-min-w-min" />
              </div>
              <div>
                <p className="tw-text-secondary-color tw-text-xs">
                  {description}
                </p>
                {/* <Button type="default" className="tw-texa-button tw-w-full">
                  Read More
                </Button> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TestimonialInfluencerCard;
