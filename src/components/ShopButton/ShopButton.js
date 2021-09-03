import React, { useState } from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Modal from '../Modal/Modal';
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
