import CommonCard from './CommonCard';
// eslint-disable-next-line import/order
import React from 'react';
import UserData from '../../Mock/Data';
const CardMenu = () => {
  return (
    <div>
      {UserData.map((usedata) => {
        const { id, name, price, resturantName } = usedata;
        return <CommonCard key={id} name={name} price={price} resturantName={resturantName} />;
      })}
    </div>
  );
};
export default CardMenu;
