import React, { useEffect, useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import TabData from '../../Mock/TabList';
import History from '../../util/History';
import CardMenus from './CardMenus';

const MainTab = () => {
  const [value, setValue] = useState();
  const params = new URLSearchParams(useLocation().search);
  const handleChange = (event, newValue) => {
    const {
      target: { innerText },
    } = event;

    History.push('/dashboard?category=' + innerText + '&&index=' + newValue);

    setValue(parseInt(newValue));
  };
  useEffect(() => {
    const index = params.get('index');

    setValue(index ? parseInt(index) : 0);
  }, []);
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={handleChange} textColor="secondary" value={value}>
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
