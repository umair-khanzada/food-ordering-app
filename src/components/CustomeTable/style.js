import { TableCell, TableContainer, TableHead } from '@material-ui/core';
import styled from 'styled-components';

export const EditDeleteCell = styled(TableCell)`
  display: flex;
`;

export const CustomTableHead = styled(TableHead)`
  color: white;
  background-color: #00b3e3;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;
export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 5px 14px;
    line-height: 3.4;
  }
  margin: auto;
`;
