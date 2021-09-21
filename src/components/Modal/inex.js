import React from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { closeModal } from './action';
const AlertModal = ({ onConfirm, content }) => {
  const dispatch = useDispatch();
  const toggleModal = useSelector(({ modalReducer }) => {
    return modalReducer.isToggleModal;
  }, shallowEqual);

  return (
    <div>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={() => {
          dispatch(closeModal());
        }}
        open={toggleModal}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => dispatch(closeModal())} property="Cancel" />
          <Button
            autoFocus
            color="primary"
            onClick={() => {
              onConfirm();
            }}
            property="Confirm"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AlertModal;
