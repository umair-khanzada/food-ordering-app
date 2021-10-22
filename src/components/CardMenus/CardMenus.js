import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import NoDataFound from '../NoDataFilter';
import CommonCard from './CommonCard';
import { Dishes } from './style';
const CardMenu = ({ foodType }) => {
  const foodItems = useSelector((state) => {
    const { cartItemReducer } = state;
    return cartItemReducer;
  });
  const [itemFound, setItemFound] = useState(false);
  return (
    <Dishes>
      {foodItems.map(({ id, name, price, categoryId, createdBy, imgUrl }) => {
        const { id: category } = categoryId;
        if (category === foodType) {
          if (!itemFound) {
            setItemFound(true);
          }
          return (
            <CommonCard
              key={id}
              buttonText="Add to Cart"
              id={id}
              img={imgUrl}
              name={name}
              price={price}
              vendorId={createdBy}
            />
          );
        }
      })}
      {itemFound ? null : <NoDataFound text="No Item Found" />}
    </Dishes>
  );
};
export default CardMenu;
