import React from "react";
import './productitem.css';
import { Link, useNavigate } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Card, 
         CardMedia, 
         CardContent, 
         Typography,
         Button, 
         CardActions,
         Grid, Stack } from '@mui/material';

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();
    const navigate = useNavigate();

    const {
        image,
        name,
        _id,
        price,
        description,
        quantity,
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }
    return (
        <>
        <br/>
        <br/>
        <Grid container >
    <Grid item container direction="row" >
        <Grid item xs={12} sm={6}>
        <div className='cardProduct'>
        <Card className='cardProduct' 
        sx={{ width: 400 , bgcolor: 'rgb(248, 175, 189)', borderRadius: '10px'}}>
            <Link to={`/products/${_id}`}>
      <CardMedia
        component="img"
        alt={name}
        height="300"
        src={`/images/${image}`}
      />
      </Link>
      <CardContent >
        <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography gutterBottom variant="h4" component="div" style={{ fontFamily: 'Lacquer', fontWeight: 800, color: 'black' }}>
          {name}
        </Typography>
        </Grid>
        <hr/>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
        <hr/>
      </CardContent>
      <Stack direction="row" spacing={10} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid >
      <Typography style={{ color: 'white', fontSize: '30px', fontFamily: 'Lacquer' }}>{quantity} {pluralize("item", quantity)} in stock</Typography>
      </Grid>
      <br/>
      <Grid>
      <Typography style={{ color: 'white', fontSize: '30px', fontFamily: 'Lacquer'}}>${price}</Typography>
      </Grid>
      </Stack>
      <hr/>
      <CardActions>
        <Grid container>
      <Stack direction="row" spacing={22} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid>
        <Button id="cb" className="cardButton" size="large" onClick={addToCart} style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white', '&:hover': {color: 'deeppink'} }}>Add To Cart</Button>
        </Grid>
        <Grid>
        <Button id="cb" onClick={(e) => navigate(`/products/${_id}`)}className="cardButton" size="large" style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white', '&:hover': {color: 'deeppink'} }}>Detail</Button>
        </Grid>
        </Stack>
        </Grid>
      </CardActions>
    </Card>
    </div>
    </Grid>
    </Grid>
    </Grid>
     <br/>
     </>
    );
}
export default ProductItem;
