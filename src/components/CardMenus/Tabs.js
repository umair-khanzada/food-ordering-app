import React from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { getIndex, setIndex } from '../../Features/Customer/tabIndex';
import CardMenus from './CardMenus';

const MainTab = (props) => {
  const [value, setValue] = React.useState(getIndex());
  console.log('main tab');

  const cartItemCount = useSelector((state) => {
    const {
      addtocartReducers: { cart },
    } = state;

    return cart.length;
  });

  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-debugger
    setIndex(newValue);
    setValue(getIndex());
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
        </Tabs>
      </Paper>
      <TabPanel index={0} value={value}>
        <CardMenus foodType="Gravy" />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <CardMenus foodType="Bread" />
      </TabPanel>
      <TabPanel index={2} value={value}>
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
