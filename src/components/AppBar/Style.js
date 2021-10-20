import { MenuItem, AppBar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { LogoutRounded } from '@mui/icons-material';
import styled from 'styled-components';

import Color from '../../util/Color';

export const StyledDiv = styled.div`
  flex-grow: 1;
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
