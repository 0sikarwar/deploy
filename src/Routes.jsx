import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/index.scss";
import Login from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/home";
import {
	getLoginUserSuccess
} from "./actions/login";
import Store from "./utils/store";

const Routes =() => {
	const [, dispatch] = useContext(Store);
	useEffect(()=>{

		let userData = null;
		if (typeof Storage !== "undefined") {
			userData = JSON.parse(sessionStorage.getItem("userData"));
		}
		const { email } = userData || {};
		if (email) {
			dispatch(getLoginUserSuccess(userData));
		}
	},[]);
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	);
};
export default Routes;