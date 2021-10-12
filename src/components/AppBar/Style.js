import { MenuItem, AppBar } from '@material-ui/core';
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

  &:hover {
    cursor: pointer;
  }
  size: 50px;
`;
export const StyledAppBar = styled(AppBar)`
  background: white;
  border-bottom: 5px solid ${Color.lightBlue};
`;

export const StyledLogo = styled.img`
  height: 80px;
  min-width: 160px;
  margin-left: 20px;
`;

export const UserName = styled.h1`
  color: #00b3e3;
  margin-left: 20px;
  font-size: 22px;
  font-weight: 500;
`;
