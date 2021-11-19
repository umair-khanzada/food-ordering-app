import { MenuItem, AppBar, Grid } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { LogoutRounded } from '@mui/icons-material';
import styled from 'styled-components';

import Color from '../../util/Color';

export const CartItemQuantity = styled.span`
  position: absolute;
  top: 0;
  right: 8px;
  color: white;
  width: 20px;
  font-size: 16px;
  padding: 2;
  border-radius: 20px;
  background-color: #ff4d4d;
  @media (max-width: 380px) {
    width: 14px;
    font-size: 9px;
    padding: 2px;
    border-radius: 20px;
    background-color: #ff4d4d;
  }
`;

export const StyledDiv = styled.div`
  flex-grow: 1;
  & .MuiToolbar-gutters {
    padding-right: 0px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  ${({ theme }) => `
   &:focus {
    background-color: ${theme.palette.primary.main};
    & MuiListItemIcon-root, & .MuiListItemText-primary {
        color: ${theme.palette.common.white}
    }
   }
  `};
`;
export const NameLogoutContainer = styled(Grid)`
  justify-content: flex-end;
  @media (max-width: 460px) {
    display: flex;
    flex-wrap: inherit;
  }
`;
export const LogoutButton = styled(LogoutRounded)`
  color: grey;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const StyledAppBar = styled(AppBar)`
  background: white;
  width: 100%;
  border-bottom: 5px solid ${Color.lightBlue};
  @media (max-width: 768px) {
    & .css-tzssek-MuiSvgIcon-root {
      font-size: 1.5rem;
    }
  }
`;

export const StyledLogo = styled.img`
  height: 80px;
  min-width: 160px;
  margin-left: 20px;
  @media (max-width: 768px) {
    height: 50px;
    min-width: 80px;
    margin-left: 0;
  }
`;

export const UserName = styled.h1`
  color: #00b3e3;
  margin-left: 20px;
  font-size: 22px;
  font-weight: 500;
  margin-left: 0;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
  }
`;
export const ShoppingCartIcon = styled(ShoppingCart)`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
