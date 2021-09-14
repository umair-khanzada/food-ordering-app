import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const VendorGrid = styled(Grid)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    display: block;
    margin: auto;
  }
  `};
`;
// export default VendorGrid;
export const Div = styled.div`
  padding-right: '30px';
`;
