import React, { useState } from 'react';

import { Card, CardMedia, CardContent, CardHeader, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { addtocart } from '../../Features/Customer/actions';
import CommonButton from '../Button/Button';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
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
  Price: {
    paddingTop: '20px',
    paddingLeft: '40px',
    fontSize: '18px',
    fontWeight: '700',
  },

  btn: {
    marginTop: '10px',
    minWidth: '10px',
  },
}));
const CommonCard = ({ id, name, price, resturantName, img, buttonText }) => {
  const classes = useStyles();
  const { root, content, header, image, Price, btn } = classes;
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  return (
    <Grid item md={3}>
      <Card className={root}>
        <div className={image}>
          <div style={{ boxShadow: '10px 10px 13px lightgrey' }}>
            <CardMedia className={classes.media} image={img} title={name} />
          </div>
        </div>
        <CardHeader
          className={header}
          subheader={<h4>{resturantName}</h4>}
          title={
            <Typography className={classes.foodTitle} variant="h2">
              {name}
            </Typography>
          }
        />
        <CardContent className={content}>
          <div style={{ marginTop: '20px', display: 'flex' }}>
            <div className={btn}>
              {/* {showButton ? (
                <div>
                  <CommonButton color="secondary" fontSize={16} minwidth="10px" property="+" />
                  {'  '}
                  <span style={{ margin: '5px 5px' }}>1</span>
                  {'  '}
                  <CommonButton color="secondary" fontSize={16} minwidth="15px" property="-" />
                </div>
              ) : ( */}
              <div>
                <CommonButton
                  color="secondary"
                  fontSize={16}
                  onClick={() => dispatch(addtocart({ id, name, price, img, qty: 1 }))}
                  property={buttonText}
                  style={{ width: '50px' }}
                />
              </div>
            </div>
            <Typography className={Price} color="textSecondary" component="p" variant="h4">
              <span>{price}</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CommonCard;
