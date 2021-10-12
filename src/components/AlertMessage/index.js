import React, { useEffect } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { toggleSnackbarClose } from './alertRedux/actions';
import { Container, SuccessIconButton, ErrorIconButton, SuccessMessage, CrossIcon, ShowSnackBarButton } from './style';

const Snackbar = () => {
  const dispatch = useDispatch();
  const { show, message, type } = useSelector((state) => {
    const {
      uiReducer: { toggleSnackbar, snackbarMessage, messageType },
    } = state;

    return {
      show: toggleSnackbar,
      message: snackbarMessage,
      type: messageType,
    };
  }, shallowEqual);

  let TIMER;
  const TIME = 4000;

  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, TIME);
  }

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  useEffect(() => {
    if (show) {
      handleTimeout();
    }

    return () => {
      clearTimeout(TIMER);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, TIMER]);

  return (
    show && (
      <Container color={type === 'success' ? 'green' : 'red'} time={TIME / 1000 + 's'}>
        {type === 'success' ? <SuccessIconButton /> : <ErrorIconButton />}

        <SuccessMessage>{message}</SuccessMessage>
        <ShowSnackBarButton onClick={() => handleClose()}>
          <CrossIcon />
        </ShowSnackBarButton>
      </Container>
    )
  );
};

export default Snackbar;
