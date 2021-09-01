/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const ITEM_PRICES = {
  Burger: 0.5,
  FrenchFries: 0.4,
  CheeseSauce: 1.3,
  Cheese: 0.9,
};
const control = [{ type: 'Burger' }, { type: 'FrenchFries' }, { type: 'CheeseSauce' }, { type: 'Cheese' }];

const Order = (props) => {
  const [itemState, itemSet] = useState({
    items: { Burger: 1, FrenchFries: 3, CheeseSauce: 1, Cheese: 2 },
    totalPrice: 4,
  });
  const ItemSummary = Object.keys(itemState.items).map((igkey) => {
    return (
      <>
        <li>
          <span>{igkey}</span>: {itemState.items[igkey]}
          <button onClick={() => addIngredientHandler(igkey)}>+</button>
          <button onClick={() => removeIngredientHandler(igkey)}>-</button>
        </li>
      </>
    );
  });

  const addIngredientHandler = (type) => {
    console.log(typeof type);
    console.log(itemState.items[type]);
    const oldCount = itemState.items[type];
    const newCount = oldCount + 1;
    const updatedItem = {
      ...itemState,
    };
    console.log(updatedItem);
    updatedItem.items[type] = newCount;
    itemSet(updatedItem);
  };
  const removeIngredientHandler = (type) => {
    const oldCount = itemState.items[type];
    const newCount = oldCount - 1;
    const updatedItem = {
      ...itemState,
    };
    updatedItem.items[type] = newCount;
    itemSet(updatedItem);
  };
  return (
    <>
      <h3>your order</h3>
      <p>A delicious burger with</p>
      {ItemSummary}
      <button onClick={props.purchaseCancelled}>Cancel</button>
      <button onClick={props.purchaseContinued}>Continue</button>
    </>
  );
};

export default Order;
