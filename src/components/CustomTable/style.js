import { TableHead, TableCell, TableContainer } from '@material-ui/core';
import styled from 'styled-components';

export const CustomTableHead = styled(TableHead)`
  background-color: #e91e63;
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;
export const EditDeleteCell = styled(TableCell)`
  display: flex;
`;
export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 0px;
  }
  margin: auto;
`;
