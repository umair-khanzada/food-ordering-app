import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import MainTab from '../../../components/CardMenus/Tabs';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { getCardData } from '../actions';
import { GetCategories, GetItemsByVendor } from '../request';
import { FirstTab } from './style';
function ShowTab() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const vendorId = params.get('id');
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();

  //   const [vendorId, setVendorId] = useState('');
  //   const [fields, setFields] = useState([
  //     {
  //       type: AUTO_COMPLETE,
  //       label: '',
  //       values: [],
  //       placeholder: 'Select Vendor ',
  //       value: '',
  //       isValid: true,
  //       errorMessage: '',

  //       onChange: (event, value) => {
  //         if (value) {
  //           const { id } = value;
  //           let [{ value: fieldValue }] = fields;

  //           fieldValue = id;

  //           setTabShow(true);
  //           setVendorId(id);
  //         } else {
  //           setTabShow(false);
  //         }
  //       },
  //     },
  //   ]);

  const { data: category } = GetCategories();
  const { data: items, isFetching: isItemsFething } = GetItemsByVendor(vendorId);

  //   useEffect(() => {
  //     if (vendors) {
  //       saveVendors(vendors);
  //       console.log('vendors', vendors);
  //       const { name } = vendors;
  //       console.log('name', name);
  //       setVendorName(name);
  //     }
  //   }, [vendors]);

  useEffect(() => {
    if (items) {
      dispatch(getCardData(items));
    }
  }, [items]);

  //   const saveVendors = (data) => {
  //     const resData = data.map(({ name, id }) => ({ label: name, id }));

  //     const updatedFields = SelectChangeHandler(fields, resData, 0);

  //     setFields(updatedFields);
  //   };

  const showVendor = (vendorId) => {
    setTabShow(true);
  };
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Box>
            {isItemsFething && <Loader />}
            <FirstTab>{isTabshow && !isItemsFething && <MainTab category={category} />}</FirstTab>
            {!isTabshow && <NoDataFound text="No Vendor Seleted" />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default ShowTab;
