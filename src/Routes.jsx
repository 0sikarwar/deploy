import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/index.scss";
import Login from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/home";
import DummyHomePage from "./pages/home/DummyHome";
import ResetPass from "./pages/resetPass";
import { getLoginUserSuccess } from "./actions/login";
import Store from "./utils/store";

const Routes = () => {
  const [, dispatch] = useContext(Store);
  const [verifiedUser, setVerifiedUser] = useState(false);
  useEffect(() => {
    let userData = null;
    if (typeof Storage !== "undefined") {
      userData = JSON.parse(sessionStorage.getItem("userData"));
    }
    const { email } = userData || {};
    if (email) {
      dispatch(getLoginUserSuccess(userData));
    }
    setVerifiedUser(window.prompt("whats your key", "default") === "2665");
  }, []);
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) =>
          verifiedUser ? <HomePage {...props} /> : <DummyHomePage />
        }
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/resetPass/:token" component={ResetPass} />
    </Switch>
  );
};
export default Routes;
