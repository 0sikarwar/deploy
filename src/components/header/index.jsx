import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Store from "../../utils/store";
import { resetLoginUser } from "../../actions/login";

const Header = () => {
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
  return (
    <div className="header">
      {!loginStatus ? (
        <>
          <Link
            className="pl-16 pr-16 c-light-blue decoration-none"
            to="/login"
          >
            Login
          </Link>
          <Link className="pr-16 c-light-blue decoration-none" to="/register">
            Register
          </Link>
        </>
      ) : (
        <>
          <div className="pl-16 pr-16">{userDetails.email}</div>
          <div className="pr-16 c-pointer c-light-blue" onClick={handleLogout}>
            Logout
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
