import React, { useEffect, useState } from 'react';
import './detail.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { motion } from "framer-motion";
import { useStoreContext } from '../utils/GlobalState';
import { QUERY_PRODUCTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';
// import Cart from '../components/Cart';
import HeaderTwo from '../components/Header/indexTwo';
import ToothLogo from '../assets/images/tmt-logo-pink.png';
import { Card, 
    CardMedia, 
    CardContent,
    Container, 
    Typography,
    Button, 
    CardActions,
    Grid, Stack } from '@mui/material';
import { idbPromise } from "../utils/helpers";
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../utils/actions';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : .5 },
    },
});
const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5,
            ease: [0.6, -0.05, 0.01, 3.5],
        },
    },
};
const log = {
    initial: { x: 30, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .8,
            ease: [0.6, -0.05, 0.01, 3.5],
        },
    },
};

const Detail = ({ isFirstMount }) => {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);

        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 }
            });
            // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id
        });

        // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
        idbPromise('cart', 'delete', { ...currentProduct });
    };

    useEffect(() => {
        // already in global store
        if (products.length) {
            setCurrentProduct(products.find(product => product._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    return (
        <>
            <div class="page" id="p1" style={{ backgroundImage: `url(${ToothLogo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '950px' }}>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={content(isFirstMount)}

                >
                    <br/><br/>
                    <motion.div variants={log} class="login"> <HeaderTwo /></motion.div>
                    <Container>
                        <Grid container direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>

                            {currentProduct ? (
                                <motion.div variants={title} className="container my-1">
                                    
                                        <br />
                                        
                                        <Grid container >
                                            <Grid item container direction="row" >
                                                <Grid item xs={12} sm={6}>
                                                    <div className='cardDetail'>
                                                        <Card className='cardDetail'
                                                            sx={{ width: 600, height: 700, bgcolor: 'rgb(248, 175, 189)', borderRadius: '10px' }}>
                                                            
                                                                <CardMedia
                                                                    component="img"
                                                                    alt={currentProduct.name}
                                                                    height="410"
                                                                    src={`/images/${currentProduct.image}`}
                                                                />
                                                            
                                                            <CardContent >
                                                                <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
                                                                    <Typography gutterBottom variant="h4" component="div" style={{ fontFamily: 'Lacquer', fontWeight: 800, color: 'black' }}>
                                                                    {currentProduct.name}
                                                                    </Typography>
                                                                </Grid>
                                                                <hr />
                                                                <Typography variant="body2" color="white">
                                                                {currentProduct.description}
                                                                </Typography>
                                                                <hr />
                                                            </CardContent>
                                                            <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
                                                                <Typography sx={{ color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: '40px', fontWeight: '700' }}>${currentProduct.price}</Typography>
                                                            </Grid>
                                                            <hr />
                                                            <CardActions>
                                                                <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
                                                                <Stack spacing={18} direction='row'>
                                                                    <Grid>
                                                                <Button id="cb" className="cardButton" size="large" onClick={addToCart} style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white', '&:hover': { color: 'deeppink' } }}>Add To Cart</Button>
                                                                </Grid>
                                                                <Grid>
                                                                <Button id="cb" className="cardButton" size="large" onClick={removeFromCart} disabled={!cart.find(p => p._id === currentProduct._id)} style={{ fontFamily: 'Lacquer', fontWeight: 700, color: 'white', '&:hover': { color: 'deeppink' } }}>Remove From Cart</Button>
                                                                </Grid>
                                                                </Stack>
                                                                </Grid>
                                                            </CardActions>
                                                        </Card>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <br />
                                       
                                        </motion.div>
                                        ) : null}
                                        {loading ? <img src={spinner} alt="loading" /> : null}
                        </Grid>
                    </Container>
                    </motion.div>
                    </div>
                    
                    </>
    );
} 

export default Detail;
 