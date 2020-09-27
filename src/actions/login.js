export const GET_LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const RESET_LOGIN_USER = "RESET_LOGIN_USER";


export const getLoginUserSuccess = userData => {
	console.log("getLoginUserSuccess");
	return {
		type: GET_LOGIN_USER_SUCCESS,
		data: userData
	};
};
export const resetLoginUser = () => ({
	type: RESET_LOGIN_USER
});