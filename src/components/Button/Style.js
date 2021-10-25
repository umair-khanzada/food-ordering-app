import LoadingButton from '@mui/lab/LoadingButton';
import styled from 'styled-components';
const StyledButton = styled(LoadingButton)`
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  margin-bottom: 10px;
  max-width: ${({ maxwidth }) => maxwidth};
  min-width: ${({ minwidth }) => minwidth} !important;
  background-color: #00b3e3;
  color: white;
  white-space: nowrap;
  font-weight: bold !important;
  background-color: ${({ loading }) => !loading && '#00B3E3 !important'};
  ${({ theme }) => `
  &:hover {
    background-color: white !important;
    color: #00B3E3;
  }
   ${theme.breakpoints.down('sm')} {
    
  }
  `};
  @media (max-width: 768px) {
    min-width: 40px !important;
  }
`;
export default StyledButton;
