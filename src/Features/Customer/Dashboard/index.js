import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import MainTab from '../../../components/CardMenus/Tabs';
import AddEditForm from '../../../components/CommonGridBasedForm';
import { AUTO_COMPLETE } from '../../../components/CommonGridBasedForm/FieldTypes';
import Drawer from '../../../components/Drawer';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { SelectChangeHandler } from '../../../util/CommonGridBasedFormUtils';
import { getCardData } from '../actions';
import { InsertOrder } from '../mutation';
import { FetchVendors, GetCategories, GetItemsByVendor } from '../request';
import { Filter } from './style';
import { FirstTab } from './style';
function Dashboard() {
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();

  const [vendorId, setVendorId] = useState('');
  const [fields, setFields] = useState([
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
          let [{ value: fieldValue }] = fields;

          fieldValue = id;

          setTabShow(true);
          setVendorId(id);
        } else {
          setTabShow(false);
        }
      },
    },
  ]);

  const { data: vendors } = FetchVendors('vendor');
  const { data: category } = GetCategories();
  const { data: items, isFetching: isItemsFething } = GetItemsByVendor(vendorId);

  useEffect(() => {
    if (vendors) {
      saveVendors(vendors);
    }
  }, [vendors]);

  useEffect(() => {
    if (items) {
      dispatch(getCardData(items));
    }
  }, [items]);

  const saveVendors = (data) => {
    const resData = data.map(({ name, id }) => ({ label: name, id }));
    const updatedFields = SelectChangeHandler(fields, resData, 0);

    setFields(updatedFields);
  };

  const { mutate } = useMutation(InsertOrder);

  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Box>
            <Filter>
              <AddEditForm fields={fields} />
            </Filter>

            {isItemsFething && <Loader />}
            <FirstTab>
              <Drawer mutate={mutate} vendorId={vendorId} />
              {isTabshow && !isItemsFething && <MainTab category={category} />}
            </FirstTab>
            {!isTabshow && <NoDataFound text="No Vendor Seleted" />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
