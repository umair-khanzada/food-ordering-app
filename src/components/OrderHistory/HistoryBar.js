import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
// eslint-disable-next-line import/order
import DateFnsUtils from '@date-io/date-fns';
// eslint-disable-next-line import/order
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// eslint-disable-next-line import/order
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    display: 'flex',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    color: 'white',
  },
}));

const HistoryBar = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <InputLabel id="demo-simple-select-label">Shipping Status</InputLabel>
        <Select id="demo-simple-select-filled" labelId="demo-simple-select-label">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div>
        <TextField id="outlined-basic" label="Reference#No" variant="outlined" />
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          id="date-picker-dialog"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          label="Order Date From"
          margin="normal"
        />
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          id="date-picker-dialog"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          label="Until"
          margin="normal"
        />
      </MuiPickersUtilsProvider>

      <Button className={classes.btn}>Filter Now</Button>
    </>
  );
};

export default HistoryBar;
