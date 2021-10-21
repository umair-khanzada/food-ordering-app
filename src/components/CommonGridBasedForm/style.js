import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import CommonButton from '../Button/Button';

export const StyledMainContainerGrid = styled(Grid)`
  min-height: 30vh;
  padding: 30px;
`;

export const StyledGridItem = styled(Grid)`
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StyledGridColumnItem = styled(Grid)`
  width: 50%;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledFormButton = styled(CommonButton)`
  padding: 10px 100px;
`;

export const Error = styled.span`
  color: red;
`;
