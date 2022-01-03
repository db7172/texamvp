/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailRegex } from "../../../constant/comman.const";
import { upperCase } from "../../../utils/utils";
import MobileNumber from "../../form-component/MobileNumber";
import firebaseUser from "../../../firebaseUser";

const VERIFICATION_CODE = 1234;

export const LoginModal = ({ header, onCancel }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isLoginByMobile, setIsLoginByMobile] = useState(true);
  const [isVerifing, setIsVerifing] = useState(false);
  const [showLoginInput, setShowLoginInput] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newEmailError, setNewEmailError] = useState({
    error: false,
    msg: "Please enter valid email.",
  });
  const [userNameError, setUserNameError] = useState({
    error: false,
    msg: "Please enter your name.",
  });
  const [isError, setIsError] = useState({
    error: false,
    msg: "",
  });
  const [isVerificationCodeError, setIsVerificationCodeError] = useState({
    error: false,
    msg: "Verification Code is invalid.",
  });

  const description = isVerifing
    ? `An OTP (valid for next 15 mins.) has been sent to you on your ${
        !isLoginByMobile && " 98256XXXXX "
      } Mobile number`
    : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print";

  const handleValidation = () => {
    let isError = false;
    if (isLoginByMobile) {
      const numberLength = phoneNumber.length;
      if (numberLength !== 10) {
        setIsError({
          error: true,
          msg: "Please enter valid number.",
        });
        isError = true;
      }
    } else {
      if (!emailRegex.test(emailId)) {
        setIsError({
          error: true,
          msg: "Please enter valid email.",
        });
        isError = true;
      }
    }
    return isError;
  };

  const compareCode = () => {
    // if (VERIFICATION_CODE === +verificationCode) {
    //   window.alert("Logged in successful.");
    //   onCancel();
    // } else {
    //   setIsVerificationCodeError({
    //     ...isVerificationCodeError,
    //     error: true,
    //   });
    // }
    const code = verificationCode;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        firebaseUser
          .firestore()
          .collection("users")
          .doc(user.id)
          .get()
          .then((doc) => {
            if (!doc.exists) {
            }
          });
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setIsVerificationCodeError({
          ...isVerificationCodeError,
          error: true,
        });
      });
  };

  const handleVerify = () => {
    if (isSigningIn) {
      if (isLoginByMobile) {
        compareCode();
      } else {
        compareCode();
      }
    } else {
      const validEmail = emailRegex.test(newEmail);
      const validCode = VERIFICATION_CODE === +verificationCode;
      if (!validEmail) {
        setNewEmailError({
          ...newEmailError,
          error: true,
        });
      }

      if (!validCode) {
        setIsVerificationCodeError({
          ...isVerificationCodeError,
          error: true,
        });
      }

      if (!userName) {
        setUserNameError({
          ...userNameError,
          error: true,
        });
      }

      if (validEmail && validCode && userName) {
        window.alert(`Hello ${userName}, Signed up successful.`);
        onCancel();
      }
    }
  };

  const activeVerificationMode = () => {
    setIsVerifing(true);
    if (!isLoginByMobile) {
      setShowLoginInput(false);
    }
  };

  function configureRecaptcha() {
    window.recaptchaVerifier = new firebaseUser.auth.RecaptchaVerifier(
      "sign-in-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("Recaptcha verified");
        },
      }
    );
  }

  function onSignInSubmit() {
    configureRecaptcha();
    const number = "+91" + phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    firebaseUser
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP sent.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = () => {
    if (!handleValidation()) {
      onSignInSubmit();
      activeVerificationMode();
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setUserNameError({
      ...userNameError,
      error: false,
    });
  };

  const handleVerificationCodeInput = (e) => {
    setVerificationCode(e.target.value);
    setIsVerificationCodeError({
      ...isVerificationCodeError,
      error: false,
    });
  };

  const handleLoginMethod = () => {
    setIsError({
      error: false,
      msg: "",
    });
    setIsLoginByMobile(!isLoginByMobile);
  };

  const handleNumberChange = (value) => {
    setEmailId("");
    setPhoneNumber(value);
    setIsError({
      error: false,
      msg: "",
    });
  };

  const handleEmailChange = (e) => {
    setPhoneNumber("");
    setEmailId(e.target.value);
    setIsError({
      error: false,
      msg: "",
    });
  };

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
    setNewEmailError({
      ...newEmailError,
      error: false,
    });
  };

  const handleSignUp = () => {
    setIsError({
      error: false,
      msg: "",
    });
    setIsLoginByMobile(true);
    setIsSigningIn(!isSigningIn);
  };

  return (
    <dialog className="tw-modal">
      <div className="tw-modal-backdrop" />
      <div className="tw-modal-container tw-max-w-lg">
        <div className="tw-modal-header">
          <p className="tw-modal-title">{header}</p>
          <svg
            className="tw-w-6 tw-h-6 tw-cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onCancel}
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="tw-modal-body tw-px-12">
          <div id="sign-in-container"></div>
          <div>
            <div className="tw-flex tw-flex-col tw-items-center">
              <h1 className="tw-font-bold tw-text-2xl">
                {isSigningIn ? "Log in " : "Welcome "} to Texatrove
              </h1>
              <p className="tw-w-9/12 tw-text-center tw-text-secondary-color tw-mt-3">
                {description}
              </p>
            </div>
            <div className="tw-mt-11">
              {showLoginInput && (
                <>
                  {isLoginByMobile ? (
                    <>
                      <MobileNumber
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleNumberChange}
                        disabled={isVerifing}
                      />
                    </>
                  ) : (
                    <div className="tw-p-0.5">
                      <input
                        className="tw-form-input tw-py-2 tw-rounded-lg tw-text-base tw-font-normal focus:tw-outline-none"
                        type="email"
                        name="emailId"
                        id="emailId"
                        value={emailId}
                        placeholder="Enter the Email id"
                        onChange={handleEmailChange}
                      />
                    </div>
                  )}
                  <div className="tw-flex tw-justify-between tw-mt-2">
                    <p className="tw-text-red-700 tw-text-xs">
                      {isError.error && isError.msg}
                    </p>
                    <div>
                      <p className="tw-text-right tw-text-blue-700 tw-cursor-pointer">
                        {isVerifing ? (
                          <button
                            className=" tw-underline"
                            onClick={() => setIsVerifing(false)}
                          >
                            Edit Number
                          </button>
                        ) : (
                          <button
                            className=" tw-underline"
                            onClick={() => {
                              handleLoginMethod();
                              console.log("clicked");
                            }}
                          >
                            {isLoginByMobile
                              ? "Login With Email"
                              : "Login With Number"}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isVerifing && (
                <div className="tw-p-0.5">
                  <input
                    className="tw-form-input tw-mt-4 tw-py-2 tw-rounded-lg tw-text-base tw-font-normal focus:tw-outline-none"
                    type="text"
                    name="verificationCode"
                    value={verificationCode}
                    onChange={handleVerificationCodeInput}
                    placeholder="Enter One Time Password"
                  />
                  <p className="tw-text-red-700 tw-text-xs tw-mt-2">
                    {isVerificationCodeError.error &&
                      isVerificationCodeError.msg}
                  </p>
                </div>
              )}

              {Boolean(isVerifing && !isSigningIn) && (
                <div className="tw-mt-4">
                  <div className="tw-p-0.5">
                    <input
                      className="tw-form-input tw-py-2 tw-rounded-lg tw-text-base tw-font-normal focus:tw-outline-none"
                      type="newEmail"
                      name="newEmail"
                      id="newEmail"
                      value={newEmail}
                      placeholder="Enter the Email id"
                      onChange={handleNewEmailChange}
                    />

                    <p className="tw-text-red-700 tw-mt-2 tw-text-xs">
                      {newEmailError.error && newEmailError.msg}
                    </p>
                  </div>
                  <div className="tw-p-0.5">
                    <input
                      className="tw-form-input tw-mt-4 tw-py-2 tw-rounded-lg tw-text-base tw-font-normal focus:tw-outline-none"
                      type="text"
                      name="userName"
                      value={userName}
                      placeholder="Enter Your Name"
                      onChange={handleUserNameChange}
                    />
                    <p className="tw-text-red-700 tw-mt-2 tw-text-xs">
                      {userNameError.error && userNameError.msg}
                    </p>
                  </div>
                </div>
              )}

              {isVerifing ? (
                <button
                  className="tw-bg-secondary-color tw-w-full tw-mt-7 tw-font-medium tw-px-6 tw-py-3 tw-rounded-md"
                  onClick={handleVerify}
                >
                  {upperCase("VERIFY")}
                </button>
              ) : (
                <>
                  <button
                    className="tw-bg-secondary-color tw-w-full tw-mt-7 tw-font-medium tw-px-6 tw-py-3 tw-rounded-md"
                    onClick={handleSubmit}
                  >
                    {isSigningIn ? upperCase("LOGIN") : upperCase("CONTINUE")}
                  </button>
                </>
              )}
            </div>
            <div className="tw-mt-5">
              <p className="tw-text-center tw-mt-2 tw-text-blue-700">
                {isVerifing ? (
                  <>
                    <button className=" tw-underline" onClick={handleSignUp}>
                      Resend OTP
                    </button>
                    <p>(0:59)</p>
                  </>
                ) : (
                  <button className=" tw-underline" onClick={handleSignUp}>
                    {isSigningIn
                      ? "New User ? Sign Up"
                      : "Already Sign Up ? Login"}
                  </button>
                )}
              </p>

              {!isVerifing && (
                <>
                  <div className="tw-flex tw-justify-center tw-mt-8">
                    <span className="tw-border-b tw-inline-block tw-w-5/12 tw-border-gray-color" />
                    <span className="tw-mx-3 tw-text-secondary-color tw-font-light tw-text-sm tw-relative tw--bottom-2">
                      OR
                    </span>
                    <span className="tw-border-b tw-inline-block tw-w-5/12 tw-border-gray-color" />
                  </div>
                  <div className="tw-mt-10">
                    <p className="tw-text-base tw-text-center tw-font-medium tw-text-secondary-color">
                      Or Signin As a{" "}
                      <Link to="/influencer">
                        <button
                          className="tw-text-blue-500 tw-underline"
                          onClick={onCancel}
                        >
                          Travel Influancer
                        </button>
                      </Link>
                    </p>
                  </div>
                </>
              )}

              <div className="tw-w-10/12 tw-mx-auto tw-mt-14">
                <p className="tw-text-secondary-color tw-font-light">
                  Having trouble? Please contact help@texatrove.com for further
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tw-modal-footer tw-justify-end">
          <button
            className="tw-mr-2 tw-text-blue-600 hover:tw-text-blue-600"
            size="regular"
            variant="text"
            onClick={onCancel}
          >
            Discard
          </button>
          <button
            size="regular"
            theme="primary"
            type="submit"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </button>
        </div> */}
      </div>
    </dialog>
  );
};
