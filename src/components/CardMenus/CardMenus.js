import React from 'react';

import { useSelector } from 'react-redux';

import NoDataFound from '../NoDataFilter';
import CommonCard from './CommonCard';
import { ControlGrid } from './style';
const CardMenu = ({ foodType }) => {
  const card = useSelector((state) => {
    const { cartItemReducer } = state;
    return cartItemReducer;
  });
  let itemFound = 0;
  return (
    <div>
      <ControlGrid container elevation={3} spacing={3}>
        {card.map(({ id, name, price, categoryId, createdBy, imgUrl }) => {
          const { id: category } = categoryId;
          if (category === foodType) {
            itemFound++;
            return (
              <CommonCard
                key={id}
                buttonText="Add to Cart"
                id={id}
                img={imgUrl}
                name={name}
                price={price}
                resturantName="Dominos"
                vendorId={createdBy}
              />
            );
          }
        })}
        {itemFound === 0 ? <NoDataFound text="No Item Found" /> : null}
      </ControlGrid>
    </div>
  );
};
export default CardMenu;
