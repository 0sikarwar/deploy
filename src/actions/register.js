export const GET_REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";

export const getRegisterUserSuccess = userData => {
	console.log("getRegisterUserSuccess");
	return {
		type: GET_REGISTER_USER_SUCCESS,
		data: userData
	};
};