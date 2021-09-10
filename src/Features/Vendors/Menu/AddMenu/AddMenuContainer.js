import React from 'react';

import 'date-fns';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

import CommonButton from '../../../../components/Button/Button';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#e91e63',
    margin: '20px 0',
  },
  heading: {
    color: '#e91e63',
    textAlign: 'center',
  },

  form: {
    margin: '54px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  alignCenter: {
    width: '48%',
    background: 'white',
    padding: '20px 77px',
    borderRadius: '6px',
  },
  txtField: {
    width: '100%',
    marginBottom: '20px',
  },
  button: {
    margin: '20px 0',
    textAlign: 'center',
  },
  crossIcon: {
    textAlign: 'right',
    paddingRight: '20px',
    cursor: 'pointer',
  },
  formField: {
    marginBottom: '10px',
  },
}));

function AddMenuContainer() {
  const classes = useStyles();
  const history = useHistory();
  function addItem() {
    history.push('/menu');
  }
  return (
    <div>
      <div className={classes.form}>
        <div className={classes.alignCenter}>
          <Typography className={classes.heading} variant="h2">
            Add Item
          </Typography>
          <div className={classes.formField}>
            <TextField className={classes.txtField} label="Category" />
          </div>
          <div className={classes.formField}>
            <TextField className={classes.txtField} label="Restraunt" />
          </div>
          <div className={classes.formField}>
            <TextField className={classes.txtField} label="Item Name " />
          </div>
          <div className={classes.formField}>
            <TextField className={classes.txtField} label="Price" />
          </div>

          <div className={classes.button}>
            <CommonButton fontSize="14px" minwidth="100px" onClick={addItem} property="Add Menu" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddMenuContainer;
