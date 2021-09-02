import React, { useState } from 'react';

// eslint-disable-next-line import/order
// eslint-disable-next-line import/order
import { Card, CardMedia, CardContent, CardHeader, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CommonButton from '../Button/Button';

// import Avatar from '@material-ui/core/Avatar';
// eslint-disable-next-line import/order

// eslint-disable-next-line import/order
// eslint-disable-next-line import/order

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
    borderRadius: '10px',
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
    fontSize: '18px',
    fontWeight: '700',
  },
  btn: {
    marginTop: '10px',
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
          <CardMedia className={classes.media} image={img} title={name} />
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
          <Typography className={classes.price} color="textSecondary" component="p" variant="h4">
            Rs. <span style={{ marginLeft: '10px', marginBottom: '20px' }}>{price}</span>
          </Typography>
          <div className={classes.btn}>
            {showButton ? (
              <div style={{ marginTop: '20px' }}>
                <CommonButton color="secondary">+</CommonButton>
                {'  '}-{'  '}
                <CommonButton color="secondary">-</CommonButton>
              </div>
            ) : (
              <div style={{ marginTop: '20px' }}>
                <CommonButton color="secondary" onClick={() => setShowButton(true)}>
                  {buttonText}
                </CommonButton>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CommonCard;
