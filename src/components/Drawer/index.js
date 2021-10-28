import React, { useState } from 'react';

import { Fade, Backdrop } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useMutation } from 'react-query';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  closeDrawer,
  clearCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from '../../Features/Customer/actions';
import { GetHeader, ERROR, SUCCESS } from '../../scripts/constants';
import { toggleSnackbarOpen } from '../AlertMessage/alertRedux/actions';
import { InsertOrder } from './mutation';
import {
  DrawerModal,
  DrawerCard,
  Paper,
  DrawerHeader,
  MainDrawer,
  DrawerHeading,
  CheckoutButton,
  CancelButton,
  Modaltext,
  CartPrice,
  EmptyCart,
  ModalIcons,
  EmptyCartHeading,
  EmptyCartPara,
  ConfirmButton,
  CartPaper,
  ModalDiv,
  DrawerCloseIcon,
  ItemImage,
  ItemDetails,
  DeleteIcon,
  ItemPrice,
  ItemNameContainer,
  PositiveIcon,
  NegativeIcon,
  QuantityContainer,
  Quantity,
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
    const date = new Date();
    const currentDate = date.toLocaleDateString();

    const orders = {
      userId,
      vendorId: vendor,
      items,
      status: 'pending',
      amount,
      date: currentDate,
    };
    mutate({ orders, headers });
    setOpen(false);
  };
  const { mutate } = useMutation(InsertOrder, {
    onSuccess: () => {
      dispatch(clearCart());
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Your order has been placed',
          messageType: SUCCESS,
        }),
      );
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
    <MainDrawer anchor="right" onClose={() => dispatch(closeDrawer())} open={isDrawerOpen} variant="persistent">
      <DrawerHeader>
        <DrawerHeading>Cart</DrawerHeading>
        <DrawerCloseIcon onClick={() => dispatch(closeDrawer())} />
      </DrawerHeader>
      {cart.length > 0 ? (
        <CartPaper>
          {cart.map((cartdata) => {
            return (
              <DrawerCard key={cartdata.id}>
                <ItemDetails>
                  <ItemImage alt="cart" src={cartdata.img} />

                  <ItemNameContainer>
                    <h4>{cartdata.name}</h4>
                    <QuantityContainer>
                      <PositiveIcon onClick={() => dispatch(increaseQuantity(cartdata.id))} />
                      <Quantity>{cartdata.qty}</Quantity>
                      <NegativeIcon onClick={() => dispatch(decreaseQuantity(cartdata.id))} />
                    </QuantityContainer>
                  </ItemNameContainer>

                  <ItemPrice>
                    <CartPrice> Rs. {cartdata.price}</CartPrice>
                  </ItemPrice>
                </ItemDetails>
                <DeleteIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
              </DrawerCard>
            );
          })}
        </CartPaper>
      ) : (
        <EmptyCart>
          <EmptyCartHeading variant="h5">No Item in your cart </EmptyCartHeading>
          <EmptyCartPara>Your favorite items are just a click away</EmptyCartPara>
        </EmptyCart>
      )}

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
  );
};
export default Drawer;
