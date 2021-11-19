import { Button, Carousel, Divider, Modal } from "antd";
import panCardImg from "../../../assets/png/influencer/panMock.png";
import aadharCardImg from "../../../assets/png/influencer/aadharMock.png";
import agreement from "../../../assets/png/influencer/payment-agreement-template.png";
import { InfoCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import { defaultSettings } from "../../../utils/utils";
import { uniqueId } from "lodash";

type KycDocs = { images: string[]; title: string };

const mockData = {
  panCard: {
    number: "CAWDFG1257",
    img: panCardImg,
  },

  aadharCard: {
    number: "5485-5000-8000",
    img: [aadharCardImg, aadharCardImg],
  },
};

const mockAgreement = [agreement, agreement, agreement];

const InfluencerDocuments = () => {
  const [showKycModal, setShowKycModal] = useState(false);
  const [activeDocument, setActiveDocument] = useState<KycDocs>();

  const handleShowKycModal = (images: KycDocs) => {
    setActiveDocument(images);
    setShowKycModal(true);
  };

  const handleKycModalCancel = () => {
    setShowKycModal(false);
    setActiveDocument(undefined);
  };

  const information = (
    <div className="tw-flex tw-gap-3 tw-mt-10">
      <InfoCircleFilled className="tw-text-secondary-color" />
      <p>
        This documents cannot be change once its verify for the chnage call us
        on 1800-1233-1456 or email us on info@texatrove.com
      </p>
    </div>
  );

  return (
    <div>
      <p className="tw-text-2xl tw-font-medium">KYC Documents</p>
      <Divider className="tw-mb-10" />
      <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Aadhar Card</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between tw-items-center">
          <p className="tw-w-6/12 tw-text-secondary-color tw-text-base">
            {`Number: ${mockData.aadharCard.number}`}
          </p>

          <div className="tw-w-4/12">
            <img
              className="tw-h-20"
              src={mockData.aadharCard.img[0]}
              alt="aadhar-card"
            />
          </div>

          <Button
            className="tw-w-2/12 tw-m-0 tw-text-blue-500 tw-underline hover:tw-text-blue-500 hover:tw-underline focus:tw-text-blue-500 focus:tw-underline"
            type="text"
            size="small"
            onClick={() =>
              handleShowKycModal({
                images: mockData.aadharCard.img,
                title: "Your Adhar Card ",
              })
            }
          >
            View More
          </Button>
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Pan Card</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between tw-items-center">
          <p className="tw-w-6/12 tw-text-secondary-color tw-text-base">
            {`Number: ${mockData.panCard.number}`}
          </p>

          <div className="tw-w-4/12">
            <img
              className="tw-h-20"
              src={mockData.panCard.img}
              alt="pan-card"
            />
          </div>

          <Button
            className="tw-w-2/12 tw-m-0 tw-text-blue-500 tw-underline hover:tw-text-blue-500 hover:tw-underline focus:tw-text-blue-500 focus:tw-underline"
            type="text"
            size="small"
            onClick={() =>
              handleShowKycModal({
                images: [mockData.panCard.img],
                title: "Your Pan Card",
              })
            }
          >
            View More
          </Button>
        </div>
      </div>

      <p className="tw-text-2xl tw-font-medium">Vender Contract</p>
      <Divider className="tw-mb-10" />
      <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">
          Vender Agreement
        </p>
        <div className="tw-w-8/12 tw-flex tw-justify-between tw-items-center">
          <div className="tw-pl-10">
            <img className="tw-h-28" src={mockAgreement[0]} alt="contract" />
          </div>

          <Button
            className="tw-w-2/12 tw-m-0 tw-text-blue-500 tw-underline hover:tw-text-blue-500 hover:tw-underline focus:tw-text-blue-500 focus:tw-underline"
            type="text"
            size="small"
            onClick={() =>
              handleShowKycModal({
                images: mockAgreement,
                title: "Your Contract",
              })
            }
          >
            View More
          </Button>
        </div>
      </div>
      <div className="tw-mt-20">{information}</div>

      <Modal
        visible={showKycModal}
        style={{ top: 50 }}
        footer={null}
        onCancel={handleKycModalCancel}
      >
        {activeDocument && (
          <div>
            <p className="tw-text-center tw-text-xl tw-mb-10">
              {activeDocument.title}
            </p>
            <div className="menual-carousal">
              <Carousel {...defaultSettings}>
                {activeDocument.images.map((img) => (
                  <div key={uniqueId()}>
                    <img
                      className="tw-mx-auto"
                      src={img}
                      alt={activeDocument.title}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            {information}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default InfluencerDocuments;
