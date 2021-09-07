import React from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';

import CardMenus from './CardMenus';

const MainTab = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper square>
        <Tabs
          aria-label="disabled tabs example"
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          value={value}
        >
          <Tab label="Gravy" />
          <Tab label="Bread" />
          <Tab label="Rice" />
          <Tab label="Burgers" />
          <Tab label="Rolls" />
          <Tab label="Pizza" />
          <Tab label="Chinese" />
        </Tabs>
      </Paper>
      <CardMenus />
    </>
  );
};

export default MainTab;
