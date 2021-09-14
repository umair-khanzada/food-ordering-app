import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserData from '../../Mock/Data';
import CommonCard from './CommonCard';
const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(3),
    marginTop: '50px',
  },
}));

const CardMenu = ({ foodType }) => {
  const classes = useStyles();
  // const cart = useSelector((state) => state.addtocartReducers.cart);

  const { control } = classes;
  console.log('CAKKKED');

  return (
    <div>
      <Grid className={classes.control} container elevation={3} spacing={3}>
        {UserData.map((usedata, index) => {
          console.log('CAKKKED2');

          const { id, name, price, type, resturantName, img } = usedata;
          if (type == foodType) {
            return (
              <CommonCard
                key={id}
                buttonText="Add to Cart"
                id={id}
                img={img}
                name={name}
                price={price}
                resturantName={resturantName}
              />
            );
          }
        })}
      </Grid>
    </div>
  );
};
export default CardMenu;
