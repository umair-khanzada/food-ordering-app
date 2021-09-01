import React from 'react';

// eslint-disable-next-line import/order
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <Backdrop clicked={props.modalClosed} show={props.show} />

      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
