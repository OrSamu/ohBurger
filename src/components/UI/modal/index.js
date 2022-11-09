import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './backdrop';
import Overlay from './overlay';

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onCloseModal}/>, portalElement)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
  )
}

export default Modal