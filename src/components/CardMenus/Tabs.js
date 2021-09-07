/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import CardMenus from './CardMenus';

const MainTab = (props) => {
  const [value, setValue] = useState(2);
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
          <Tab icon={<AddShoppingCartIcon />} onClick={props.click} />
        </Tabs>
      </Paper>
      <CardMenus />
    </>
  );
};

export default MainTab;
