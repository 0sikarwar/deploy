import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { heading, onClose } = this.props;
    return (
      <div className="screen">
        <div className="modal">
          {heading && <h2>{heading}</h2>}
          <span className="close c-pointer" onClick={onClose}>
            &times;
          </span>
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Modal;
