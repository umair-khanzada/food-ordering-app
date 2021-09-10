import React from 'react';

import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { PersonRounded } from '@material-ui/icons';
import { Lock, OfflineBolt } from '@material-ui/icons';
import HistoryIcon from '@material-ui/icons/History';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Auth/actions';
const useStyles = makeStyles((theme) => ({
  nested: {
    marginRight: '6px',
  },
}));
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const history = useHistory();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <PersonRounded className={classes.nested} fontSize="small" />
        Araham Ahmed
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="simple-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
        style={{ marginTop: '40px' }}
      >
        <MenuItem onClick={() => history.push('/profile')}>
          <PersonRounded fontSize="small" />
          Profile
        </MenuItem>
        <MenuItem onClick={() => history.push('/reset-password')}>
          <Lock fontSize="small" />
          Reset Password
        </MenuItem>
        <MenuItem onClick={logOut}>
          <OfflineBolt fontSize="small" />
          Log Out
        </MenuItem>
        <MenuItem onClick={() => history.push('/orderhistory')}>
          <HistoryIcon fontSize="small" />
          Order History
        </MenuItem>
      </Menu>
    </div>
  );
}
