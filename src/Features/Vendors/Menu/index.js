import React, { useState } from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, IconButton } from '@material-ui/core';
// import CustomTable from '../../components/CustomeTable';
import { makeStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomeTable';
import { DeleteIcon } from './style';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    marginTop: '20px',
  },
  button: {
    marginRight: '10px',
  },
  headerMenu: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
  },
}));

function Menu() {
  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const classes = useStyles();

  // side menu work starts
  const [isRestrauntModalOpen, setRestrauntModal] = useState(false);
  const [isMenuModalOpen, setMenuModal] = useState(false);

  function openRestrauntModal(isOpen) {
    setRestrauntModal(isOpen);
  }
  function openMenuModal(isOpen) {
    setMenuModal(isOpen);
  }
  const history = useHistory();

  // side menu work end

  // closing time starts
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onEdit = (row) => {
    history.push({
      pathname: '/editmenu',
      state: { data: row },
    });
  };
  const header = ['Item Name', 'Type', 'Restraunt', 'Price', 'Edit'];

  const tableData = [
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
    {
      name: 'Pizza',
      type: 'Fast Food',
      restraunt: 'Domino',
      price: 'Rs. 100',
    },
  ];
  function showAddMenu() {
    history.push('/addmenu');
  }
  function showAddRestraunt() {
    history.push('/restraunt');
  }
  // closing time ends
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <div className={classes.sideMenu}>
            <div className={classes.headerMenu} style={{ display: 'flex', width: '80%', margin: 'auto' }}>
              <div className={classes.buttons}>
                <div className={classes.button}>
                  <CommonButton fontSize="14px" minwidth="100px" onClick={showAddRestraunt} property="Add Restraunt" />
                </div>
                <div className={classes.button}>
                  <CommonButton fontSize="14px" minwidth="100px" onClick={showAddMenu} property="Add Item" />
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    id="time-picker"
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                    label=" Closing time"
                    margin="normal"
                    onChange={handleDateChange}
                    value={selectedDate}
                  />
                </MuiPickersUtilsProvider>
                <div style={{ paddingTop: '24px', marginLeft: '30px' }}>
                  <CommonButton fontSize="14px" minwidth="100px" onClick={showAddMenu} property="Save Time" />
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '20px', marginTop: '30px' }}>
            <CustomTable header={header} isEditDelete onEdit={onEdit} rows={tableData} tablewidth="80%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Menu;
