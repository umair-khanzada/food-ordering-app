import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import OutlinedCard from '../Card/Card';
import itemData from '../ItemData/ItemData';
import {
  Container,
  Span,
  Img,
  NameofFood,
  Price,
  Header,
  OrderText,
  Icon,
  Quantity,
  TotalPrice,
  IncrementI,
  DecrementI,
  PriceSpan,
} from './Style';

const ITEM_PRICES = {
  Burger: 20,
  Cheese: 50,
  CheeseSAUCE: 40,
  FrenchFries: 30,
};
let TOTAL_PRICE = 0;

const Order = (props) => {
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
            <IncrementI
              className="fas fa-plus-circle"
              onClick={() => addIngredientHandler(quantity, id, ITEM_PRICES[name])}
            />
            <Span>{quantity}</Span>
            <DecrementI
              className="fas fa-minus-circle"
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
          <i className="fas fa-times" onClick={() => props.purchaseCancelled()} />
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
