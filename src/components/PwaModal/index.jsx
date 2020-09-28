import React, { If } from 'react'
import PropTypes from 'prop-types'
import classnames from "classnames";

const PwaModal = (props) => {
  const _handlePrimaryAction = () => {
    props.onPrimaryAction()
  }

  const _handleSecondaryAction = () => {
    props.onSecondaryAction()
  }
    const { type, primaryButton, secondaryButton, bottom, className } = props
    const classes = classnames(
      className
    )
    return (
      <>
      <div className={"PwaModal " + (bottom ? "w-100p p-absolute b-0 PwaModal__bottom " : "") + classes}>
        <div className={"PwaModal__content " + (type === 'renderProp' ?  'pt-0 pb-0 pl-0 pr-0' : '')} >
          {type !== 'renderProp'?
            <h1 className="PwaModal__heading">{props.title}</h1>
            :''
          }
          { type==='renderProp' ? props.children :
            ( <p className="PwaModal__copy">{props.message}</p> )}
        </div>
          <div className="PwaModal__actions">
          {primaryButton &&
            <a
              className="PwaModal__action PwaModal__action--primary"
              onClick={_handlePrimaryAction}
            >
              {primaryButton}
            </a>
          }
          {secondaryButton &&
            <a className="PwaModal__action" onClick={_handleSecondaryAction}>
              {secondaryButton}
            </a>
          }
        </div> 
      </div>
      </>
    )
  }

PwaModal.defaultProps = {
  type: 'info',
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
  title: '',
  message: '',
  primaryButton: '',
  secondaryButton: '',
  bottom : false
}

export default PwaModal
