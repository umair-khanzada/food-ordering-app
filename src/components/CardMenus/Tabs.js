import React from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useSelector } from 'react-redux';

import CardMenus from './CardMenus';

const MainTab = (props) => {
  // console.log('value', value);
  const cartItemCount = useSelector((state) => {
    const {
      addtocartReducers: { cart },
    } = state;

    return cart.length;
  });

  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-debugger
    props.setTabValue(newValue);
  };
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={handleChange} textColor="secondary" value={props.value}>
          <Tab label="Gravy" />
          <Tab label="Bread" />
          <Tab label="Rice" />
          <Tab label="Burgers" />
          <Tab label="Rolls" />
          <Tab
            icon={<AddShoppingCartIcon style={{ color: 'black', fontSize: '20px' }} />}
            onClick={() => props.setOpenDrawer()}
          />
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              right: '10px',
              position: 'absolute',
              width: '20px',
              height: '20px',
              backgroundColor: '#e91e63',
              borderRadius: '50%',
              color: 'white',
              marginRight: '210px',
              fontSize: '12px',
            }}
          >
            {cartItemCount}
          </span>
        </Tabs>
      </Paper>
      <TabPanel index={0} value={props.value}>
        <CardMenus foodType="Gravy" />
      </TabPanel>
      <TabPanel index={1} value={props.value}>
        <CardMenus foodType="Bread" />
      </TabPanel>
      <TabPanel index={2} value={props.value}>
        <CardMenus foodType="Rice" />
      </TabPanel>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
}
export default MainTab;
