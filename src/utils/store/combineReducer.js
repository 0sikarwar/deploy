import loginReducer from "../../reducer/loginUser.js";
const mainReducer = (initialState, action)=>{
	return({
		user: loginReducer(initialState.user, action)
	});
};

export default mainReducer;