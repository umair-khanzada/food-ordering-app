import React, { useState } from 'react';

import 'date-fns';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import MainTab from '../../components/CardMenus/Tabs';
import TemporaryDrawer from '../../components/Drawer';
import { openDrawer } from './Reducer/action';

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

  // const [isDrawerOpen, setOpenDrawer] = useState(false);

  const isDrawerOpen = useSelector((state) => state.addtocartReducers.isDrawerOpen);
  const dispatch = useDispatch();

  // function toggleDrawer() {
  //   setOpenDrawer(!isDrawerOpen);
  // }

  // const openDrawer = () => {
  //   setOpenDrawer(true);
  // };

  // const closeDrawer = () => {
  //   setOpenDrawer(false);
  // };

  return (
    <div>
      {console.log('state changed!!!', isDrawerOpen)}
      <Grid container>
        <Grid item md={12}>
          <Box>
            <div className={classes.header}>
              <div className={classes.orderDetails}>
                {/* <ArrowBackIcon fontSize="large" style={{ color: '#e91e63' }} /> */}

                <Typography className={classes.orderHeading} noWrap style={{ marginLeft: '40px' }} variant="h2">
                  New Order
                </Typography>

                <Typography className={classes.orderRef} noWrap paragraph>
                  #023025
                </Typography>
              </div>

              {/* <div className={classes.userInfo}>
                <NestedList />
              </div> */}
            </div>
            <div className={classes.tabs}>
              <TemporaryDrawer />

              <MainTab setOpenDrawer={() => dispatch(openDrawer())} />
            </div>

            <div />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
