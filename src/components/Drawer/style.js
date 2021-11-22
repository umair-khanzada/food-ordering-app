import { Button, Card, Drawer, Modal, Typography } from '@material-ui/core';
import { Delete, HighlightOffOutlined } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import styled from 'styled-components';

export const MainDrawer = styled(Drawer)`
  width: 20vw !important;
  height: 100%;
`;
export const DrawerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DrawerCard = styled(Card)`
  display: flex;
  padding-right: 4px;
  width: 290px;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  border-radius: 0;
  border-bottom: 2px solid #00b3e3;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const TotalAmountCard = styled(Card)`
  display: flex;
  padding-right: 4px;
  width: 290px;
  height: 55px;
  align-items: center;

  border-radius: 0;
  border-bottom: 2px solid #00b3e3;
  margin-bottom: 10px;

  justify-content: space-evenly;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const ItemImage = styled.img`
  width: 80px;
  height: 70px;
`;
export const ItemName = styled.h4`
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const Paper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 10px 10px 17px 10px;
`;
export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00b3e3;
  width: 290px;
  height: 50px;
`;
export const CartPaper = styled.div`
  margin-top: 5px;
  padding: 0;
  height: 85vh;
  overflow-y: scroll;
`;
export const DrawerCloseIcon = styled(HighlightOffOutlined)`
  color: white;
  height: 50%;
  width: 16%;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
export const DrawerHeading = styled.h2`
  color: white;
  margin-left: 10px;
`;

export const ItemDetails = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemPrice = styled.div`
  display: flex;
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
export const ItemNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;
export const QuantityContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;
export const Quantity = styled.h4`
  margin: 0 5px;
`;
export const CheckoutButton = styled(Button)`
  backgroundcolor: #00b3e3;
  position: fixed;
  width: 290px;
  border-radius: 0;
  bottom: 2px;
  align-items: center;
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
export const DeleteIcon = styled(Delete)`
  font-size: 25px;
  color: grey;
  &:hover {
    cursor: pointer;
  }
`;

export const CartPrice = styled.span`
  width: 50px;
`;
export const CartCancel = styled.span``;
export const CountQuantity = styled.span`
  margin-left: 50px;
`;
export const EmptyCart = styled.div`
  margin-top: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
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
  font-size: 20px;
`;
export const EmptyCartPara = styled.p`
  color: #717271;
`;
export const ModalDiv = styled.div`
  text-align: center;
  padding: 20px;
`;
