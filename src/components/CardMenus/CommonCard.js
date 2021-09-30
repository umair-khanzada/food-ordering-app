import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { addtocart } from '../../Features/Customer/actions';
import CommonButton from '../Button/Button';
import { CardRoot, ImageDiv, FoodTitle, HeaderCard, Content, ItemPrice, InsideContent } from './style';

const CommonCard = ({ id, name, price, resturantName, img, buttonText }) => {
  const dispatch = useDispatch();

  return (
    <Grid item md={3}>
      <CardRoot>
        <ImageDiv src={img} title={name} />

        <HeaderCard subheader={<h4>{resturantName}</h4>} title={<FoodTitle variant="h2">{name}</FoodTitle>} />

        <Content>
          <InsideContent>
            <div>
              <CommonButton
                fontSize={16}
                minwidth="40px"
                onClick={() => {
                  dispatch(addtocart({ id, name, price, img, qty: 1 }));
                }}
                property={buttonText}
              />
            </div>

            <Typography color="textSecondary" component="p" variant="h4">
              <ItemPrice>{price}</ItemPrice>
            </Typography>
          </InsideContent>
        </Content>
      </CardRoot>
    </Grid>
  );
};
export default CommonCard;
