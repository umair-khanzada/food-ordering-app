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
  EmptyCart,
  AddToCartImg,
  ModalIcons,
  PriceSpan,
  EmptyCartHeading,
  EmptyCartPara,
  ConfirmButton,
  CartPaper,
} from './style';
const TemporaryDrawer = () => {
  const cart = useSelector((state) => state.addtocartReducers.cart);
  const isDrawerOpen = useSelector((state) => state.addtocartReducers.isDrawerOpen);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment key="right">
        <MainDrawer anchor="right" onClose={() => dispatch(closeDrawer())} open={isDrawerOpen} variant="persistent">
          <div>
            <DrwaerIcon>
              <DrawerHeadingText>My Cart</DrawerHeadingText>
              <DrawerText onClick={() => dispatch(closeDrawer())} />
            </DrwaerIcon>
            <div>
              {cart.length > 0 ? (
                <>
                  <CartPaper>
                    {cart.map((cartdata) => {
                      return (
                        <DrawerCard key={cartdata.id}>
                          <AddToCartImg alt="cart" src={cartdata.img} />

                          <DrawerPrice>
                            <div style={{ position: 'relative', marginLeft: '5vh' }}>
                              <CartCancel>
                                <DeleteIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
                              </CartCancel>
                            </div>
                            <Add>
                              <div>
                                <h4>{cartdata.name}</h4>
                              </div>

                              <DrawerItemPrice>
                                <CartPrice> {cartdata.price}</CartPrice>
                              </DrawerItemPrice>
                              <PriceSpan />

                              <PositiveIcon onClick={() => dispatch(increaseQuantity(cartdata.id))} />
                              {cartdata.qty}
                              <NegativeIcon onClick={() => dispatch(decreaseQuantity(cartdata.id))} />
                            </Add>
                          </DrawerPrice>
                        </DrawerCard>
                      );
                    })}
                  </CartPaper>
                </>
              ) : (
                <EmptyCart>
                  <EmptyCartHeading>No Item in your cart </EmptyCartHeading>
                  <EmptyCartPara>Your favorite items are just a click away</EmptyCartPara>
                </EmptyCart>
              )}
            </div>
          </div>
          {cart.length > 0 && (
            <CheckoutButton color="primary" onClick={handleOpen} variant="contained">
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
                <ModalIcons>
                  <CancelButton color="black" onClick={() => handleClose()} variant="contained">
                    <CloseIcon />
                    Cancel
                  </CancelButton>
                  <ConfirmButton color="primary" onClick={() => handleClose()} variant="contained">
                    <DoneIcon />
                    Confirm
                  </ConfirmButton>
                </ModalIcons>
              </Paper>
            </Fade>
          </DrawerModal>
        </MainDrawer>
      </React.Fragment>
    </>
  );
};

export default TemporaryDrawer;
