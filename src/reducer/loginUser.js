import {
    GET_LOGIN_USER_SUCCESS,
    RESET_LOGIN_USER
} from "actions/login";
import {
    GET_REGISTER_USER_SUCCESS,
} from "actions/register";
export default (state, action) => {
    let newState;
    if (action.type === GET_LOGIN_USER_SUCCESS) {
        newState = {
            ...state,
            loginStatus: true,
            data: action.data,
            submission: 'success'

        }
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("userData", JSON.stringify(action.data));
        }
    } else if (action.type === GET_REGISTER_USER_SUCCESS) {
        newState = {
            ...state,
            loginStatus: true,
            data: action.data,
            submission: 'success'
        }
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("userData", JSON.stringify(action.data));
        }
    } else if (action.type === RESET_LOGIN_USER) {
        newState = {
            ...state,
            loginStatus: false,
        }
    }
    return newState || state;
}