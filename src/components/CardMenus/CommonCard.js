import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { addtocart } from '../../Features/Dashboard/Reducer/action';
import CommonButton from '../Button/Button';
import { CardRoot, ImageDiv, FoodTitle, HeaderCard, Content } from './style';

const CommonCard = ({ id, name, price, resturantName, img, buttonText }) => {
  const dispatch = useDispatch();

  return (
    <Grid item md={3}>
      <CardRoot>
        <ImageDiv src={img} title={name} />

        <HeaderCard subheader={<h4>{resturantName}</h4>} title={<FoodTitle variant="h2">{name}</FoodTitle>} />

        <Content>
          <div style={{ marginTop: '20px', display: 'flex' }}>
            <div>
              <CommonButton
                fontSize={16}
                onClick={() => dispatch(addtocart({ id, name, price, img, qty: 1 }))}
                property={buttonText}
                style={{ width: '50px' }}
              />
            </div>

            <Typography color="textSecondary" component="p" variant="h4">
              <span>{price}</span>
            </Typography>
          </div>
        </Content>
      </CardRoot>
    </Grid>
  );
};
export default CommonCard;
