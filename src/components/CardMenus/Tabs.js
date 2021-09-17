import React, { useEffect, useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import TabData from '../../Mock/TabList';
import History from '../../util/History';
import CardMenus from './CardMenus';

const MainTab = () => {
  const [tabValue, setTabValue] = useState();
  const params = new URLSearchParams(useLocation().search);
  const onTabChange = (event, tabIndex) => {
    History.push(`/dashboard?category=${tabIndex}`);
    setTabValue(tabIndex);
  };
  useEffect(() => {
    const tabIndex = params.get('category');
    const [{ label }] = TabData;
    setTabValue(tabIndex ? tabIndex : label);
  }, []);
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={onTabChange} textColor="secondary" value={tabValue}>
          {TabData.map(({ label }, index) => {
            return <Tab key={index} label={label} value={label} />;
          })}
        </Tabs>
      </Paper>
      <CardMenus />
    </>
  );
};

export default MainTab;
