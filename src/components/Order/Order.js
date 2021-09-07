import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import itemData from '../../Mock/ItemData';
import OutlinedCard from '../Card/Card';
import {
  Container,
  Img,
  NameofFood,
  Price,
  Header,
  OrderText,
  Icon,
  Quantity,
  TotalPrice,
  PriceSpan,
  Span,
} from './Style';
const ITEM_PRICES = {
  Burger: 20,
  Cheese: 50,
  CheeseSAUCE: 40,
  FrenchFries: 30,
};
let TOTAL_PRICE = 0;
const useStyles = makeStyles({
  plusIcon: {
    color: 'green',
    fontSize: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  removeIcon: {
    color: 'rgb(227, 66, 52)',
    fontSize: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  crossIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const Order = (props) => {
  const styles = useStyles();
  const [itemState, itemSet] = useState(itemData);
  const ItemSummary = itemState.map(({ img, price, quantity, name, id }, index) => {
    return (
      <Container key={index}>
        <div className="food-img">
          <Img alt="food-image" src={img} />
        </div>
        <div className="food-description">
          <div>
            <NameofFood>{name}</NameofFood>
            <Price>Price: {price}</Price>
          </div>

          <Quantity>
            <
              className={styles.plusIcon}
              onClick={() => addIngredientHandler(quantity, id, ITEM_PRICES[name])}
            />
            <Span>{quantity}</Span>
            <RemoveCircleOutlineIcon
              className={styles.removeIcon}
              onClick={() => removeIngredientHandler(quantity, id, ITEM_PRICES[name])}
            />
          </Quantity>
        </div>
      </Container>
    );
  });

  const addIngredientHandler = (quantity, id, ActualPrice) => {
    const newCount = quantity + 1;
    const newPrice = ActualPrice * newCount;

    const updatedItem = [...itemState];
    updatedItem.map((item) => {
      if (item.id === id) {
        item.quantity = newCount;
        item.price = newPrice;
      }
    });

    itemSet(updatedItem);
    totalPriceHandler();
  };
  const removeIngredientHandler = (quantity, id, ActualPrice) => {
    const newCount = quantity - 1;
    if (newCount < 0) {
      return;
    }
    const newPrice = ActualPrice * newCount;
    const updatedItem = [...itemState];
    updatedItem.map((item) => {
      if (item.id === id) {
        item.quantity = newCount;
        item.price = newPrice;
      }
    });

    itemSet(updatedItem);
    totalPriceHandler();
  };

  const totalPriceHandler = () => {
    TOTAL_PRICE = 0;
    itemState.map((item) => {
      TOTAL_PRICE += item.price;
    });
  };
  return (
    <OutlinedCard maxWidth="600px">
      <Header>
        <OrderText>
          <h2>My Order</h2>
        </OrderText>
        <Icon>
          <CloseIcon className="styles.crossIcon" onClick={() => props.purchaseCancelled()} />
        </Icon>
      </Header>
      <div>{ItemSummary}</div>
      <TotalPrice>
        <PriceSpan>Total: {TOTAL_PRICE}</PriceSpan>
        <Button color="primary" onClick={() => props.purchaseContinued()}>
          Continue
        </Button>
      </TotalPrice>
    </OutlinedCard>
  );
};

export default Order;
