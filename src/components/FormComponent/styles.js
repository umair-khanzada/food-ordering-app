import styled from 'styled-components';
// import CommonButton from '../Button/Button';
export const Form = styled.form`
  background-color: white;
  padding: 50px 65px;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;
export const FormHeading = styled.h1`
  margin: 40px 0px;
  color: green;
  text-align: center;
  font-size: 40px;
`;
export default FormHeading;

export const ForgotPassword = styled.a`
  margin-left: 50px;
  font-size: 20px;
  color: green;
  text-decoration: none;
  display: 'flex';
  @media (max-width: 768px) {
    margin: 10px;
    font-size: 16px;
  }
`;
export const FormContainer = styled.div`
  background-color: rgb(240, 234, 234);
  min-height: 100vh;
`;
