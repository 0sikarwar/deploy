import React, { useContext } from "react";
import Store from "../../utils/store";
import { setEntryPoint } from "../../actions/ui";
import Header from "../../components/header";
import Modal from "../../components/modal";
import Sheet from "../../components/Sheet";
import Login from "../login";
import Register from "../register";
import { checkMobileDevice } from "../../utils";

const Home = () => {
  const [appStore, dispatch] = useContext(Store);
  const {
    user: { loginStatus, data: userDetails },
    ui: { entryPoint },
  } = appStore;
  const closeModal = () => {
    dispatch(setEntryPoint(null));
  };
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
      </div>
      {entryPoint &&
        (checkMobileDevice() ? (
          <Sheet onClose={closeModal} isOpen={true}>
            {entryPoint === "login" ? <Login /> : <Register />}
          </Sheet>
        ) : (
          <Modal onClose={closeModal}>
            {entryPoint === "login" ? <Login /> : <Register />}
          </Modal>
        ))}
    </>
  );
};

export default Home;
