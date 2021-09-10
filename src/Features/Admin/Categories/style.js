import { Grid } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import styled from 'styled-components';
export const FormContainer = styled.div`
  background-color: #f0f0f0;
  background-size: 'cover';
  min-height: 100vh;
`;
export const Form = styled.form`
  text-align: center;
  background-color: white;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgrey;
`;
export const FormHeading = styled.h1`
  color: #e91e63;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`;
export const CreateIconButton = styled(CreateIcon)`
  font-size: 1rem;
`;
export const GridContainer = styled(Grid)`
  height: 80vh;
`;

export const CategoriesTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto;
`;

export const CategoriesTitle = styled.div`
  color: grey;
  font-size: 25px;
  padding-left: 20px;
  font-weight: 500;
`;

export const DeleteIcon = styled(Delete)`
  color: #ff4d4d;
`;
