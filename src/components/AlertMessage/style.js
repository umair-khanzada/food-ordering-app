import ClearIcon from '@mui/icons-material/Clear';
import styled, { keyframes } from 'styled-components';

export const fadein = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 1rem;
    opacity: 1;
  }
`;

export const CrossIcon = styled(ClearIcon)`
  color: black;
`;

export const fadeout = keyframes`
  from {
    bottom: 1rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`;

export const SuccessMessage = styled.p`
  margin-left: 15px;
`;

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  width: 370px;
  height: 70px;
  padding: 0.625rem 1rem;

  border: transparent;
  background-color: white;
  border-left: 10px solid green;
  color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadein} 0.5s, ${fadeout} 0.5s ${(props) => props.time};
`;

export const BTN = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  margin-left: 1rem;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: lightgray;
  }
`;
