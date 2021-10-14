import { Form, Input, Button, Divider } from "antd";
import { upperCase } from "lodash";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from '../../../firebase';

const InfluencerLogin = () => {

  const history = useHistory();

  const onFinish = (values: any) => {
    let email = values.emailOrMobile;
    let password = values.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      history.push('/influencer/dashboard');
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error.code);
    });
  };

  return (
    <div className="tw-p-8 tw-shadow-card tw-rounded-lg">
      <div>
        <h4 className="tw-font-medium tw-text-2xl tw-mb-4">
          Login to your account
        </h4>
        <p className="tw-text-secondary-color tw-font-lato tw-mb-10">
          In fames morbi dictumst faucibus. Enim in aenean tincidunt dolor at id
          risus non. Vel aliquet sapien, ornare nec in turpis a proin.
        </p>
      </div>
      <Form
        name="loginForm"
        layout="vertical"
        size="large"
        onFinish={onFinish}
      >
        <Form.Item
          label="Email / Mobile No"
          name="emailOrMobile"
          rules={[
            { required: true, message: "Please input your email / mobile no!" },
          ]}
        >
          <Input
            placeholder="Enter Your Email / Mobile No"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Enter Your Password"
            className="tw-rounded-lg"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="link"
            className="tw-m-0 tw-p-0 tw-text-secondary-color hover:tw-text-secondary-color focus:tw-text-secondary-color"
          >
            <span className="tw-underline tw-text-xs">Forgot password</span>
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            className="tw-w-full tw-texa-button tw-m-0"
            htmlType="submit"
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="center" className="">
        <span className="tw-text-secondary-color tw-text-sm tw-font-normal">
          OR
        </span>
      </Divider>
      <Link to="/influencer/signup">
        <Button
          type="default"
          className="tw-w-full tw-bg-gray-background hover:tw-bg-gray-background focus:tw-bg-gray-background tw-mt-1"
        >
          {upperCase("Sign Up and Get Started")}
        </Button>
      </Link>
    </div>
  );
};

export default InfluencerLogin;
