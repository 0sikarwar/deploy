import React, { useEffect, useState, useContext } from "react";
import { validatePassword } from "utils";
import { resetPass } from "utils/userHelper";
import Input from "components/input";
import Store from "utils/store";
import Pageloader from "components/pageloader";
import PwaModal from "components/PwaModal";
import Overlay from "components/Overlay";
import { path } from "utils";
import Toast from "components/Toast";
import {setEntryPoint} from "actions/ui"

const ResetPass = (props) => {
  const [, dispatch] = useContext(Store);
  const [userDetails, setUserDetails] = useState({
    password: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [strengthPass, setStrengthPass] = useState("");
  const [resetPassResp, setResetPassResp] = useState(null);
  const [validateObj, setValidatObj] = useState({
    password: false,
    password2: false,
  });
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    let userData = null;
    if (typeof Storage !== "undefined") {
      userData = JSON.parse(sessionStorage.getItem("userData"));
    }
    const { email } = userData || {};
    if (email) {
      props.history.push("/");
    }
  }, [props.history]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      const strengthPass = validatePassword(value);
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
      password: !userDetails.password,
      password2: userDetails.password !== userDetails.password2,
    });
    if (
      userDetails.password &&
      userDetails.password === userDetails.password2
    ) {
      setLoading(true);
      const userData = {
        userDocument: {
          password: userDetails.password,
          token: path(["match", "params", "token"], props),
        },
      };
      resetPass(
        userData,
        setResetPassResp,
        setValidatObj,
        setLoading,
        setToastMsg
      );
    }
  };
  const goToLogin = () => {
    props.history.push("/");
    dispatch(setEntryPoint("login"))
  }
  return (
    <>
      {loading && <Pageloader className="o-70" />}
      {validateObj.wrongUrl && (
        <Overlay>
          <PwaModal
            title={"Wrong url"}
            type="Error"
            onPrimaryAction={() => {
              props.history.push("/");
            }}
            primaryButton="OK"
            message={`You hit the Wrong url. Go to Home Page`}
          />
        </Overlay>
      )}
      {resetPassResp && (
        <Overlay>
          <PwaModal
            title={"Password changed"}
            type="success"
            onPrimaryAction={goToLogin}
            primaryButton="OK"
            message={`Password changed Successfully Login now`}
          />
        </Overlay>
      )}
      <div className="pr-16 pl-16 wt-90p hCenter p-relative max-wt-500">
        <div className="flex flex-middle flex-between">
          <h2>Reset Password</h2>
          <div onClick={goToLogin} className="btn btn-link decoration-none">
            {" "}
            LogIn
          </div>
        </div>

        <form name="form" onSubmit={handleSubmit}>
          <Input
            label="New Password"
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
            label="Confirm New Password"
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
            <button className="btn btn-primary">Reset</button>
          </div>
        </form>
      </div>
      {toastMsg && (
        <Toast
          message={toastMsg}
          closeBtn={true}
          onClose={() => {
            setToastMsg("");
          }}
          error
        />
      )}
    </>
  );
};

export default ResetPass;
