import React from 'react';

import { CardContent, Typography } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import CommonButton from '../../components/Button/Button';
import OutlinedCard from '../../components/Card/Card';
import { VendorGrid, UserAvatar, Div, PhoneDiv, Header } from './style';

export default function Vendor({ vendor }) {
  // One option to get theme and supply it to styled compoenents
  return (
    <VendorGrid>
      <OutlinedCard height=" 370px" minwidth="230px" variant="outlined">
        <UserAvatar src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" />
        <Header title={<h1>{vendor.name}</h1>} />
        <CardContent>
          <Div>
            <Typography component="p" variant="h4">
              Time:
            </Typography>
            <Typography component="p" variant="h4">
              {vendor.time}
            </Typography>
          </Div>
          <Div>
            <Typography component="p" variant="h4">
              Building:
            </Typography>
            <Typography component="p" variant="h4">
              {vendor.building}
            </Typography>
          </Div>
          <PhoneDiv>
            <PhoneAndroidIcon />
            <Typography>{vendor.contact}</Typography>
          </PhoneDiv>
          <CommonButton height="32px" minwidth="100%" property="Menu" />
        </CardContent>
      </OutlinedCard>
    </VendorGrid>
  );
}
