import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const TopNav = styled(Container)`
  && {
    height: 70px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    margin: 0 0;
    padding: 20px 10px;
  }
`;

export const NavText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrastColour};
`;
