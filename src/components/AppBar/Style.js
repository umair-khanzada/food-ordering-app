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

// const StyledMenuItem = withStyles((theme) => ({
//     root: {
//       '&:focus': {
//         backgroundColor: theme.palette.primary.main,
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//           color: theme.palette.common.white,
//         },
//       },
//     },
//   }))(MenuItem);
