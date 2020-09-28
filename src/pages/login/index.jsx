import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import {
  resetLoginUser,
  getLoginUserSuccess
} from "../../actions/login";
import { loginUser } from "../../utils/userHelper"
import Input from "../../components/input"
import Store from '../../utils/store'

const LoginPage = (props) => {
  const [, dispatch] = useContext(Store)
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });
  const[submitted, setSubmitted] = useState(false)
  const [validateObj, setValidatObj]= useState({
    username: false,
    password: false 
  })
  const[loginResp, setLoginResp] = useState(null)
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);
  useEffect(() => {
    let userData = null;
    if (typeof Storage !== "undefined") {
      userData = JSON.parse(sessionStorage.getItem("userData"));
    }
    const { email } = userData || {};
    if (email) {
      props.history.push("/");
    }
  }, [props.history]);
  useEffect(()=>{
    if(loginResp){
      dispatch(getLoginUserSuccess(loginResp))
      props.history.push("/");
    }
  },[loginResp])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({...userDetails, [name]: value });
    setValidatObj({...validateObj, [name]:false})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { username, password } = userDetails;
    setValidatObj({
      username: !username,
    password: !password 
    })
    if (username && password) {
      const userData = {
        userDocument: { loginId: username, password: password },
      };
      loginUser(
        userData,
        setLoginResp,
        setValidatObj
      );
    }
  };

  const resetLogin = () => {
    resetLoginUser();
  };
  return (
    <div className="pr-16 pl-16 wt-90p hCenter p-relative max-wt-500">
      <div className="flex flex-middle flex-between">
        <h2>Login</h2>
        <Link to="/register" onClick={resetLogin} className="btn btn-link decoration-none">
          Register
        </Link>
      </div>
      <form name="form" onSubmit={handleSubmit}>
      <Input
            label="Email Id"
            type="email"
            ref={userNameRef}
            inputContainerClass="mb-16"
            className="form-input"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            hasError={validateObj.username}
            errMsg={submitted && !userDetails.username?"Email id is required":"Not a Registered user Register now"}
          />
          <Input
            label="Password"
            type="password"
            ref={passwordRef}
            inputContainerClass="mb-16"
            className="form-input"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            hasError={validateObj.password}
            errMsg={submitted && !userDetails.password?"Password is required":"Password did not matched with Email Id"}
            hideStrengthBar={true}
          />
        <div className="mb-16">
          <button className="btn btn-primary">Login</button>
          <Link to="/" className="btn btn-link decoration-none">
            cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
