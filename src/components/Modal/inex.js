import React from 'react';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { closeModal } from './action';
import { ContentTextConatiner, DialogContainer } from './style';
const AlertModal = ({ onConfirm, content }) => {
  const dispatch = useDispatch();
  const toggleModal = useSelector(({ modalReducer }) => {
    return modalReducer.isToggleModal;
  }, shallowEqual);

  return (
    <DialogContainer>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={() => {
          dispatch(closeModal());
        }}
        open={toggleModal}
      >
        <DialogContent>
          <ContentTextConatiner>{content}</ContentTextConatiner>
        </DialogContent>
        <DialogActions>
          <Button color="red" onClick={() => dispatch(closeModal())} property="Cancel" />
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
    </DialogContainer>
  );
};
export default AlertModal;
