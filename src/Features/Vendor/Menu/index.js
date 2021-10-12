import React, { useEffect, useState } from 'react';

import 'date-fns';
import { Grid } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader/index';
import RouteNames from '../../../routes/RouteNames';
import { ERROR, GetHeader, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteitem } from '../mutation';
import { FetchItems } from '../request';
import { ButtonsContainer, CustomTableContainer, ButtonContainer } from './style';
function Menu() {
  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const history = useHistory();
  const { headers } = GetHeader();
  const [items, setSaveItems] = useState([]);
  const { data: itemsData, refetch, isFetching } = FetchItems();

  const { editmenu, addmenu, restaurant } = RouteNames;

  useEffect(() => {
    if (itemsData !== undefined) {
      saveItems(itemsData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsData]);
  const saveItems = ({ data }) => {
    const itemData = data
      .filter(({ createdBy }) => vendorId === createdBy)
      .map(({ name, price, id, categoryId, kitchenId }) => {
        const { name: categoryName } = categoryId;
        const { name: kitchenName } = kitchenId;
        return { name, categoryName, kitchenName, price, id };
      });

    setSaveItems(itemData);
  };

  const onEdit = ({ id: itemId }) => {
    history.push({
      pathname: editmenu,
      search: `?id=${itemId}`,
    });
  };
  const header = ['Sno', 'ItemName', 'Type', 'Restraunt', 'Price', 'Edit'];
  function showAddMenu() {
    history.push(addmenu);
  }
  function showAddRestraunt() {
    history.push(restaurant);
  }
  function onDelete({ id: itemId }) {
    mutate({ itemId, headers });
  }

  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation(deleteitem, {
    onSuccess: (response) => {
      refetch();
      dispatch(toggleSnackbarOpen({ snackbarMessage: 'Successfull deleted', messageType: SUCCESS }));
      return response;
    },
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
  });
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <ButtonsContainer>
            <ButtonContainer>
              <CommonButton onClick={() => showAddRestraunt()} property="Add Restaurant" />
            </ButtonContainer>
            <ButtonContainer>
              <CommonButton onClick={() => showAddMenu()} property="Add Item" />
            </ButtonContainer>
          </ButtonsContainer>
          {isFetching ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              <CustomTableContainer>
                <CustomTable
                  header={header}
                  isDeleting={isLoading}
                  isEditDelete
                  onDelete={() => onDelete()}
                  onEdit={onEdit}
                  padding="5px 11px"
                  rows={items}
                  tablewidth="90%"
                />
              </CustomTableContainer>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
export default Menu;
