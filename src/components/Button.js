import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => {
 console.log(theme);
 return {
        root: {
            background: theme.palette.primary.main,
            border: 0,
            fontSize: 16,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    };
});

export default function CommonButton() {
  const classes = useStyles();

  return (
    <Button className={classes.root}>
      Theming
    </Button>
  );
}
