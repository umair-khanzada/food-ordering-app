import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  ${({ theme }) => `
   &:hover {
        background-color: ${theme.palette.secondary.main};
      },
  `};
`;

export default StyledButton;
