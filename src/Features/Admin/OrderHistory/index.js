import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { fetchOrders } from './actions';
import { OrdersHistoryTitleContainer, OrdersHistoryTitle } from './style';

function OrderHistory() {
  const history = useHistory();
  const { addOrderHistory, editOrderHistory } = RouteNames;

  const onEdit = (row) => {
    history.push({
      pathname: editOrderHistory,
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  const [orders, setOrders] = useState([]);

  const getOrdersResponseFromEpic = (response) => {
    setOrders(response);
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders(getOrdersResponseFromEpic));
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      setHeader([...Object.keys(orders[0]), 'Edit']);
    }
  }, [orders]);

  return (
    <>
      <OrdersHistoryTitleContainer>
        <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
        <CommonButton onClick={() => history.push(addOrderHistory)} property="Add History" />
      </OrdersHistoryTitleContainer>

      <CustomTable header={header} isEditDelete onDelete={onDelete} onEdit={onEdit} rows={orders} tablewidth="90%" />
    </>
  );
}

export default OrderHistory;
