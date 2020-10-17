import React, { useContext, useState } from "react";
import Store from "../../utils/store";
import Header from "../../components/header";
import Modal from "../../components/modal";
import Sheet from "../../components/Sheet";
import Login from "../login";
import Register from "../register";
import { checkMobileDevice } from "../../utils";

const Home = () => {
  const [appStore] = useContext(Store);
  const [entryPoint, setEntryPoint] = useState(null);
  const {
    user: { loginStatus, data: userDetails },
  } = appStore;
  const handleEntriesClick = (type) => {
    setEntryPoint(type);
  };
  const closeModal = () => {
    setEntryPoint(null);
  };
  return (
    <>
      <Header handleEntriesClick={handleEntriesClick} />
      <div className="flex flex-center">
        <h1>
          Hello{" "}
          {loginStatus
            ? userDetails.firstName + " " + userDetails.lastName
            : "anonymous"}
        </h1>
      </div>
      {entryPoint && (
        (checkMobileDevice() ?
        <Sheet onClose={closeModal} isOpen={true}>
          {entryPoint === "login" ? (
            <Login changeEntryPoint={handleEntriesClick} />
          ) : (
            <Register changeEntryPoint={handleEntriesClick} />
          )}
        </Sheet>
        : 
        <Modal onClose={closeModal}>
          {entryPoint === "login" ? (
            <Login changeEntryPoint={handleEntriesClick} />
          ) : (
            <Register changeEntryPoint={handleEntriesClick} />
          )}
        </Modal>)
      )}
    </>
  );
};

export default Home;
