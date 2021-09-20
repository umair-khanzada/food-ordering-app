import React from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

import Button from '../Button/Button';
const AlertModal = ({ handleClose, open, onConfirm, content }) => {
  return (
    <div>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} property="Cancel" />
          <Button
            autoFocus
            color="primary"
            onClick={() => {
              onConfirm();
              handleClose();
            }}
            property="Confirm"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AlertModal;
