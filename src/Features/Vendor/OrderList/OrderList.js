import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CollapsibleTable from '../../../components/CollapsibleTable';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { ERROR, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { CollapseTableContainer, OrdersListTitleContainer } from './Style';

const OrdersList = () => {
  const { data: ordersList, refetch: refetchOrders, isFetching } = FetchOrderHistory();
  const [itemSummary, setItemSummary] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const itemQuantity = {};
    const itemSummary = [];
    if (ordersList) {
      ordersList.map(({ items, status }) => {
        items.map(({ name, quantity }) => {
          if (status === 'received') {
            itemQuantity[name] = quantity + (itemQuantity[name] || 0);
          }
        });
      });
      for (const key in itemQuantity) {
        itemSummary.push({
          name: key,
          quantity: itemQuantity[key],
        });
      }

      setItemSummary(itemSummary);
    }
  }, [ordersList]);
  const { mutateAsync, isLoading } = useMutation(deleteOrderById, {
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
    onSuccess: () => {
      refetchOrders();
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Successfull order has been deleted',
          messageType: SUCCESS,
        }),
      );
    },
  });
  const history = useHistory();
  const { editOrderList } = RouteNames;
  const onEdit = (id) => {
    history.push({
      pathname: editOrderList,
      search: '?id=' + id,
    });
  };
  const onDelete = (id) => {
    mutateAsync(id);
  };
  const header = ['S.No', 'Name', 'Total Items', 'Price', 'status', 'edit'];
  const itemSummaryHeader = ['S.No', 'itemName', 'total'];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <OrdersListTitleContainer />
          <CollapseTableContainer>
            <CollapsibleTable
              header={header}
              isDeleting={isLoading}
              isEditDelete
              onDelete={onDelete}
              onEdit={onEdit}
              rows={ordersList}
              tablewidth="90%"
            />

            <Box height="80vh" mt={4}>
              <CustomTable cellWidth="30%" header={itemSummaryHeader} rows={itemSummary} tablewidth="50%" />
            </Box>
          </CollapseTableContainer>
        </>
      )}
    </>
  );
};
export default OrdersList;
