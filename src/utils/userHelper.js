import {
  REGISTER_API_URL,
  REGISTER_RESPONSE_STATUS_FOR_SUCCESS,
  REGISTER_RESPONSE_STATUS_EXISTING_ID,
  LOGIN_API_URL,
  LOGIN_RESPONSE_STATUS_FOR_SUCCESS,
  LOGIN_RESPONSE_STATUS_FOR_WRONG_PASS,
  LOGIN_RESPONSE_STATUS_FOR_WRONG_ID,
  FORGOT_PASS_API_URL,
  RESET_PASS_API_URL,
  HTTP_STATUS_FOR_SUCCESS,
  RESET_PASS_RESPONSE_STATUS_FOR_WRONG_URL,
} from "./commonConstants";
import { postCall } from "./api";
export async function registerUser(
  userData,
  setRegisterResp,
  setValidatObj,
  setLoading,
  setToastMsg
) {
  try {
    console.log("registerUser", userData);
    const data = await postCall(REGISTER_API_URL, userData);
    setLoading(false);
    const { loginResponseStatus } = data || {};
    if (loginResponseStatus === REGISTER_RESPONSE_STATUS_FOR_SUCCESS) {
      setRegisterResp(data.userData);
    } else if (loginResponseStatus === REGISTER_RESPONSE_STATUS_EXISTING_ID) {
      setValidatObj({ loginId: true });
    }
  } catch (e) {
    setLoading(false);
    setToastMsg("Something went wrong try again later.");
    console.log("API ERROR", e);
  }
}

export async function loginUser(
  userData,
  setLoginResp,
  setValidatObj,
  setLoading,
  setToastMsg
) {
  try {
    console.log("loginUser", userData);
    const data = await postCall(LOGIN_API_URL, userData);
    setLoading(false);
    const { loginResponseStatus } = data || {};
    console.log(data);
    if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_SUCCESS) {
      setLoginResp(data.userData);
    } else if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_WRONG_PASS) {
      setValidatObj({ password: true });
    } else if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_WRONG_ID) {
      setValidatObj({ username: true });
    } else {
      setToastMsg("Something went wrong try again later.");
    }
  } catch (e) {
    setLoading(false);
    setToastMsg("Something went wrong try again later.");
    console.log("API ERROR", e);
  }
}

export async function forgotPass(
  userData,
  setResetResp,
  setValidatObj,
  setLoading,
  setToastMsg
) {
  try {
    console.log("registerUser", userData);
    const data = await postCall(FORGOT_PASS_API_URL, userData);
    setLoading(false);
    const { loginResponseStatus } = data || {};
    if (loginResponseStatus === HTTP_STATUS_FOR_SUCCESS) {
      setResetResp(data.userData);
    } else if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_WRONG_ID) {
      setValidatObj({ username: true });
    } else {
      setToastMsg("Something went wrong try again later.");
    }
  } catch (e) {
    setLoading(false);
    setToastMsg("Something went wrong try again later.");
    console.log("API ERROR", e);
  }
}

export async function resetPass(
  userData,
  setResetPassResp,
  setValidatObj,
  setLoading,
  setToastMsg
) {
  try {
    console.log("registerUser", userData);
    const data = await postCall(RESET_PASS_API_URL, userData);
    setLoading(false);
    const { loginResponseStatus } = data || {};
    if (loginResponseStatus === HTTP_STATUS_FOR_SUCCESS) {
      setResetPassResp(data.userData);
    } else if (
      loginResponseStatus === RESET_PASS_RESPONSE_STATUS_FOR_WRONG_URL
    ) {
      setValidatObj({ wrongUrl: true });
    } else {
      setToastMsg("Something went wrong try again later.");
    }
  } catch (e) {
    setLoading(false);
    setToastMsg("Something went wrong try again later.");
    console.log("API ERROR", e);
  }
}
