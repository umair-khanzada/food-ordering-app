import { Button, Card, Drawer, Modal } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

export const DrawerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DrawerCard = styled(Card)`

display: flex
    align-items: center;
    margin-bottom: 20;
    height: 105;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;
export const Paper = styled.div`
background-color: white
border-radius: 12px
padding: 40px 40px 17px 40px
`;
export const DrwaerIcon = styled.div`
  display: 'flex;
    align-items: ' center;
  justify-content: 'space-between;
    background-color: ' #00b3e3;
  height: 46;
`;
export const MainDrawer = styled(Drawer)`
  width: 400px;
`;

export const DrawerText = styled(CloseIcon)`
  width: 400px;
`;
export const DrawerHeadingText = styled.h4`
  width: 400px;
`;
export const ImageContainer = styled.img`
  padding: 100px;
  border-radius: 25px;
  width: 40%;
`;

export const DrawerPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  align-items: center;
`;
export const Add = styled.div`
  display: flex;
  align-items: center;
`;
export const DrawerItemPrice = styled.div`
  display: flex;
  padding-left: 5;
`;
export const PositiveIcon = styled(AddCircleIcon)`
color: #00b3e3
    &:hover {
      cursor: pointer
    },
`;
export const CheckoutButton = styled(Button)`
  backgroundcolor: #00b3e3;

  margin: 0 10px;
  color: white;
`;
export const CancelButton = styled(Button)`
  color: white;
`;
export const ModalButton = styled(Button)`
backgroundColor: #00B3E3;
color: white;
&:hover{
  cursor: pointer;
  backgroundColor: #00B3E3;
},`;

export const Modaltext = styled.p`
  color: #717271;
`;
