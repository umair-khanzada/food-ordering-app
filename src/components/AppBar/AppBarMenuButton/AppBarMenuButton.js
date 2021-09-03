import React from 'react';

import { IconButton, Menu, withStyles } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    elevation={0}
    getContentAnchorEl={null}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

const AppBarMenuButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { buttonIcon, children } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
        {buttonIcon}
      </IconButton>
      <StyledMenu anchorEl={anchorEl} id="customized-menu" keepMounted onClose={handleClose} open={Boolean(anchorEl)}>
        {children}
      </StyledMenu>
    </div>
  );
};

export default AppBarMenuButton;
