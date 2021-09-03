import React from 'react';

// eslint-disable-next-line import/order
import Backdrop from '../Backdrop/Backdrop';

import { Div } from './Style';

const Modal = ({ modalClosed, show, children }) => {
  return (
    <>
      <Backdrop clicked={modalClosed} show={show} />

      <Div
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </Div>
    </>
  );
};

export default Modal;
