import React from 'react';

import { IconButton, Menu, withStyles } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    anchorEl={props.anchorEl}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    classes={props.classes}
    elevation={0}
    getContentAnchorEl={null}
    id={props.id}
    keepMounted={props.keepMounted}
    onClose={props.onClose}
    open={props.open}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    {props.children}
  </Menu>
));

const AppBarMenuButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { children } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <StyledMenu anchorEl={anchorEl} id="customized-menu" keepMounted onClose={handleClose} open={Boolean(anchorEl)}>
        {children}
      </StyledMenu>
    </div>
  );
};

export default AppBarMenuButton;
