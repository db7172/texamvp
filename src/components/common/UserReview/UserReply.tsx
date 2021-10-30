import { Button, Form, Input } from "antd";

type Props = {
  onCancel: () => void;
  onSave: (reply: string) => void;
};

const UserReply = ({ onCancel, onSave }: Props) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="replyForm"
      onFinish={(value) => {
        onSave(value.reply);
        setTimeout(() => {
          form.resetFields();
        }, 100);
      }}
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please Add Your Reply!",
          },
        ]}
        name="reply"
      >
        <Input.TextArea
          rows={5}
          className="tw-rounded-lg"
          placeholder="Add Reply"
        />
      </Form.Item>
      <Form.Item noStyle>
        <div className="tw-flex tw-gap-10">
          <Button
            type="default"
            className="tw-texa-button tw-mt-0 tw-w-full"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button
            type="dashed"
            className="tw-border-solid tw-border tw-rounded-lg tw-mt-0 tw-w-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default UserReply;
