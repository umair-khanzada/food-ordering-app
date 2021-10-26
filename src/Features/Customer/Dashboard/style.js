import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const VendorGrid = styled(Grid)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    display: block;
    margin: auto;
  }
  `};
`;

export const Filter = styled.div`
  height: 124px;
`;
export const Div = styled.div`
  padding-right: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const OrderHeading = styled(Typography)`
  font-weight: 700;
  margin-left: 40px;
`;

export const OrderRef = styled(Typography)`
  color: lightgrey;
  padding-left: 10px;
  padding-top: 8px;
  font-size: 18px;
`;
export const OrderDetails = styled.div`
  display: flex;
`;
export const UserInfo = styled.div`
  padding-right: 40px;
`;

export const VendorCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const VendorImage = styled.img`
  height: 80px;
`;
export const VendorCardItem = styled.div`
  display: flex;
  text-align: center;
  box-shadow: 5px 5px 5px grey;
  margin: 30px 20px 16px 60px;
  height: 110px;
  width: 280px;
  border: 1px solid wheat;
  align-items: center;
  border-radius: 50px 0 20px 0;

  justify-content: space-around;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 75px;
    width: 220px;
    border-radius: 20px 0 20px 0;
  }
`;
export const ImageContainer = styled.div`
  height: 70px;
  width: 70px;
`;
export const DetailsVendor = styled.div`
  text-align: left;
`;
