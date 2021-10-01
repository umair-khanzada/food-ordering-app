import React, { useEffect, useState } from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { GetHeader } from '../../../scripts/constants';
import { AuthToken } from '../../../scripts/constants';
import { deleteitem } from '../mutation';
import { FetchItems } from '../request';
import {
  ButtonContainer,
  ButtonsContainer,
  FilterButton,
  HeaderLeftContainer,
  HeaderRightContainer,
  CustomTableContainer,
} from './style';

function Menu() {
  const history = useHistory();
  const { headers } = GetHeader();
  const [items, setSaveItems] = useState([]);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
  const { isLoading: fetchloading, data: itemsData, refetch } = FetchItems();
  const token = AuthToken();
  useEffect(() => {
    // dispatch(fetchitems(saveItems));
    if (itemsData !== undefined) {
      saveItems(itemsData);
    }
  }, [itemsData]);

  const saveItems = ({ data: { results } }) => {
    setSaveItems(results);
  };

  const handleDateChange = (data) => {
    setSelectedDate(data);
  };

  const onEdit = (row) => {
    history.push({
      pathname: '/editmenu',
      state: { data: row },
    });
  };
  const header = ['Item Name', 'Type', 'Restraunt', 'Price', 'Edit'];

  function showAddMenu() {
    history.push('/addmenu');
  }
  function showAddRestraunt() {
    history.push('/restaurant');
  }
  function deleteItem({ id: itemId }) {
    mutate({ itemId, headers });
  }

  const { mutate, mutateAsync, isLoading, error } = useMutation(deleteitem, {
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
            <HeaderLeftContainer>
              <ButtonContainer>
                <CommonButton onClick={showAddRestraunt} property="Add Restraunt" />
              </ButtonContainer>
              <ButtonContainer>
                <CommonButton onClick={showAddMenu} property="Add Item" />
              </ButtonContainer>
            </HeaderLeftContainer>
            <HeaderRightContainer>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  id="time-picker"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                  label=" Closing time"
                  margin="normal"
                  onChange={handleDateChange}
                  value={selectedDate}
                />
              </MuiPickersUtilsProvider>
              <FilterButton>
                <CommonButton property="Save Time" />
              </FilterButton>
            </HeaderRightContainer>
          </ButtonsContainer>

          <CustomTableContainer>
            <CustomTable
              deleteTableRow={deleteItem}
              header={header}
              isEditDelete
              onEdit={onEdit}
              padding="5px 11px"
              rows={items}
              tablewidth="90%"
            />
          </CustomTableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
export default Menu;
