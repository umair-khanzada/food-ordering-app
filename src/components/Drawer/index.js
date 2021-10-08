import React, { useState } from 'react';

import { Fade, Backdrop } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useMutation } from 'react-query';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  increaseQuantity,
  deleteItem,
  closeDrawer,
  decreaseQuantity,
  clearCart,
} from '../../Features/Customer/actions';
import { GetHeader, SUCCESS, ERROR } from '../../scripts/constants';
import { toggleSnackbarOpen } from '../AlertMessage/alertRedux/actions';
import { InsertBalance, InsertOrder } from './mutation';
import { GetBalanceByUserId } from './request';
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
  ModalDiv,
} from './style';
const Drawer = () => {
  const { headers } = GetHeader();

  const { isDrawerOpen, cart } = useSelector((state) => {
    state.addtocartReducers.isDrawerOpen;
    const {
      addtocartReducers: { isDrawerOpen, cart },
    } = state;
    return { isDrawerOpen, cart };
  }, shallowEqual);
  const userId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data: balance, refetch } = GetBalanceByUserId(userId);

  const placeOrder = () => {
    const items = [];
    let item = {};
    let amount = 0;
    let vendor = '';
    cart.map(({ name, price, qty, vendorId }) => {
      item = {
        name,
        quantity: qty,
      };
      items.push(JSON.stringify(item));
      amount += price * qty;
      vendor = vendorId;
    });

    const orders = {
      userId,
      vendorId: vendor,
      items,
      status: 'pending',
      amount,
    };
    let previousBalance = 0;

    balance.map(({ vendorId: { id }, amount }) => {
      if (id === vendor) {
        previousBalance = amount;
      }
    });

    const currentBalance = previousBalance - amount;

    const totalBalance = {
      userId,
      vendorId: vendor,
      amount: currentBalance,
    };

    mutate({ orders, headers });
    addBalanceMutate({ totalBalance, headers });
    setOpen(false);
  };

  const { mutate } = useMutation(InsertOrder, {
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: message,
          messageType: ERROR,
        }),
      );
    },
  });
  const { mutate: addBalanceMutate } = useMutation(InsertBalance, {
    onSuccess: () => {
      dispatch(clearCart());
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Your order has been placed',
          messageType: SUCCESS,
        }),
      );
      refetch();
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: message,
          messageType: ERROR,
        }),
      );
    },
  });

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
                            <CartCancel>
                              <DeleteIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
                            </CartCancel>

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
                  <EmptyCartHeading variant="h5">No Item in your cart </EmptyCartHeading>
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
                <ModalDiv>
                  <Modaltext>Are You Sure You Want To Confirm Your Order</Modaltext>
                </ModalDiv>

                <ModalIcons>
                  <CancelButton color="black" onClick={() => handleClose()} variant="contained">
                    <CloseIcon />
                    Cancel
                  </CancelButton>
                  <ConfirmButton color="primary" onClick={placeOrder} variant="contained">
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

export default Drawer;
