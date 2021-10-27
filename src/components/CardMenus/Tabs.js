import React, { useState } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';

import CardMenus from './CardMenus';

const MainTab = ({ category }) => {
  const [tabValue, setTabValue] = useState(category[0].id);

  const onTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

  return (
    <>
      <Paper square>
        <Tabs
          indicatorColor="secondary"
          onChange={onTabChange}
          textColor="secondary"
          value={tabValue}
          variant="scrollable"
        >
          {category?.map(({ name, id }, index) => {
            return <Tab key={index} label={name} value={id} />;
          })}
        </Tabs>
      </Paper>

      {category?.map(({ id }, index) => {
        return (
          <TabPanel key={index} index={id} value={tabValue}>
            <CardMenus foodType={id} />
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
