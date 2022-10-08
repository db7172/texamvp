import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import UserReply from "./UserReply";
import dp from "../../../assets/png/influencer/dp.png";
import firebase from "../../../firebase";

type Props = {
  d: any;
  ViewAll?: boolean;
  textForViewAll?: string;
  handleViewAllClick?: () => void;
  showUserName?: boolean;
};

const UserReview = ({
  d,
  ViewAll = false,
  showUserName = true,
  handleViewAllClick,
  textForViewAll = "View All",
}: Props) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [data] = useState(d);
  const [comment, setComment] = useState(data.comment);
  const [user, setUser] = useState([]) as any;

  const handleShowForReplyModal = () => {
    // handleCancel();
    setShowReplyModal(true);
  };

  const handleCancelForReplyModal = () => {
    setShowReplyModal(false);
  };

  const handleReplySave = (reply: string) => {
    const allReply = comment.reply || [];
    setComment({
      ...comment,
      reply: [
        ...allReply,
        {
          name: "New User",
          profile: dp,
          comment: reply,
        },
      ],
    });

    handleCancelForReplyModal();
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(d.userId)
      .get()
      .then((doc) => {
        setUser(doc.data());
      });
  }, []);

  return (
    <div>
      {showUserName && (
        <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
          <div className="tw-rounded-full tw-w-5 tw-h-5">
            <img
              className="tw-w-full"
              src={user?.profileUrl}
              alt="profilePic"
            />
          </div>
          <p className="tw-font-medium tw-text-base">{user?.name}</p>
          {ViewAll && (
            <p
              className="tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer"
              onClick={handleViewAllClick}
            >
              {textForViewAll}
            </p>
          )}
        </div>
      )}
      <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
        {/* <Rate disabled defaultValue={d.review.rating} /> */}
        <div className="tw-flex tw-gap-3">
          {/* {d.tags.map((t) => (
            <p
              key={uniqueId()}
              className="tw-bg-gray-background tw-text-xs tw-rounded-md tw-font-medium tw-py-2 tw-px-3"
            >
              {t}
            </p>
          ))} */}
        </div>
      </div>

      <div>
        <h3 className="tw-text-base tw-font-medium tw-mb-2">
          {/* {d.review.reason} */}
        </h3>
        <p className="tw-text-secondary-color tw-font-lato">
          {/* {d.review.description} */}
        </p>

        {/* {comment.reply && (
          <div className="tw-ml-10">
            {comment.reply.map((replyData) => (
              <div key={uniqueId()} className="tw-mt-7">
                <div className="tw-flex tw-items-center tw-gap-3 tw-mb-2">
                  <div className="tw-rounded-full tw-w-5 tw-h-5">
                    <img
                      className="tw-w-full"
                      src={replyData.profile}
                      alt="profilePic"
                    />
                  </div>
                  <p className="tw-font-medium tw-text-base">
                    {replyData.name}
                  </p>
                </div>
                <p className="tw-text-secondary-color tw-font-lato">
                  {replyData.comment}
                </p>
              </div>
            ))}
          </div>
        )} */}

        <Button
          type="default"
          className="tw-texa-button"
          onClick={handleShowForReplyModal}
        >
          Reply
        </Button>
      </div>
      <Modal
        title="Reply"
        visible={showReplyModal}
        footer={null}
        onCancel={handleCancelForReplyModal}
        width={400}
      >
        <UserReply
          onCancel={handleCancelForReplyModal}
          onSave={handleReplySave}
        />
      </Modal>
    </div>
  );
};

export default UserReview;
