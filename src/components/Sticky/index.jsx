import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


class Sticky extends PureComponent {
  render() {
    const stickyClass =
      `Sticky Sticky--${this.props.position}`
    
    return (
      <div>
        {this.props.position === "top" &&
          <div className="Sticky__fake">
            {this.props.children}
          </div>
        }
        <div className={classNames(stickyClass, this.props.className)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Sticky.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node
}

Sticky.defaultProps = {
  position: 'top',
  children: null
}

export default Sticky;
