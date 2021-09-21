/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Fade, Backdrop } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useDispatch, useSelector } from 'react-redux';

import { increaseQuantity, deleteItem, closeDrawer, decreaseQuantity } from '../../Features/Customer/actions';
import {
  DrawerModal,
  DrawerCard,
  Paper,
  DrwaerIcon,
  MainDrawer,
  DrawerText,
  DrawerHeadingText,
  DrawerPrice,
  Add,
  PositiveIcon,
  CheckoutButton,
  CancelButton,
  Modaltext,
  NegativeIcon,
  DeleteIcon,
  DrawerItemPrice,
  CartPrice,
  CartCancel,
} from './style';
const TemporaryDrawer = () => {
  const cart = useSelector((state) => state.addtocartReducers.cart);
  const dispatch = useDispatch();
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
  };

  const isDrawerOpen = useSelector((state) => state.addtocartReducers.isDrawerOpen);

  return (
    <>
      <React.Fragment key="right">
        <MainDrawer anchor="right" onClose={() => dispatch(closeDrawer())} open={isDrawerOpen} variant="persistent">
          <div>
            <DrwaerIcon>
              <DrawerHeadingText>My Cart</DrawerHeadingText>
              <DrawerText onClick={() => dispatch(closeDrawer())} />{' '}
            </DrwaerIcon>
            <div>
              {cart.length > 0 ? (
                <>
                  {cart.map((cartdata) => {
                    return (
                      <DrawerCard key={cartdata.id}>
                        <img
                          alt="cart"
                          src={cartdata.img}
                          style={{ width: '20%', display: 'flex', borderRadius: '10px' }}
                        />

                        <DrawerPrice>
                          {/* <MainDrawer>
                            {/* <div>
                              <h4>{cartdata.name}</h4>
                            </div>

                            {/* <DrawerItemPrice> */}
                          {/* <span> {cartdata.price}</span> */}
                          {/* </DrawerItemPrice>

                            <DeleteIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
                          </MainDrawer> */}

                          <Add>
                            <div>
                              <h4>{cartdata.name}</h4>
                            </div>

                            <DrawerItemPrice>
                              <CartPrice> {cartdata.price}</CartPrice>
                            </DrawerItemPrice>
                            <span style={{ margin: '20px' }} />

                            <PositiveIcon onClick={() => dispatch(increaseQuantity(cartdata.id))} />
                            {cartdata.qty}
                            <NegativeIcon onClick={() => dispatch(decreaseQuantity(cartdata.id))} />
                          </Add>
                          <CartCancel>
                            <DeleteIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
                          </CartCancel>
                        </DrawerPrice>
                      </DrawerCard>
                    );
                  })}
                </>
              ) : (
                <div
                  style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h2>No Item in your cart </h2>
                  <p>Your favorite items are just a click away</p>
                </div>
              )}

              {/* close here */}
            </div>
          </div>
          {cart.length > 0 && (
            <CheckoutButton color="secondary" onClick={handleOpen} variant="contained">
              Checkout
            </CheckoutButton>
          )}
          <DrawerModal
            aria-describedby="transition-modal-description"
            aria-labelledby="transition-modal-title"
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            closeAfterTransition
            open={open}
          >
            <Fade in={open}>
              <Paper>
                <Modaltext>Are You Sure You Want To Confirm Your Order</Modaltext>
                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-around' }}>
                  <CancelButton
                    color="black"
                    onClick={() => handleClose()}
                    style={{ marginRight: '20px' }}
                    variant="contained"
                  >
                    <CloseIcon />
                    Cancel
                  </CancelButton>
                  <CheckoutButton
                    color="secondary"
                    onClick={() => handleClose()}
                    style={{ marginRight: '20px' }}
                    variant="contained"
                  >
                    <DoneIcon />
                    Confirm
                  </CheckoutButton>
                </div>
              </Paper>
            </Fade>
          </DrawerModal>

          {/* click={toggleDrawer('right', true)} */}
        </MainDrawer>
      </React.Fragment>
    </>
  );
};

export default TemporaryDrawer;
