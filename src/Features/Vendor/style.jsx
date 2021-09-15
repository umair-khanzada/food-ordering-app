import { Grid, Avatar, CardHeader } from '@material-ui/core';
import styled from 'styled-components';
export const UserAvatar = styled(Avatar)`
  width: 130px;
  height: 130px;
  margin: auto;
  box-shadow: 5px 5px 5px gray;
`;

export const Header = styled(CardHeader)`
  text-align: center;
  color: #e91e63;
`;
export const VendorGrid = styled(Grid)`
  margin: 10px;
  background-color: white;
  border: 1px solid grey;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  max-width: 250px;
`;
export const PhoneDiv = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-bottom: 13px;
  color: grey;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`;

export default VendorGrid;
