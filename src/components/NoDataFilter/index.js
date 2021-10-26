import React from 'react';

import NoData from '../../assets/no-data.jpg';
import { NoDataContainer, ImageContainer, PlaceHolder } from './style';

function NoDataFound({ text }) {
  return (
    <NoDataContainer>
      <ImageContainer>
        <img alt="No Data" src={NoData} style={{ marginTop: '50px' }} />
      </ImageContainer>
      <PlaceHolder>{text}</PlaceHolder>
    </NoDataContainer>
  );
}
export default NoDataFound;
