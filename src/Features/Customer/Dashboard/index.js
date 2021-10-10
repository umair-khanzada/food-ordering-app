import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { PersonRounded } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Snackbar from '../../../components/AlertMessage';
import MainTab from '../../../components/CardMenus/Tabs';
import { AUTO_COMPLETE } from '../../../components/CommonGridBasedForm/FieldTypes';
import CommonGridBasedForm from '../../../components/CommonGridBasedForm/index';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import RouteNames from '../../../routes/RouteNames';
import { fieldChangeHandler, SelectChangeHandler } from '../../../util/CommonGridBasedFormUtils';
import { getCardData } from '../actions';
import { FetchVendors, GetCategories, GetItemsByVendor } from '../request';
import { Filter, FirstTab } from './style';
function Dashboard() {
  const { showTabScreen } = RouteNames;
  const history = useHistory();
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();
  const [vendorName, setVendorName] = useState('');

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

  const { data: vendors, isFetching: isVendorFetching } = FetchVendors('vendor');
  const { data: category } = GetCategories();
  const { data: items, isFetching: isItemsFething } = GetItemsByVendor(vendorId);
  const onEdit = ({ id: itemId }) => {
    history.push({
      pathname: showTabScreen,
      search: `?id=${itemId}`,
    });
  };

  useEffect(() => {
    if (vendors) {
      saveVendors(vendors);
      console.log('vendors', vendors);
      const { name } = vendors;
      console.log('name', name);
      setVendorName(name);
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

  const showVendor = (vendorId) => {
    history.push({
      pathname: showTabScreen,
      search: `?id=${vendorId}`,
    });
  };
  return (
    <div>
      <Snackbar />
      <Grid container>
        <Grid item md={12}>
          <Box>
            {vendors && (
              <vendorCard style={{ display: 'flex' }}>
                {vendors.map(({ name, id }) => {
                  return (
                    <div
                      key={id}
                      onClick={() => showVendor(id)}
                      style={{
                        display: 'flex',
                        padding: '10px',
                        textAlign: 'center',
                        boxShadow: '0 0 10px rgb(0 0 0 / 20%)',
                        margin: '20px',
                        height: '278px',
                        width: '217px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div style={{ borderRadius: '50%', boxShadow: '0 0 10px rgb(0 0 0 / 20%)' }}>
                        <PersonRounded style={{ fontSize: '49px' }} />
                      </div>
                      <h1>{name}</h1>
                    </div>
                  );
                })}
              </vendorCard>
            )}

            <Filter>
              <CommonGridBasedForm fields={fields} />
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
