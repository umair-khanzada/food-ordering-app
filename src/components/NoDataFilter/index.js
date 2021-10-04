import React from 'react';

import NoData from '../../assets/no-data.jpg';
import { NoDataContainer, ImageContainer, PlaceHolder } from './style';

function NoDataFilter({ text }) {
  return (
    <NoDataContainer>
      <ImageContainer>
        <img alt="No Data" src={NoData} />
      </ImageContainer>
      <PlaceHolder>{text}</PlaceHolder>
    </NoDataContainer>
  );
}
export default NoDataFilter;
