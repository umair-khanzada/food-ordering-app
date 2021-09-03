/* eslint-disable import/no-named-as-default */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Modal from '../Modal/Modal';
// eslint-disable-next-line import/no-named-as-default-member
import Order from '../Order/Order';

const ShopButton = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const purchaseHandler = () => {
    setPurchasing((prev) => !prev);
  };
  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  const purchaseContinueHandler = () => {
    // eslint-disable-next-line no-alert
    alert('you continue!');
  };

  return (
    <>
      <AddShoppingCartIcon onClick={() => purchaseHandler()} />
      <Modal modalClosed={purchaseCancelHandler} show={purchasing}>
        <Order purchaseCancelled={purchaseCancelHandler} purchaseContinued={purchaseContinueHandler} />
      </Modal>
    </>
  );
};

export default ShopButton;
