import React from 'react';

import { useSelector } from 'react-redux';

import CommonCard from './CommonCard';
import { ControlGrid } from './style';
const CardMenu = ({ foodType }) => {
  const card = useSelector((state) => {
    const { cartItemReducer } = state;
    return cartItemReducer;
  });

  return (
    <div>
      <ControlGrid container elevation={3} spacing={3}>
        {card.map(({ id, name, price, categoryId, createdBy, imgUrl }) => {
          const { id: category } = categoryId;
          if (category === foodType) {
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
      </ControlGrid>
    </div>
  );
};
export default CardMenu;
