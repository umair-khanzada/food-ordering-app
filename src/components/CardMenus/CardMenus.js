import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserData from '../../Mock/Data';
// eslint-disable-next-line import/no-cycle
import CommonCard from './CommonCard';
const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(3),

    marginTop: '50px',
  },
}));

const CardMenu = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.control} container elevation={3} spacing={3}>
        {UserData.map((usedata) => {
          const { id, name, price, resturantName, img } = usedata;

          return (
            <CommonCard
              key={id}
              buttonText="Add to Cart"
              img={img}
              name={name}
              price={price}
              resturantName={resturantName}
            />
          );
        })}
      </Grid>
    </div>
  );
};
export default CardMenu;
