import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgrey;
  @media (min-width: 768px) {
    padding: 20px 35px;
  }
`;
export const InputBox = styled.div`
  margin-bottom: 30px;
`;
export const FormHeading = styled.h1`
  margin-bottom: 20px;
  color: #e91e63;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;

export const ForgotPassword = styled(Link)`
  font-size: 16px;
  color: rgb(51, 133, 255);
  text-decoration: none;
  float: right;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GridItem = styled(Grid)`
  padding: 0 5px;
  height: 100vh;
`;
export const BasicLink = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;
export const Label = styled(Link)`
  margin-left: 10px;
  font-size: 16px;
  color: rgb(51, 133, 255);
  text-decoration: none;
  float: right;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormContainer = styled.div`
  background-color: #f0f0f0;
  background-size: 'cover';
  min-height: 100vh;
`;
