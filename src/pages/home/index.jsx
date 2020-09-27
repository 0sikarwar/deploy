import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "../../utils/store";
import { resetLoginUser } from "../../actions/login";
const Home = () => {
  const [appStore, dispatch] = useContext(Store);
  const {
    user: { loginStatus, data: userDetails },
  } = appStore;
  const handleLogout = () => {
    if (typeof Storage !== "undefined") {
      sessionStorage.removeItem("userData");
    }
    dispatch(resetLoginUser());
  };
  console.log(appStore);
  return (
    <>
      <div className="header">
        {!loginStatus ? (
          <>
            <Link className="pl-16 pr-16" to="/login">
              Login
            </Link>
            <Link className="pr-16" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <div className="pl-16 pr-16">{userDetails.email}</div>
            <div className="pr-16 c-pointer c-link" onClick={handleLogout}>
              Logout
            </div>
          </>
        )}
      </div>
      <div className="flex flex-center">
        <h1>
          Hello{" "}
          {loginStatus
            ? userDetails.firstName + " " + userDetails.lastName
            : "anonymous"}
        </h1>
      </div>
    </>
  );
};

export default Home;
