import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import SearchBar from 'material-ui-search-bar';

import CommonButton from '../../../components/Button/Button';

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
    backgroundColor: '#e91e63',
    color: 'white',
  },
}));

const HistoryBar = () => {
  const classes = useStyles();
  return (
    <>
      {/* <SearchBar /> */}
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

      <CommonButton property="Filter Now" />
    </>
  );
};

export default HistoryBar;
