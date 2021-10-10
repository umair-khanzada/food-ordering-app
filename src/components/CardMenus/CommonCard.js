import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { addtocart } from '../../Features/Customer/actions';
import { ERROR } from '../../scripts/constants';
import { toggleSnackbarOpen } from '../AlertMessage/alertRedux/actions';
import CommonButton from '../Button/Button';
import { CardRoot, ImageDiv, FoodTitle, HeaderCard, Content, ItemPrice, InsideContent, ResturantName } from './style';

const CommonCard = ({ id, name, price, resturantName, img, buttonText, vendorId }) => {
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
    <Grid item>
      <CardRoot>
        <ImageDiv src={img} title={name} />

        <HeaderCard
          subheader={<ResturantName>{resturantName}</ResturantName>}
          title={<FoodTitle variant="h2">{name}</FoodTitle>}
        />

        <Content>
          <InsideContent>
            <div>
              <CommonButton fontSize="14px" minwidth="30px" onClick={addToCart} property={buttonText} />
            </div>

            <Typography color="textSecondary" component="p" variant="h4">
              <ItemPrice>Rs. {price}</ItemPrice>
            </Typography>
          </InsideContent>
        </Content>
      </CardRoot>
    </Grid>
  );
};
export default CommonCard;
