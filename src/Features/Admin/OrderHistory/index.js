import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { ordersHistoryList } from '../../../Mock/OrdersHistoryList';
import { OrdersHistoryTitleContainer, OrdersHistoryTitle } from './style';
function OrderHistory() {
  const history = useHistory();

  const onEdit = (row) => {
    history.push({
      pathname: '/editorderhistory',
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  const header = ['Id', 'Name', 'Contact', 'Items', 'Price', 'Date', 'Edit'];

  return (
    <>
      <OrdersHistoryTitleContainer>
        <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
        <CommonButton onClick={() => history.push('/addhistory')} property="Add History" />
      </OrdersHistoryTitleContainer>

      <CustomTable
        header={header}
        isEditDelete
        onDelete={onDelete}
        onEdit={onEdit}
        rows={ordersHistoryList}
        tablewidth="80%"
      />
    </>
  );
}

export default OrderHistory;
