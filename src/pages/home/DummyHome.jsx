import React, { useContext } from "react";
import Store from "../../utils/store";
import Header from "../../components/header";

const DummyHome = () => {
  const [appStore] = useContext(Store);
  const {
    user: { loginStatus, data: userDetails },
  } = appStore;
  return (
   <> 
      <Header />
   <div className="flex flex-center">
      <h1>
        Hello{" "}
        {loginStatus
          ? userDetails.firstName + " " + userDetails.lastName
          : "anonymous"}
      </h1>
    </div></>
  );
};

export default DummyHome;
