import React, { useEffect } from 'react';
import './cart.css';
import { motion } from "framer-motion";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Button, Stack, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          ease: [0.6, -0.05, 0.01, 3.5],
      },
  },
};
const Cart = ({isFirstMount}) => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // function submitCheckout() {
  //   const productIds = [];

  //   state.cart.forEach((item) => {
  //     for (let i = 0; i < item.purchaseQuantity; i++) {
  //       productIds.push(item._id);
  //     }
  //   });

  //   getCheckout({
  //     variables: { products: productIds },
  //   });
  // }
  
  return (
    <><motion.div class="cartItem" variants={title}>
<br/>
      {state.cart.length ? (
        <Grid class="cartItem" sx={{alignItems: 'center', justifyContent: 'center'}}>
          {state.cart.map((item) => (
            <CartItem class="cartItem" key={item._id} item={item} />
          ))}
          <Stack direction="column" spacing={4} alignItems="center">
          
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              // <Button class="cartItemButton" onClick={submitCheckout} >Checkout</Button>
              <Button class="cartItemButton"  onClick={(e) => { navigate("/success") }}>Checkout</Button>
              
            ) : (
              <span class="cartItem">(log in to check out)</span>
            )}
          <br/><br/>
          </Stack>
        </Grid>
        
      ) : (
        <h3>
          <Stack direction="row">
          <span role="img" aria-label="shocked">
            😱
          </span>
          <Typography class="h3">
          Your cart is empty!
          </Typography>
          <span role="img" aria-label="shocked">
            😱
          </span>
          </Stack>
        </h3>
      )} 
    </motion.div><br /><br/></>
  );
};

export default Cart;
