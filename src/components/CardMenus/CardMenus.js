import React from 'react';

import CardData from '../../Mock/Data';
import CommonCard from './CommonCard';
import { ControlGrid } from './style';

const CardMenu = ({ foodType }) => {
  return (
    <div>
      <ControlGrid container elevation={3} spacing={3}>
        {CardData.map(({ id, name, price, type, resturantName, img }, index) => {
          if (type === foodType) {
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
      </ControlGrid>
    </div>
  );
};
export default CardMenu;
