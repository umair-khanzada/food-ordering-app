import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Snackbar from '../../../components/AlertMessage';
import MainTab from '../../../components/CardMenus/Tabs';
import AddEditForm from '../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE } from '../../../components/CommonGridBasedForm/FieldTypes';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { SelectChangeHandler, fieldChangeHandler } from '../../../util/CommonGridBasedFormUtils';
import { getCardData } from '../actions';
import { FetchVendors, GetCategories, GetItemsByVendor } from '../request';
import { Filter } from './style';
import { FirstTab } from './style';
function Dashboard() {
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();

  const setFormFields = (fields, value, index) => {
    const updatedFields = fieldChangeHandler(fields, value, index);
    setFields(updatedFields);
  };

  const [vendorId, setVendorId] = useState('');
  const initialSelectFeild = [
    {
      type: AUTO_COMPLETE,
      label: '',
      values: [],
      placeholder: 'Select Vendor ',
      value: '',
      isValid: true,
      errorMessage: '',

      onChange: (event, value) => {
        if (value) {
          const { id } = value;

          setTabShow(true);
          setVendorId(id);
          setFormFields(initialSelectFeild, id, 0);
        } else {
          setFormFields(initialSelectFeild, '', 0);
          setTabShow(false);
        }
      },
    },
  ];
  const [fields, setFields] = useState(initialSelectFeild);

  const { data: vendors } = FetchVendors('vendor');
  const { data: category } = GetCategories();
  const { data: items, isFetching: isItemsFething } = GetItemsByVendor(vendorId);

  useEffect(() => {
    if (vendors) {
      saveVendors(vendors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vendors]);

  useEffect(() => {
    if (items) {
      dispatch(getCardData(items));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const saveVendors = (data) => {
    const resData = data.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 0);

    setFields(updatedFields);
  };

  return (
    <div>
      <Snackbar />
      <Grid container>
        <Grid item md={12}>
          <Box>
            <Filter>
              <AddEditForm fields={fields} />
            </Filter>

            {isItemsFething && <Loader />}
            <FirstTab>{isTabshow && !isItemsFething && <MainTab category={category} />}</FirstTab>
            {!isTabshow && <NoDataFound text="No Vendor Seleted" />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
