import { MenuItem } from '@material-ui/core';
import styled from 'styled-components';

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
