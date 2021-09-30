import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleSnackbarClose } from './alertRedux/actions';
import { Container, CrossIcon, SuccessMessage, BTN, SuccessIconButton, ErrorIconButton } from './style';

const Snackbar = ({ timeout, type }) => {
  const dispatch = useDispatch();
  const {
    uiReducer: { toggleSnackbar: SHOW, snackbarMessage: MESSAGE },
  } = useSelector((state) => state);

  let TIMER;

  const TIME = (timeout - 500) / 1000 + 's';

  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, timeout);
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  useEffect(() => {
    if (SHOW) {
      handleTimeout();
    }

    return () => {
      clearTimeout(TIMER);
    };
  }, [SHOW, TIMER]);

  return (
    SHOW && (
      <Container color={type === 'success' ? 'green' : 'red'} time={TIME}>
        {type === 'success' ? <SuccessIconButton /> : <ErrorIconButton />}

        <SuccessMessage>{MESSAGE}</SuccessMessage>
        <BTN onClick={handleClose}>
          <CrossIcon />
        </BTN>
      </Container>
    )
  );
};

export default Snackbar;
