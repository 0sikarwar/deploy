import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { ReactComponent as CrossIcon } from './cross.svg'
import Truncate from './Truncate'

const Toast = ({className, ctaText, message, error, onCtaClick, closeBtn, onClose}) => {
  const [close, setClose] = useState(false)
  const toastClassName = classNames(
    'wt-90p p-16 br-4 flex flex-middle flex-between elevation-3 float-r mr-12 max-wt-500 z-10', {
      'bg-red' : error === true,
      'bg-light-black' : !error
    },
    className
  )
  
  const ctaClassName = classNames(
    'fs-14 c-pointer fw-bold mr-24 mr-24' , {
    'c-white' : error === true,
    'c-light-blue' : !error
    }
  )

  const onCloseClick = (event) => {
    setClose(!close)
    onClose(event)
  }

  return (
    <>
      {!close && (
        <div className={toastClassName}>
        <Truncate as='span' width={ctaText && closeBtn ? 850 : null} className="fs-14 c-white">{message}</Truncate>
        <div className="flex flex-middle">
          {ctaText && (
            <span className={ctaClassName} onClick={onCtaClick}>{ctaText}</span>
          )}
          {closeBtn && (
            <div className='br-100 flex flex-center flex-middle c-pointer' onClick={onCloseClick} style={{
              height: '20px',
              width: '20px',
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}>
              <CrossIcon stroke="#fff" height={'12'} width={'12'}/>
            </div>
          )}
        </div>
      </div>
      )}
    </>
  )
  
}

Toast.defaultProps = {
  className: '',
  error: false,
  ctaText: '',
  message: '',
  closeBtn: true,
  onClose: () => {}
}
Toast.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  ctaText: PropTypes.string,
  message: PropTypes.string,
  closeBtn: PropTypes.bool,
  onClose: PropTypes.func
}

Toast.displayName = 'Toast'

export default Toast