import React from 'react';

import { useHistory } from 'react-router';

import RouteNames from '../../../routes/RouteNames';
import { FetchVendors } from '../request';
import { DetailsVendor, ImageContainer, VendorCard, VendorCardItem } from './style';
function Dashboard() {
  const profileImage = 'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png';
  const { showTabScreen } = RouteNames;
  const history = useHistory();

  const { data: vendors } = FetchVendors('vendor');

  const showVendor = (vendorId) => {
    history.push({
      pathname: showTabScreen,
      search: `?id=${vendorId}`,
    });
  };
  return (
    <div>
      {vendors && (
        <VendorCard>
          {vendors.map(({ name, id, contact }) => {
            return (
              <VendorCardItem key={id} onClick={() => showVendor(id)}>
                <ImageContainer>
                  <img alt="profile" src={profileImage} width="100%" />
                </ImageContainer>

                <DetailsVendor>
                  <h2>{name}</h2>
                  <p>{contact}</p>
                </DetailsVendor>
              </VendorCardItem>
            );
          })}
        </VendorCard>
      )}
    </div>
  );
}
export default Dashboard;
