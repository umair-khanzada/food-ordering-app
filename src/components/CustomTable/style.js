import { TableCell, TableContainer, TableHead } from '@material-ui/core';
import styled from 'styled-components';
export const CustomTableHead = styled(TableHead)`
  background-color: #e91e63;
`;
export const EditDeleteCell = styled(TableCell)`
  display: flex;
`;
export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  margin: auto;
`;