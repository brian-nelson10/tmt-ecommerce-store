import React from 'react';
import '../Cart/cart.css';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { Grid, TextField, Stack, Card, CardMedia } from '@mui/material';

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();

    const onChange = (e) => {
        const value = e.target.value;
      
        if (value === '0') {
            dispatch({
              type: REMOVE_FROM_CART,
              _id: item._id
            });
          
            idbPromise('cart', 'delete', { ...item });
          } else {
            dispatch({
              type: UPDATE_CART_QUANTITY,
              _id: item._id,
              purchaseQuantity: parseInt(value)
            });
          
            idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
          }};

      const removeFromCart = item => {
        dispatch({
          type: REMOVE_FROM_CART,
          _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
      };

  return (
    <><Grid container className='itemBox'>
          <Card className='cartProduct'  
            sx={{ width: 600 , bgcolor: 'rgb(248, 175, 189)', borderRadius: '15px', padding: '10px'}}>
            <CardMedia>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center'}}>
              <img 
                    style={{ maxHeight: '220px' }}
                  src={`/images/${item.image}`}
                  alt="" />
                  </Grid>
          </CardMedia>
          <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
              <div className="cartItem">{item.name}, ${item.price}</div>
              <div>
                <Stack direction="row">
                  <span className="cartItem">Qty:</span>
                  <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      placeholder="1"
                      value={item.purchaseQuantity}
                      onChange={onChange} />
                  <span
                      class="trashButton"
                      role="img"
                      aria-label="trash"
                      onClick={() => removeFromCart(item)}
                  >
                      🗑️
                  </span>
                  </Stack>
              </div>
              </Grid>
          </Card>
      </Grid><br /></>
  );
}

export default CartItem;