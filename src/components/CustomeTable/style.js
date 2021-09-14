import { TableHead, TableCell, TableContainer } from '@material-ui/core';
import styled from 'styled-components';
export const CustomTableHead = styled(TableHead)`
  color: white;
  background-color: #e91e63;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;
export const EditDeleteCell = styled(TableCell)``;
export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  margin: auto;
  && .MuiTableCell-root {
    padding: 5px 8px;
  }
`;
