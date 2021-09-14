import { Delete } from '@material-ui/icons';
import styled from 'styled-components';

export const CategoriesTitleContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  margin: 20px auto;

  padding: 20px 0px;
`;

export const CategoriesTitle = styled.div`
  color: grey;

  font-size: 25px;

  font-weight: 500;
`;

export const DeleteIcon = styled(Delete)`
  color: #ff4d4d;
`;
