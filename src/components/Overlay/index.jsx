import React from "react";
import classNames from "classnames";

const Overlay = ({ className, children }) => {
  return (
    <div
      className={classNames(
        "p-fixed l-0 r-0 b-0 t-0 flex flex-center flex-middle z-10",
        className
      )}
      style={{
        backgroundColor: "rgba(0, 0, 0,0.2)",
      }}
    >
      {children}
    </div>
  );
};

export default Overlay;
