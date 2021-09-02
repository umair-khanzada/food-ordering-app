import React from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';

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
          indicatorColor="secondary"
          onChange={handleChange}
          textColor="secondary"
          value={value}
        >
          <Tab label="Gravy" />
          <Tab label="Bread" />
          <Tab label="Rice" />
          <Tab label="Burgers" />
          <Tab label="Rolls" />
        </Tabs>
      </Paper>
      {/* <p>{value}</p> */}
    </>
  );
};

export default MainTab;
