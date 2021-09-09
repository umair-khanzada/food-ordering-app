import React, { useState } from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import CustomTable from '../../components/CustomeTable';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

import CommonButton from '../../components/Button/Button';
import CustomTable from '../../components/CustomeTable';
import SideMenu from '../../components/sideMenu';
import AddMenuContainer from '../Menu/AddMenu/AddMenuContainer';
import AddRestrauntContainer from '../Restraunt/AddRestraunt/AddRestrauntContainer';

function Dashboard() {
  const drawerWidth = 300;
  const useStyles = makeStyles((theme) => ({
    // header: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   marginTop: '30px',
    // },
    // orderHeading: {
    //   fontWeight: '700',
    //   marginLeft: '40px',
    // },
    // orderRef: {
    //   color: 'lightgrey',
    //   paddingLeft: '10px',
    //   paddingTop: '8px',
    //   fontSize: '18px',
    // },
    // orderDetails: {
    //   display: 'flex',
    // },
    // userInfo: {
    //   paddingRight: '40px',
    // },
    // tabs: {
    //   paddingRight: '30px',
    // },
    // menu
    buttons: {
      display: 'flex',
      marginTop: '20px',
    },
    button: {
      marginRight: '10px',
    },
    headerMenu: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));

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

  // side menu work end

  // closing time starts
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const header = ['Item Name', 'Type', 'Restraunt', 'Price', 'Active Today', 'Delete'];

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
  // closing time ends

  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <SideMenu />
        </Grid>
        <Grid item md={9}>
          {/* <Box>
            <div className={classes.header}>
              <div className={classes.orderDetails}>
                <ArrowBackIcon fontSize="large" style={{ color: '#e91e63' }} />

                <Typography className={classes.orderHeading} noWrap style={{ marginLeft: '40px' }} variant="h2">
                  New Order
                </Typography>

                <Typography className={classes.orderRef} noWrap paragraph>
                  #023025
                </Typography>
              </div>

              <div className={classes.userInfo}>
                <Typography variant="h4">
                  <b> Arham Ahmed</b>
                </Typography>
                <Typography color="textSecondary" component="p" variant="h4">
                  Waiter
                </Typography>
              </div>
            </div>
            <div className={classes.tabs}>
              <MainTab />
            </div>
            <div />
          </Box> */}

          {/* create side menu  */}
          <div className={classes.sideMenu}>
            <div className={classes.headerMenu}>
              <div className={classes.buttons}>
                <div className={classes.button}>
                  <CommonButton
                    fontSize="14px"
                    minwidth="100px"
                    onClick={() => openRestrauntModal(true)}
                    property="Add Restraunt"
                  />
                </div>
                <div className={classes.button}>
                  <CommonButton
                    fontSize="14px"
                    minwidth="100px"
                    onClick={() => openMenuModal(true)}
                    property="Create Menu"
                  />
                </div>
              </div>
              <div style={{ paddingRight: '30px' }}>
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
              </div>
            </div>
          </div>
          <AddRestrauntContainer isModalOpen={isRestrauntModalOpen} openModal={setRestrauntModal} />
          <AddMenuContainer isModalOpen={isMenuModalOpen} openModal={setMenuModal} />

          {/* create side menu  */}
          {/* create custom time */}

          <div style={{ paddingRight: '20px', marginTop: '30px' }}>
            <CustomTable header={header} rows={tableData} />
          </div>
          {/* create custome time */}
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
