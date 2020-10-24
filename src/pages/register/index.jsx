import React, { useEffect, useRef, useState, useContext } from "react";
import { getRegisterUserSuccess } from "actions/register";
import {setEntryPoint} from "actions/ui"
import { checkMobileDevice, validatePassword } from "utils";
import { registerUser } from "utils/userHelper";
import Input from "components/input";
import Store from "utils/store";
import Pageloader from "components/pageloader";
import Toast from "components/Toast";

const RegisterPage = (props) => {
  const [, dispatch] = useContext(Store);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    loginId: "",
    password: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [strengthPass, setStrengthPass] = useState("");
  const [registerResp, setRegisterResp] = useState(null);
  const [toastMsg, setToastMsg] = useState("");
  const [validateObj, setValidatObj] = useState({
    firstName: false,
    lastName: false,
    loginId: false,
    password: false,
    password2: false,
  });
  const [loading, setLoading] = useState(false);

  const passwordRef = useRef(null);

  useEffect(() => {
    if (registerResp) {
      dispatch(getRegisterUserSuccess(registerResp));
      dispatch(setEntryPoint(null))
    }
  }, [registerResp, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      const strengthPass = validatePassword(
        value,
        userDetails.firstName,
        userDetails.loginId
      );
      setStrengthPass(strengthPass);
    }
    setValidatObj({ ...validateObj, [name]: false });
    setUserDetails({ ...userDetails, [name]: value });
    submitted && setSubmitted(false);
    console.log(strengthPass);
  };

  const passwordFocused = () => {
    console.log("passwordFocused");
    setStrengthPass(strengthPass || "weak");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setValidatObj({
      firstName: !userDetails.firstName,
      lastName: false,
      loginId: !userDetails.loginId,
      password: !userDetails.password,
      password2: !userDetails.password2 || userDetails.password !== userDetails.password2,
    });
    if (
      userDetails.firstName &&
      userDetails.loginId &&
      userDetails.password &&
      userDetails.password === userDetails.password2
    ) {
      setLoading(true);
      const userData = { userDocument: userDetails };
      registerUser(
        userData,
        setRegisterResp,
        setValidatObj,
        setLoading,
        setToastMsg
      );
    }
  };
  return (
    <>
      {loading && <Pageloader className="o-70" />}
      <div className="pr-16 pl-16 wt-90p hCenter p-relative max-wt-500">
        <div className="flex flex-middle flex-between">
          <h2>Register</h2>
          <div
            className="btn btn-link decoration-none c-pointer"
            onClick={() => {
              dispatch(setEntryPoint("login"));
            }}
          >
            LogIn
          </div>
        </div>

        <form name="form" onSubmit={handleSubmit}>
          <div className={checkMobileDevice() ? "" : "flex flex-around"}>
            <Input
              label="First Name"
              type="text"
              inputContainerClass="mb-16"
              className="form-input"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
              hasError={validateObj.firstName}
              errMsg="First Name is required"
            />
            <Input
              label="Last Name"
              type="text"
              inputContainerClass="mb-16"
              className="form-input"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            label="Email Id"
            type="email"
            inputContainerClass="mb-16"
            className="form-input"
            name="loginId"
            value={userDetails.loginId}
            onChange={handleChange}
            hasError={validateObj.loginId}
            errMsg={
              submitted && !userDetails.loginId
                ? "Email id is required"
                : "Already have an id login now"
            }
          />
          <Input
            inputRef={passwordRef}
            label="Password"
            type="password"
            inputContainerClass="mb-16"
            className="form-input"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            hasError={validateObj.password}
            onFocus={passwordFocused}
            errMsg="Password is required"
            strengthPass={strengthPass}
          />
          <Input
            label="Confirm Password"
            type="password"
            inputContainerClass="mb-16"
            className="form-input"
            name="password2"
            value={userDetails.password2}
            onChange={handleChange}
            hasError={validateObj.password2}
            hideStrengthBar={true}
            errMsg={
              userDetails.password2
                ? "Please enter the same password as first one."
                : "This field is required."
            }
          />
          <div className="mb-16">
            <button className="btn btn-primary">Register</button>
            <div
              onClick={() => {
                dispatch(setEntryPoint(null));
              }}
              className="btn btn-link decoration-none"
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
      {toastMsg && (
        <div className="slide-up">
          <Toast
            message={toastMsg}
            closeBtn={true}
            onClose={() => {
              setToastMsg("");
            }}
            error
          />
        </div>
      )}
    </>
  );
};

export default RegisterPage;
