/* eslint-disable import/order */

/* eslint-disable linebreak-style */

import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import 'date-fns';

// eslint-disable-next-line import/order

import DateFnsUtils from '@date-io/date-fns';

// eslint-disable-next-line import/order

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

// eslint-disable-next-line import/order

import SearchBar from 'material-ui-search-bar';

import CommonButton from '../../../components/Button/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),

    minWidth: '60%',
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  label: {
    display: 'flex',
  },

  btn: {
    backgroundColor: '#e91e63',

    marginTop: '30px',

    color: 'white',
  },
}));

const HistoryBar = () => {
  const classes = useStyles();

  return (
    <>
      <SearchBar />

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

      <CommonButton className={classes.btn} property="Filter Now" />
    </>
  );
};

export default HistoryBar;
