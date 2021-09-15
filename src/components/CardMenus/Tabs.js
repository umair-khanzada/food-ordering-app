/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';

import { Paper, Tab, Tabs } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';

import { openDrawer } from '../../Features/Dashboard/Reducer/action';
import { getIndex, setIndex } from '../../Features/Dashboard/tabIndex';
import CardMenus from './CardMenus';

const MainTab = (props) => {
  // const cartItemCount = useSelector((state) => {
  //   const {
  //     addtocartReducers: { cart },
  //   } = state;

  //   return cart.length;
  // });
  const [value, setValue] = React.useState(getIndex());
  // const [isDrawerOpen, setOpenDrawer] = useState(false);
  const handleChange = (event, newValue) => {
    // eslint-disable-next-line no-debugger
    setIndex(newValue);
    setValue(getIndex());
  };

  const dispatch = useDispatch();
  // function a11yProps(index) {
  //   console.log('index', index);
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }
  return (
    <>
      <Paper square>
        <Tabs indicatorColor="secondary" onChange={handleChange} textColor="secondary" value={value}>
          <Tab label="Gravy" />
          <Tab label="Bread" />
          <Tab label="Rice" />
          <Tab label="Burgers" />
          <Tab label="Rolls" />
          <Tab
            icon={<AddShoppingCartIcon style={{ color: 'black', fontSize: '20px' }} />}
            onClick={() => dispatch(openDrawer())}
          />
          {/* <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              right: '10px',
              position: 'absolute',
              width: '20px',
              height: '20px',
              backgroundColor: '#e91e63',
              borderRadius: '50%',
              color: 'white',
              marginRight: '210px',
              fontSize: '12px',
            }}
          >
            {cartItemCount}
          </span> */}
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
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default memo(MainTab);
