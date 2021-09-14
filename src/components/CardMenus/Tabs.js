import React, { useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import CardMenus from './CardMenus';

const MainTab = (props) => {
  const [value, setValue] = useState(0);

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
      <TabPanel index={0} value={value}>
        <CardMenus foodType="gravy" />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <CardMenus foodType="bread" />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <CardMenus foodType="rice" />
      </TabPanel>
      <CardMenus />
    </>
  );
};
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
}
export default MainTab;
