/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Drawer, Card, Button, Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { useDispatch, useSelector } from 'react-redux';

import { increaseQuantity, deleteItem, closeDrawer, decreaseQuantity } from '../../Features/Customer/actions';

const useStyles = makeStyles({
  cartdesc: {
    display: 'flex',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '5px 5px',
    padding: '5px',
  },
  cartimg: {
    width: 100,
    height: 74,
    borderRadius: '17%',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    height: 105,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: 0.3,
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e91e63',
    height: 46,
  },
  drawer: {
    width: 400,

    // height: '100vh',
  },
  text: {
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  headingtext: {
    color: 'white',
    padding: 5,
  },
  imgdiv: {
    paddingLeft: 17,
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 13,
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 9,
  },
  carddata: {
    display: 'flex',
  },
  add: {
    display: 'flex',
    alignItems: 'center',
  },
  itemprice: {
    display: 'flex',
    paddingLeft: 5,
  },
  positiveicon: {
    color: '#e91e63',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  btn: {
    backgroundColor: '#e91e63',
    // width: '90%',
    margin: '0 10px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#e91e63',
    },
  },
});

const TemporaryDrawer = () => {
  const cart = useSelector((state) => state.addtocartReducers.cart);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
  };

  // const list = () => (
  //   <div>
  //     <div className={classes.icon}>
  //       <h4 className={classes.headingtext}>My Cart</h4>
  //       onClick={toggleDrawer('right', false)}
  //       <CloseIcon className={classes.text} onClick={() => props.setOpenDrawer()} />{' '}
  //     </div>
  //     <div style={{ height: '85vh', overflowY: 'scroll', marginBottom: '10px' }}>
  //       {cart.map((cartdata) => {
  //         return (
  //           <Card key={cartdata.id} className={classes.card}>
  //             <div className={classes.imgdiv}>
  //               <img alt="cart" className={classes.cartimg} src={cartdata.img} />
  //             </div>
  //             <div className={classes.price}>
  //               <div className={classes.main}>
  //                 <div>
  //                   <h4>{cartdata.name}</h4>
  //                 </div>

  //                 <div className={classes.itemprice}>
  //                   <span>x</span>
  //                   <span> {cartdata.price}</span>
  //                   <span>Rs/</span>
  //                 </div>
  //               </div>

  //               <div className={classes.add}>
  //                 <AddCircleIcon
  //                   className={classes.positiveicon}
  //                   onClick={() => dispatch(increaseQuantity(cartdata.id))}
  //                 />
  //                 {cartdata.qty}
  //                 <RemoveCircleIcon
  //                   className={classes.positiveicon}
  //                   onClick={() => dispatch(decreaseQuantity(cartdata.id))}
  //                 />
  //               </div>
  //             </div>
  //           </Card>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  const isDrawerOpen = useSelector((state) => state.addtocartReducers.isDrawerOpen);

  return (
    <>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          className={classes.drawer}
          onClose={() => dispatch(closeDrawer())}
          open={isDrawerOpen}
          variant="persistent"
        >
          <div>
            <div className={classes.icon}>
              <h4 className={classes.headingtext}>My Cart</h4>
              <CloseIcon className={classes.text} onClick={() => dispatch(closeDrawer())} />{' '}
            </div>
            <div style={{ height: '85vh', overflowY: 'scroll', marginBottom: '10px' }}>
              {cart.map((cartdata) => {
                console.log('id', cartdata);
                return (
                  <Card key={cartdata.id} className={classes.card}>
                    <div className={classes.imgdiv}>
                      <img alt="cart" className={classes.cartimg} src={cartdata.img} />
                    </div>
                    <div className={classes.price}>
                      <div className={classes.main}>
                        <div>
                          <h4>{cartdata.name}</h4>
                        </div>

                        <div className={classes.itemprice}>
                          <span style={{ marginLeft: '40px' }}> {cartdata.price}</span>
                        </div>
                        <span style={{ marginLeft: '80px' }}>
                          <CloseIcon onClick={() => dispatch(deleteItem(cartdata.id))} />
                        </span>
                      </div>

                      <div className={classes.add}>
                        <AddCircleIcon
                          className={classes.positiveicon}
                          onClick={() => dispatch(increaseQuantity(cartdata.id))}
                        />
                        {cartdata.qty}
                        <RemoveCircleIcon
                          className={classes.positiveicon}
                          onClick={() => dispatch(decreaseQuantity(cartdata.id))}
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <Button className={classes.btn} onClick={handleOpen}>
            Proceed to Checkout
          </Button>
          <Modal
            aria-describedby="transition-modal-description"
            aria-labelledby="transition-modal-title"
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            className={classes.modal}
            closeAfterTransition
            onClose={handleClose}
            open={open}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h1>Your Order has been placed</h1>
              </div>
            </Fade>
          </Modal>

          {/* click={toggleDrawer('right', true)} */}
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default TemporaryDrawer;
