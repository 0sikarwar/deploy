import React, { useEffect } from "react";
import PropTypes from "prop-types";
import elementClass from "element-class";

import SheetHeader from "./SheetHeader";
import Sticky from "components/Sticky";

const Sheet = (props) => {
  useEffect(() => {
    //componentWillUnmount
    return () => {
      elementClass(document.body).remove("Sheet--open");
    };
  }, []);
  useEffect(() => {
    props.isOpen
      ? elementClass(document.body).add("Sheet--open")
      : elementClass(document.body).remove("Sheet--open");
  }, [props.isOpen]);

  const SheetHTML = (
    <div className="Sheet">
      <Sticky position="top">
        <SheetHeader
          title={props.title}
          onClose={props.onClose}
          showCloseButton={props.showCloseButton}
          secondaryAction={props.secondaryAction}
          secondaryActionClick={props.secondaryActionClick}
        />
        {props.subHeaderComponent}
      </Sticky>
      <div className="Sheet__content">{props.children}</div>
    </div>
  );
  if (props.enableAnimation) {
    return (
      <div>
        {SheetHTML}
      </div>
    );
  }
  if (props.isOpen) {
    return SheetHTML;
  }
  return null;
};

Sheet.propTypes = {
  children: PropTypes.node,
  /**
   * Whether to show the Sheet or not.
   */
  isOpen: PropTypes.bool,
  /**
   * Title of the Sheet.
   */
  title: PropTypes.string,
  /**
   * SubTitle of the Sheet.
   */
  subtitle: PropTypes.string,
  /**
   * Close event of the Sheet.
   */
  onClose: PropTypes.func,
  /**
   * Whether to enable slide up animation for Sheet. Enabled by default.
   */
  enableAnimation: PropTypes.bool,
  /*
   * Whether to show the close button or not. Default true.
   */
  showCloseButton: PropTypes.bool,
  /*
   * Show Reset button
   */
  secondaryAction: PropTypes.string,
  /*
   * Show Reset button Click
   */
  secondaryActionClick: PropTypes.func,
  subHeaderComponent: PropTypes.node,
};

Sheet.defaultProps = {
  children: null,
  isOpen: false,
  title: "",
  subtitle: "",
  onClose: (event) => {},
  enableAnimation: true,
  showCloseButton: true,
  secondaryAction: "",
  secondaryActionClick: () => {},
  subHeaderComponent: null,
};

export default Sheet;
