import {
  REGISTER_API_URL,
  REGISTER_RESPONSE_STATUS_FOR_SUCCESS,
  REGISTER_RESPONSE_STATUS_EXISTING_ID,
  LOGIN_API_URL,
  LOGIN_RESPONSE_STATUS_FOR_SUCCESS,
  LOGIN_RESPONSE_STATUS_FOR_WRONG_PASS,
  LOGIN_RESPONSE_STATUS_FOR_WRONG_ID,
} from "./commonConstants";
import { postCall } from "./api";
export async function registerUser(
  userData,
  setRegisterResp,
  setValidatObj
) {
  try {
    console.log("registerUser", userData);
    const data = await postCall(REGISTER_API_URL, userData);
    const { loginResponseStatus } = data || {};
    if (loginResponseStatus === REGISTER_RESPONSE_STATUS_FOR_SUCCESS) {
      setRegisterResp(data.userData);
    } else if (loginResponseStatus === REGISTER_RESPONSE_STATUS_EXISTING_ID) {
      setValidatObj({loginId: true})
    }
  } catch (e) {
    console.log("API ERROR", e);
  }
}

export async function loginUser(
  userData,
  setLoginResp,
  setValidatObj
) {
  try {
    console.log("loginUser", userData);
    const data = await postCall(LOGIN_API_URL, userData);
    const { loginResponseStatus } = data || {};
    console.log(data);
    if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_SUCCESS) {
      setLoginResp(data.userData);
    } else if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_WRONG_PASS) {
      setValidatObj({password: true})
    } else if (loginResponseStatus === LOGIN_RESPONSE_STATUS_FOR_WRONG_ID) {
      setValidatObj({username: true})
    }
  } catch (e) {
    console.log("API ERROR", e);
  }
}
