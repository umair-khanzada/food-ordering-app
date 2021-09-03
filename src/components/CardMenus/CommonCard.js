import React, { useState } from 'react';

import { Card, CardMedia, CardContent, CardHeader, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CommonButton from '../Button/Button';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // width: '75%',
    // marginLeft: ' 250px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 20px lightgrey',
  },
  media: {
    height: 0,

    paddingTop: '56.25%', // 16:9
  },
  foodTitle: {
    textAlign: 'center',
  },
  content: {
    padding: '0px',
    marginLeft: '18px',
  },
  header: {
    padding: '0px',
    marginLeft: '18px',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: '100px',
    marginLeft: drawerWidth,
    backgroundColor: 'white',
    color: 'black',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  image: {
    padding: '30px',
    border: '100px',
    boxShadow: '10px 10px F0F0F0',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  price: {
    paddingTop: '10px',
    paddingLeft: '50px',
    fontSize: '18px',
    fontWeight: '700',
  },
  price2: {
    paddingTop: '10px',
    paddingLeft: '25px',
    fontSize: '18px',
    fontWeight: '700',
  },
  btn: {
    marginTop: '10px',
    minWidth: '10px',
  },
}));
const CommonCard = ({ name, price, resturantName, img, buttonText }) => {
  const classes = useStyles();

  const [showButton, setShowButton] = useState(false);
  return (
    <Grid item md={3}>
      {/* <Drawer
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
        variant="permanent"
      >
        <div className={classes.toolbar} />
      </Drawer> */}
      <Card className={classes.root}>
        <div className={classes.image}>
          <div style={{ boxShadow: '10px 10px 13px lightgrey' }}>
            <CardMedia className={classes.media} image={img} title={name} />
          </div>
        </div>
        <CardHeader
          className={classes.header}
          subheader={<h4>{resturantName}</h4>}
          title={
            <Typography className={classes.foodTitle} variant="h2">
              {name}
            </Typography>
          }
        />
        <CardContent className={classes.content}>
          <div style={{ marginTop: '20px', display: 'flex' }}>
            <div className={classes.btn}>
              {showButton ? (
                <div>
                  <CommonButton color="secondary" minwidth="10px">
                    +
                  </CommonButton>
                  {'  '}
                  <span style={{ margin: '5px 5px' }}>1</span>
                  {'  '}
                  <CommonButton color="secondary" minwidth="15px">
                    -
                  </CommonButton>
                </div>
              ) : (
                <div>
                  <CommonButton color="secondary" onClick={() => setShowButton(true)} style={{ width: '50px' }}>
                    {buttonText}
                  </CommonButton>
                </div>
              )}
            </div>
            <Typography className={classes.price} color="textSecondary" component="p" variant="h4">
              <span>Rs.{price}</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CommonCard;
