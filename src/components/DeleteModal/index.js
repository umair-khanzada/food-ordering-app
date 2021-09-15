import React from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

import Button from '../Button/Button';
const DeleteModal = ({ handleClose, open, onRowDelete }) => {
  return (
    <div>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="alert-dialog-title">User</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure you want to delete ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} property="Disagree" />
          <Button
            autoFocus
            color="primary"
            onClick={() => {
              onRowDelete();
              handleClose();
            }}
            property="Agree"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DeleteModal;
