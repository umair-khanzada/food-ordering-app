import React from 'react';

import { Grid, useTheme } from '@material-ui/core';

import SideMenu from '../../components/sideMenu';
import VendorData from '../../Mock/vendor.data';
import Vendor from '../Vendor';
import { VendorGrid } from './style';
function DashBoard() {
  const theme = useTheme();
  // const drawerWidth = 300;
  // const useStyles = makeStyles((theme) => ({
  //   header: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     marginTop: '30px',
  //   },
  //   orderHeading: {
  //     fontWeight: '700',
  //     marginLeft: '40px',
  //   },
  //   orderRef: {
  //     color: 'lightgrey',
  //     paddingLeft: '10px',
  //     paddingTop: '8px',
  //     fontSize: '18px',
  //   },
  //   orderDetails: {
  //     display: 'flex',
  //   },
  //   userInfo: {
  //     paddingRight: '40px',
  //   },
  //   tabs: {
  //     paddingRight: '30px',
  //   },
  // }));

  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={2}>
        <SideMenu />
      </Grid>
      <VendorGrid item md={10} theme={theme}>
        {VendorData.map((vendor, i) => {
          return <Vendor key={i} vendor={vendor} />;
        })}
      </VendorGrid>
      {/* <Grid item md={9}>
          <Box>
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
          </Box>
        </Grid>
        */}
    </Grid>
  );
}
export default DashBoard;
