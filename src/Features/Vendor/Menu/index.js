import React, { useEffect, useState } from 'react';

import 'date-fns';
import { Grid } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader/index';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteitem } from '../mutation';
import { FetchItems } from '../request';
import { ButtonsContainer, CustomTableContainer, ButtonContainer } from './style';
function Menu() {
  const history = useHistory();
  const { headers } = GetHeader();
  const [items, setSaveItems] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
  const { isLoading: fetchloading, data: itemsData, refetch, isFetching } = FetchItems();

  const { editmenu, addmenu, restaurant } = RouteNames;

  useEffect(() => {
    if (itemsData !== undefined) {
      saveItems(itemsData);
    }
  }, [itemsData]);
  const saveItems = ({ data }) => {
    const itemData = data.map(({ name, price, id, categoryId, kitchenId }) => {
      const { name: categoryName } = categoryId;
      const { name: kitchenName } = kitchenId;
      return { name, categoryName, kitchenName, price, id };
    });
    setSaveItems(itemData);
  };
  const handleDateChange = (data) => {
    setSelectedDate(data);
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
  const { mutate, isLoading } = useMutation(deleteitem, {
    onSuccess: (response) => {
      refetch();
      return response;
    },
  });
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <ButtonsContainer>
            <ButtonContainer>
              <CommonButton onClick={showAddRestraunt} property="Add Restaurant" />
            </ButtonContainer>
            <ButtonContainer>
              <CommonButton onClick={showAddMenu} property="Add Item" />
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
                  onDelete={onDelete}
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
