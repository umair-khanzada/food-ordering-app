import React from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { MenuList } from '../../../Mock/MenuList';
import { ButtonContainer, ButtonsContainer, FilterButton, HeaderLeftContainer, HeaderRightContainer } from './style';

function Menu() {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
    history.push('/restraunt');
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
            <CustomTable header={header} isEditDelete onEdit={onEdit} rows={MenuList} tablewidth="90%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Menu;
