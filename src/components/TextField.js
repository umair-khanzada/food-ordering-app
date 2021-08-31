import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';
export default function BasicTextFields({ variant, width, type, label }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width,
      },
      '& .MuiInputLabel-outlined.Mui-focused': {
        color: theme.palette.secondary.main,
      },
    },
  }));
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.root} noValidate>
      <TextField label={label} type={type} variant={variant} />
    </form>
  );
}
