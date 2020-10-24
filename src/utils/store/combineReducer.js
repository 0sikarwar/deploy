import loginReducer from "reducer/loginUser.js";
import uiReducer from "reducer/ui"
const mainReducer = (initialState, action)=>{
	return({
		user: loginReducer(initialState.user, action),
		ui: uiReducer(initialState.ui, action)
	});
};

export default mainReducer;