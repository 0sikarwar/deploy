import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "../../utils/store";
import { resetLoginUser } from "../../actions/login";

const Header = (props) => {
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
  const handleEntriesClick = (type) => {
    props.handleEntriesClick(type);
  };
  return (
    <div className="header">
      {!loginStatus ? (
        <>
          <div
            className="pl-16 pr-16 c-light-blue decoration-none c-pointer"
            onClick={() => {
              handleEntriesClick("login");
            }}
          >
            Login
          </div>
          <div
            className="pr-16 c-light-blue decoration-none c-pointer"
            onClick={() => {
              handleEntriesClick("register");
            }}
          >
            Register
          </div>
        </>
      ) : (
        <>
          <div className="pl-16 pr-16">{userDetails.email}</div>
          <div className="pr-16 c-pointer c-light-blue c-pointer" onClick={handleLogout}>
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
