import { Grid, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import background from '../../assets/foodimage3.jpg';

export const Form = styled.form`
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const InputBox = styled.div`
  height: 95px;
`;
export const ErrorRespose = styled.div`
  margin-bottom: 32px;
  margin-left: 10px;
  color: red;
  font-size: 16px;
`;
export const Error = styled.span`
  margin: 10px;
  color: red;
`;
export const FormHeading = styled.h1`
  margin-bottom: 20px;
  color: #00b3e3;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;

export const ForgotPassword = styled(Link)`
  font-size: 16px;
  color: rgb(51, 133, 255);
  text-decoration: none;
  float: right;
  color: #00b3e3;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 20px;
  }
`;
export const BasicLink = styled.div`
  padding-top: 10px;
  display: flex;
  color: #00b3e3;
  justify-content: space-between;
`;
export const Label = styled(Link)`
  margin-left: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #00b3e3;
  float: right;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormContainer = styled.div`
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  min-height: 100vh;
  background-image: url(${background});
  width: 100%;
`;
export const GridContainer = styled(Grid)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100vh;
`;
export const GridItem = styled(Grid)`
  margin-left: 150px;
`;

export const NavTitle = styled(AppBar)`
  background: none;
`;

export const NisumText = styled.h1`
  flexgrow: 1;
  text-align: start;
  margin-left: 50px;
`;

export const NisumTextColor = styled.span`
  color: #00b3e3;
  font-size: 2rem;
`;
