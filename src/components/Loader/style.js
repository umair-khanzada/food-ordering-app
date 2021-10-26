import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const StyledLoaderGrid = styled(Grid)`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;

    min-width: 95vw;
  }
`;
