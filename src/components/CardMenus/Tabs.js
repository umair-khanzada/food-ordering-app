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
    const {
      target: { innerText },
    } = event;

    History.push('/dashboard?category=' + innerText + '&&index=' + tabIndex);

    setTabValue(parseInt(tabIndex));
  };
  useEffect(() => {
    const tabIndex = params.get('index');

    setTabValue(tabIndex ? parseInt(tabIndex) : 0);
  }, []);
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={onTabChange} textColor="secondary" value={tabValue}>
          {TabData.map((tab, index) => {
            const { label } = tab;
            return <Tab key={index} label={label} />;
          })}
        </Tabs>
      </Paper>
      <CardMenus />
    </>
  );
};

export default MainTab;
