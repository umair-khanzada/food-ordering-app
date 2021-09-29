import React, { useEffect } from 'react';

import { CheckCircle } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { toggleSnackbarClose } from './alertRedux/actions';
import { Container, CrossIcon, SuccessMessage, BTN } from './style';

const Snackbar = ({ timeout }) => {
  const dispatch = useDispatch();
  const SHOW = useSelector((state) => state.uiReducer.toggleSnackbar);
  const MESSAGE = useSelector((state) => state.uiReducer.snackbarMessage);

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
      <Container time={TIME}>
        <CheckCircle style={{ fill: 'green' }} />
        <SuccessMessage>{MESSAGE}</SuccessMessage>
        <BTN onClick={handleClose}>
          <CrossIcon />
        </BTN>
      </Container>
    )
  );
};

export default Snackbar;
