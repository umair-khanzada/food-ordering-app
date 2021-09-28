import React from 'react';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { closeModal } from './action';
import { ContentTextConatiner, DialogContainer } from './style';
const AlertModal = ({ modalButtons, children }) => {
  const dispatch = useDispatch();
  const toggleModal = useSelector(({ modalReducer }) => modalReducer.isToggleModal);

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
          <ContentTextConatiner>{children}</ContentTextConatiner>
        </DialogContent>
        <DialogActions>
          {modalButtons.map(({ property, clickHandler }) => {
            return <Button key={property} onClick={clickHandler} property={property} />;
          })}
        </DialogActions>
      </Dialog>
    </DialogContainer>
  );
};
export default AlertModal;
