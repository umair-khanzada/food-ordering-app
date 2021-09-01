import React from 'react';

import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

import Button from '../../Button/Button';

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
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        variant="contained"
      >
        {buttonIcon}
      </Button>
      <StyledMenu anchorEl={anchorEl} id="customized-menu" keepMounted onClose={handleClose} open={Boolean(anchorEl)}>
        {children}
      </StyledMenu>
    </div>
  );
};

export default AppBarMenuButton;
