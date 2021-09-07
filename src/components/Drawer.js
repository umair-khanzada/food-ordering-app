/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Drawer, List, Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useSelector } from 'react-redux';

import Maintabs from './CardMenus/Tabs';

const useStyles = makeStyles({
  cartdesc: {
    display: 'flex',
    justifyContent: 'center',
  },
  cartimg: {
    width: 100,
    height: 74,
    borderRadius: '17%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    height: 105,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: 0.3,
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e91e63',
    height: 46,
  },
  drawer: {
    width: 310,

    // height: '100vh',
  },
  text: {
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  headingtext: {
    color: 'white',
    padding: 5,
  },
  imgdiv: {
    paddingLeft: 17,
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 13,
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 9,
  },
  carddata: {
    display: 'flex',
  },
  add: {
    display: 'flex',
    alignItems: 'center',
  },
  itemprice: {
    display: 'flex',
    paddingLeft: 5,
  },
  positiveicon: {
    color: '#e91e63',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  btn: {
    backgroundColor: '#e91e63',
    // width: '90%',
    margin: '0 10px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#e91e63',
    },
  },
});

const TemporaryDrawer = ({ id }) => {
  const cart = useSelector((state) => state.addtocartReducers.cart);
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <List className={classes.drawer}>
      {cart.map((cartdata) => {
        return (
          <Card key={cartdata.id} className={classes.card}>
            <div className={classes.imgdiv}>
              <img alt="cart" className={classes.cartimg} src={cartdata.img} />
            </div>
            <div className={classes.price}>
              <div className={classes.main}>
                <div>
                  <h4>{cartdata.name}</h4>
                </div>

                <div className={classes.itemprice}>
                  <span>x</span>
                  <span> {cartdata.price}</span>
                  <span>Rs/</span>
                </div>
              </div>

              <div className={classes.add}>
                <AddCircleIcon className={classes.positiveicon} />
                <span>11</span>
                <RemoveCircleIcon className={classes.positiveicon} />
              </div>
            </div>
          </Card>
        );
      })}
    </List>
  );

  return (
    <>
      <React.Fragment key="right">
        <Drawer anchor="right" className={classes.drawer} onClose={toggleDrawer('right', false)} open={state['right']}>
          <div>
            <div className={classes.icon}>
              <h4 className={classes.headingtext}>My Cart</h4>
              <CloseIcon className={classes.text} onClick={toggleDrawer('right', false)} />{' '}
            </div>
            <div style={{ height: '85vh', overflowY: 'scroll', marginBottom: '10px' }}>{list('right')}</div>
          </div>

          <Button className={classes.btn}>Proceed to Checkout</Button>
        </Drawer>
      </React.Fragment>
      <Maintabs click={toggleDrawer('right', true)} />
    </>
  );
};

export default TemporaryDrawer;
