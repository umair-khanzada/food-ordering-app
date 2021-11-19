import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CollapsibleTable from '../../../components/CollapsibleTable';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { ERROR, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { updateOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { CollapseTableContainer, SummaryHeader } from './Style';

const OrdersList = () => {
  const { data: ordersList, refetch: refetchOrders, isFetching, isPreviousData } = FetchOrderHistory();
  const [list, setList] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(() => {
    if (ordersList) {
      if (!isPreviousData) {
        setList([...ordersList]);

        setIsFetchingData(false);
      }
    }
  }, [ordersList]);

  const [userId, setUserId] = useState(0);
  const [orderAmount, setOrderAmount] = useState(0);
  const [isUpdateOrder, setIsUpdateOrder] = useState(false);
  const vendor_Id = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const dispatch = useDispatch();
  const { mutateAsync, isLoading } = useMutation(updateOrderById, {
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
          snackbarMessage: 'Successfull order has been updated',
          messageType: SUCCESS,
        }),
      );
    },
  });
  const history = useHistory();
  const onReject = ({ id, status, price }) => {
    if (status !== 'recieved' || status !== 'rejected') {
      const updatedOrder = {
        status: 'rejected',
        amount: price,
      };
      mutateAsync({ id, updatedOrder });
    }
  };

  const [itemSummary, setItemSummary] = useState([]);
  useEffect(() => {
    const itemQuantity = {};
    const itemSummary = [];
    if (list) {
      list.map(({ items, status }) => {
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
  }, [list]);

  const onEdit = ({ id, price, user_id }) => {
    setIsUpdateOrder(true);
    setOrderAmount(price);
    setUserId(user_id);
    const updatedOrder = {
      status: 'received',
      amount: price,
    };
    mutateAsync({ id, updatedOrder });
  };

  const header = ['S.No', 'Name', 'Total Items', 'Price', 'Status', 'Edit'];
  const itemSummaryHeader = ['S.No', 'ItemName', 'Total'];

  return (
    <>
      {isFetchingData ? (
        <Loader />
      ) : (
        <>
          {list.length !== 0 ? (
            <CollapseTableContainer>
              <SummaryHeader>Order History</SummaryHeader>
              <CollapsibleTable
                header={header}
                isDeleting={isLoading}
                isEditDelete
                onEdit={onEdit}
                onReject={onReject}
                rows={list}
                tablewidth="90%"
              />
              {itemSummary.length !== 0 && (
                <Box mt={4}>
                  <SummaryHeader>Items Summary</SummaryHeader>
                  <CustomTable cellWidth="30%" header={itemSummaryHeader} rows={itemSummary} tablewidth="90%" />
                </Box>
              )}
            </CollapseTableContainer>
          ) : (
            <NoDataFound text="There is no order" />
          )}
        </>
      )}
    </>
  );
};
export default OrdersList;
