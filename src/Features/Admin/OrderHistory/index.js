import React, { useState, useEffect } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { deleteUserById } from '../Common Requests/mutation';
// import { ordersHistoryList } from '../../../Mock/OrdersHistoryList';
import { OrderHistoryListApi } from './request';
import { OrdersHistoryTitleContainer, OrdersHistoryTitle } from './style';
function OrderHistory() {
  const { addOrderHistory, editOrderHistory } = RouteNames;
  // const onEdit = (row) => {
  //   history.push({
  //     pathname: editOrderHistory,
  //     state: { data: row },
  //   });
  // };
  // const onDelete = (row) => {
  //   row;
  // };
  const { data: orderData, refetch: refetchUser, isFetching } = OrderHistoryListApi('Orders');
  console.log('data', orderData);
  const header = ['Id', 'Name', 'Contact', 'Items', 'Price', 'Date', 'Edit'];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (Array.isArray(orderData)) {
      orderData.map((order) => {
        const removeElements = ['password', 'isEmailVerified'];

        removeElements.map((removeElement) => delete order[removeElement]);
      });
      setOrders(orderData);
    }
  }, [orderData]);
  const DeleteUser = useMutation(deleteUserById, {
    onError: () => {},
    onSuccess: () => {
      refetchUser();
    },
  });
  const { addUser, editUser } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editUser,
      search: '?id=' + id,
    });
  };

  const onDelete = ({ id }) => {
    DeleteUser.mutateAsync({ id });
  };
  const history = useHistory();

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <OrdersHistoryTitleContainer>
            <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
            <CommonButton onClick={() => history.push(addOrderHistory)} property="Add History" />
          </OrdersHistoryTitleContainer>
          <CustomTable
            header={header}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={orders}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
}
export default OrderHistory;
