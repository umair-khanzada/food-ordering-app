import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const BaseRouterGrid = styled(Grid)`
  margin-left: 250px;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`;
