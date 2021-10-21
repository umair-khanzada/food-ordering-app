import { CheckCircle } from '@material-ui/icons';
import ClearIcon from '@mui/icons-material/Clear';
import ErrorIcon from '@mui/icons-material/Error';
import styled, { keyframes } from 'styled-components';

export const fadein = keyframes`
  from {
    transform: translateY(-80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CrossIcon = styled(ClearIcon)`
  color: black;
  margin-left: 15px;
  width: 16px !important;
`;

export const fadeout = keyframes`
from {
  transform: translateY(0px);
  opacity: 1;
}
to {
  transform: translateY(-80px);
  opacity: 0;
}
`;

export const SuccessMessage = styled.p`
  margin-left: 15px;
`;
export const ErrorIconButton = styled(ErrorIcon)`
  fill: red;
  width: 20px;
  color: red;
`;
export const SuccessIconButton = styled(CheckCircle)`
  fill: green;
  width: 20px;
`;
export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  height: 40px;
  padding: 0.625rem 1rem;
  top: 100px;
  border: transparent;
  background-color: white;
  border-left: 10px solid ${({ color }) => color};
  color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadein} 0.5s, ${fadeout} 0.9s ${(props) => props.time};
  @media (max-width: 768px) {
    left: 5%;
    max-height: 100px;
    padding: 2px;
  }
`;

export const ShowSnackBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0.875rem;
`;
