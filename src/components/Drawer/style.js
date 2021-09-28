import { Button, Card, Drawer, Modal, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import styled from 'styled-components';

export const MainDrawer = styled(Drawer)`
  height: 20px;
  width: 90vh;
  margin-top: 12px;
`;
export const DrawerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DrawerCard = styled(Card)`
  display: flex;
  width: 50vh;

  align-items: center;
  margin-bottom: 20px;
  height: 15vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const Paper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 10px 10px 17px 10px;
`;
export const DrwaerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00b3e3;
  height: 46px;
`;
export const CartPaper = styled.div`
  padding: 20px;
`;
export const DrawerText = styled(CloseIcon)`
  width: 30%;
  color: white;
  float: right;
`;
export const DrawerHeadingText = styled.h4`
  width: 30%;
  color: white;
  margin-left: 5vh;
`;
export const Image = styled.img`
  border: 100px;
  padding: 20px;
  border-radius: 20px;
  boxshadow: 10px 10px F0F0F0;
  width: 20px;
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
  color: #00b3e3;
  &:hover {
    cursor: pointer;
  }
`;
export const NegativeIcon = styled(RemoveCircleRoundedIcon)`
  color: #00b3e3;
  &:hover {
    cursor: pointer;
  }
`;
export const CheckoutButton = styled(Button)`
  backgroundcolor: #00b3e3;
  position: fixed;
  bottom: 2px;
  align-items: center;
  margin: 0 10px;
  width: 53vh;
  color: white;
`;
export const ConfirmButton = styled(Button)`
  color: white;
`;
export const CancelButton = styled(Button)`
  color: black;
`;
export const ModalButton = styled(Button)`
  backgroundcolor: #00b3e3;
  color: white;
  &:hover {
    cursor: pointer;
    backgroundcolor: #00b3e3;
  }
`;

export const Modaltext = styled.p`
  color: #717271;
`;
export const DrawerImageDiv = styled.div`
  height: 10px;
  padding: 20px;
  margin: 100px;
`;
export const DeleteIcon = styled(CloseIcon)`
  margin-left: 23vh;
`;

export const CartPrice = styled.span`
  margin-left: 20px;
`;
export const CartCancel = styled.span`
  width: 60%;
`;
export const CountQuantity = styled.span`
  margin-left: 50px;
`;
export const EmptyCart = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
export const AddToCartImg = styled.img`
  width: 25%;
  display: flex;
  margin-left: 2.5vh;
  border-radius: 10px;
`;
export const ModalIcons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;
export const PriceSpan = styled.span`
  margin: 20px;
`;
export const EmptyCartHeading = styled(Typography)`
  color: #00b3e3;
`;
export const EmptyCartPara = styled.p`
  color: #717271;
`;
