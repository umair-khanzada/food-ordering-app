import React, { useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useParams } from 'react-router-dom';

import CardMenus from './CardMenus';

const MainTab = (props) => {
  const [value, setValue] = useState();
  const params = useParams();
  console.log('params', params);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={handleChange} textColor="secondary" value={value}>
          <Tab label="Gravy" />
          <Tab label="Bread" />
          <Tab label="Rice" />
          <Tab label="Burgers" />
          <Tab label="Rolls" />
          <Tab icon={<AddShoppingCartIcon />} onClick={() => props.setOpenDrawer()} />
        </Tabs>
      </Paper>
      <CardMenus />
    </>
  );
};

export default MainTab;
