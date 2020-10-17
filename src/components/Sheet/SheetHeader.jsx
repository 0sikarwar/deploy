import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SheetHeader extends PureComponent {
  closeButtonClicked = () => {
    this.props.onClose('closeButton');
  }
  render() {
    return (
      <div className="Sheet__header">
        {this.props.showCloseButton &&
          <span
            role="button"
            className="Sheet__close flex flex-middle flex-center"
            onClick={this.closeButtonClicked}
            style={{ height: '20px', width: '20px' }}
          >
            &times;
          </span>
        }
        <p className="Sheet__title lh-title ta-center fw-600" width="80%">
          {this.props.title}
        </p>

        <a
          onClick={this.props.secondaryActionClick}
          className="Sheet__secondaryAction"
        >
          {this.props.secondaryAction}
        </a>
      </div>
    )
  }
}

SheetHeader.propTypes = {
  /**
   * Title of the Sheet.
   */
  title: PropTypes.string,
  /**
   * Sub Title of the Sheet.
   */
  subtitle: PropTypes.string,
  /**
   * Close event of the Sheet.
   */
  onClose: PropTypes.func,
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
  secondaryActionClick: PropTypes.func
}

SheetHeader.defaultProps = {
  title: '',
  subtitle: '',
  onClose: event => { },
  showCloseButton: true,
  secondaryAction: '',
  secondaryActionClick: () => { }
}

export default SheetHeader
