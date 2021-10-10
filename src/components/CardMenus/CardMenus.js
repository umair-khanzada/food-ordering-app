import React from 'react';

import { useSelector } from 'react-redux';

import curry from '../../assets/curry.jpg';
import NoDataFound from '../NoDataFilter';
import CommonCard from './CommonCard';
import { ControlGrid } from './style';
const CardMenu = ({ foodType }) => {
  const card = useSelector((state) => {
    const { cartItemReducer } = state;
    return cartItemReducer;
  });
  let count = 0;
  return (
    <div>
      {console.log('card', card)};
      <ControlGrid container elevation={3} spacing={3}>
        {card.map(({ id, name, price, categoryId, createdBy }) => {
          const { id: category } = categoryId;
          if (category === foodType) {
            count++;
            return (
              <CommonCard
                key={id}
                buttonText="Add to Cart"
                id={id}
                img={curry}
                name={name}
                price={price}
                resturantName="Dominos"
                vendorId={createdBy}
              />
            );
          }

          // return <NoDataFound key={id} text="No Item Found" />;
        })}
        {count === 0 ? <NoDataFound text="No Item Found" /> : null}
      </ControlGrid>
    </div>
  );
};
export default CardMenu;
