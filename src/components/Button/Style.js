import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: 20px;
  margin-bottom: 10px;
  max-width: ${(props) => props.maxwidth};
  min-width: ${(props) => props.minwidth};
  ${({ theme }) => `
  background-color: ${theme.palette.primary.main};
   &:hover {
        background-color: ${theme.palette.secondary.main};
      },
  `};
`;

export default StyledButton;
