import React from "react";
import './productitem.css';
import { Link } from "react-router-dom";
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
// import Logo from '../assets/images/tmt-logo-peach.png';

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();

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
        {/* <Container container spacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
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
        <Typography gutterBottom variant="h4" component="div" style={{ fontFamily: 'Lacquer', fontWeight: 800, color: 'white' }}>
          {name}
        </Typography>
        </Grid>
        <hr/>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
        <hr/>
      </CardContent>
      <Stack direction="row">
      <Typography style={{ color: 'white' }}>{quantity} {pluralize("item", quantity)} in stock</Typography>
      <br/>
      <Typography style={{ color: 'white' }}>${price}</Typography>
      </Stack>
      <hr/>
      <CardActions>
        <Button id="cb" className="cardButton" size="large" onClick={addToCart} style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white', '&:hover': {color: 'deeppink'} }}>Add To Cart</Button>
        <Button className="cardButton" size="large" style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white' }}>Detail</Button>
      </CardActions>
    </Card>
    </div>
    </Grid>
    </Grid>
    </Grid>
    {/* </Container> */}
    
     <br/>
     
     </>
    );
}

export default ProductItem;
