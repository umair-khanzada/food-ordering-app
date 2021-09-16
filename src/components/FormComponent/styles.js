import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import background from '../../assets/foodBackground.jpeg';
import background from '../../assets/food1.jpg';

export const Form = styled.form`
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  @media (min-width: 768px) {
    padding: 20px 35px;
  }
`;
export const InputBox = styled.div`
  margin-bottom: 30px;
`;
export const Error = styled.span`
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  background-color: white;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  background-image: url(${background});
`;
export const GridContainer = styled(Grid)`
  padding: 0 5px;
  height: 100vh;
  box-shadow: 0 0 10px lightgrey;
`;
