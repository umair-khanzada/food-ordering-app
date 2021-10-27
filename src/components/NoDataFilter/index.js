import React from 'react';

import NoData from '../../assets/no-data.jpg';
import { NoDataContainer, ImageContainer, PlaceHolder, DoNotFound } from './style';

function NoDataFound({ text }) {
  return (
    <NoDataContainer>
      <ImageContainer>
        <DoNotFound alt="No Data" src={NoData} />
      </ImageContainer>
      <PlaceHolder>{text}</PlaceHolder>
    </NoDataContainer>
  );
}
export default NoDataFound;
