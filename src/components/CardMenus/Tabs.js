import React, { useEffect, useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import TabData from '../../Mock/TabList';
import History from '../../util/History';
import CardMenus from './CardMenus';

const MainTab = () => {
  const [tabValue, setTabValue] = useState('Gravy');
  const params = new URLSearchParams(useLocation().search);

  const onTabChange = (event, tabValue) => {
    if (tabValue !== 'addCart') {
      History.push(`/dashboard?category=${tabValue}`);
      setTabValue(tabValue);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const tabIndex = params.get('category');
    const [{ label }] = TabData;

    setTabValue(tabIndex ? tabIndex : label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={onTabChange} textColor="secondary" value={tabValue}>
          {category?.map(({ name, id }, index) => {
            return <Tab key={index} label={name} value={id} />;
          })}
        </Tabs>
      </Paper>

      {category?.map(({ id }, index) => {
        return (
          <TabPanel key={index} index={label} value={tabValue}>
            <CardMenus foodType={label} />
          </TabPanel>
        );
      })}
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default MainTab;
