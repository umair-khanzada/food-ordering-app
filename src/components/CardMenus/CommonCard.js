import React from 'react';

import { CardHeader, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { addtocart } from '../../Features/Customer/actions';
import { ERROR } from '../../scripts/constants';
import { toggleSnackbarOpen } from '../AlertMessage/alertRedux/actions';
import CommonButton from '../Button/Button';
import { CardRoot, ImageDiv, FoodTitle, Content, DetailsContainer } from './style';

const CommonCard = ({ id, name, price, img, buttonText, vendorId }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.addtocartReducers.cart);
  const addToCart = () => {
    let vendorFlag = 0;
    cart.map(({ vendorId: createdBy }) => {
      if (createdBy !== vendorId) {
        vendorFlag = 1;

        return false;
      }
    });
    if (vendorFlag === 1) {
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Make a Separate Order for different Vendor',
          messageType: ERROR,
        }),
      );
    } else {
      dispatch(addtocart({ id, name, price, img, qty: 1, vendorId }));
    }
  };
  return (
    <CardRoot>
      <ImageDiv src={img} title={name} />
      <DetailsContainer>
        <CardHeader title={<FoodTitle variant="h2">{name}</FoodTitle>} />
        <Typography color="textSecondary" component="p" variant="h3">
          Rs. {price}
        </Typography>
      </DetailsContainer>
      <Content>
        <CommonButton fontSize="14px" minwidth="220px" onClick={addToCart} property={buttonText} />
      </Content>
    </CardRoot>
  );
};
export default CommonCard;
