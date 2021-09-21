import { MenuItem, AppBar } from '@material-ui/core';
import styled from 'styled-components';

import { NISUM_BLUE } from '../../util/Color';

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

export const StyledAppBar = styled(AppBar)`
  background: white;
  border-bottom: 5px solid ${NISUM_BLUE};
`;

export const StyledLogo = styled.img`
  height: 80px;
  min-width: 160px;
  margin-left: 20px;
`;
