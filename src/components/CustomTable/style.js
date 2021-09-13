import { TableHead, TableContainer } from '@material-ui/core';
import styled from 'styled-components';

export const CustomTableHead = styled(TableHead)`
  background-color: #e91e63;
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;

export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 5px 14px;
  }
  margin: auto;
`;
