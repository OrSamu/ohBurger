import React from 'react';

import classes from './overlay.module.css';

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
  )
}

export default Overlay