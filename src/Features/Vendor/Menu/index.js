import React, { useEffect, useState } from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { FetchItems } from '../request';
import { ButtonContainer, ButtonsContainer, FilterButton, HeaderLeftContainer, HeaderRightContainer } from './style';

function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [items, setSaveItems] = useState([]);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));
  const itemsData = FetchItems();

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
  function deleteItem(itemId) {
    // dispatch(deleteitem(currentSelectedRow));
    // onDelete(currentSelectedRow);
    // dispatch(closeModal());
    // const updatedItem=items.filter(()=>{})
    console.log('id', itemId);
    console.log('items', items);
    const updatedItem = items.filter(({ id }) => id !== itemId);
    console.log('updtaed', updatedItem);
    setSaveItems(updatedItem);
  }

  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <ButtonsContainer>
            <HeaderLeftContainer>
              <ButtonContainer>
                <CommonButton fontSize="14px" minwidth="100px" onClick={showAddRestraunt} property="Add Restraunt" />
              </ButtonContainer>
              <ButtonContainer>
                <CommonButton fontSize="14px" minwidth="100px" onClick={showAddMenu} property="Add Item" />
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
                <CommonButton fontSize="14px" minwidth="100px" property="Save Time" />
              </FilterButton>
            </HeaderRightContainer>
          </ButtonsContainer>

          <div style={{ padding: '20px', marginTop: '10px' }}>
            <CustomTable
              deleteItem={deleteItem}
              header={header}
              isEditDelete
              onEdit={onEdit}
              padding="5px 11px"
              rows={items}
              tablewidth="90%"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Menu;
