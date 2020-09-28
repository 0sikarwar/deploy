import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  getRegisterUserSuccess
} from "../../actions/register";
import { validatePassword } from "../../utils";
import { registerUser } from "../../utils/userHelper"
import Input from "../../components/input"
import Store from '../../utils/store'

const RegisterPage = (props) => {
  const [, dispatch] = useContext(Store)
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    loginId: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [strengthPass, setStrengthPass] = useState("");
  const [registerResp, setRegisterResp] = useState(null)
  const [validateObj, setValidatObj]= useState({
    firstName: false ,
    lastName: false ,
    loginId: false ,
    password: false 
  })
  const passwordRef = useRef(null);

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
    if(registerResp) {
      dispatch(getRegisterUserSuccess(registerResp))
      props.history.push("/");
    } 
  },[registerResp])

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      const strengthPass = validatePassword(
        value,
        userDetails.firstName,
        userDetails.loginId
      );
      setStrengthPass(strengthPass);
    }
    setValidatObj({...validateObj, [name]:false})
    setUserDetails({ ...userDetails, [name]: value });
    submitted && setSubmitted(false);
    console.log(strengthPass);
  };

  const passwordFocused = () => {
    console.log("passwordFocused");
    setStrengthPass(strengthPass || "weak");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setValidatObj({
      firstName: !userDetails.firstName ,
    lastName: false ,
    loginId: !userDetails.loginId ,
    password: !userDetails.password 
    })
    if (userDetails.firstName && userDetails.loginId && userDetails.password) {
      const userData = { userDocument: userDetails };
      registerUser(
        userData,
        setRegisterResp,
        setValidatObj
      );
    }
  };
  return (
    <div className="pr-16 pl-16 wt-90p hCenter p-relative max-wt-500">
      <div className="flex flex-middle flex-between">
        <h2>Register</h2>
        <Link to="/login" className="btn btn-link decoration-none">
          {" "}
          LogIn
        </Link>
      </div>

      <form name="form" onSubmit={handleSubmit}>
          <Input
            label="First Name"
            type="text"
            inputContainerClass="mb-16"
            className="form-input"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            hasError={validateObj.firstName}
            errMsg="First Name is required"
          />
          <Input
            label="Last Name"
            type="text"
            inputContainerClass="mb-16"
            className="form-input"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
          />
          <Input
            label="Email Id"
            type="email"
            inputContainerClass="mb-16"
            className="form-input"
            name="loginId"
            value={userDetails.loginId}
            onChange={handleChange}
            hasError={validateObj.loginId}
            errMsg={submitted && !userDetails.loginId?"Email id is required":"Already have an id login now"}
          />
          <Input
            ref={passwordRef}
            label="Password"
            type="password"
            inputContainerClass="mb-16"
            className="form-input"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            hasError={validateObj.password}
            onFocus={passwordFocused}
            errMsg="Password is required"
            strengthPass={strengthPass}
          />
        <div className="mb-16">
          <button className="btn btn-primary">Register</button>
          <Link to="/" className="btn btn-link decoration-none">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
