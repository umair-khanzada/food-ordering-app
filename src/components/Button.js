import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
export default function CommonButton({ children, color }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  }));

  const classes = useStyles();
  // One option to get theme and supply it to styled compoenents
  return (
    <Button className={classes.root} color={color} variant="contained">
      {children}
    </Button>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
