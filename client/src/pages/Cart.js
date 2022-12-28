import React from 'react';
import { motion } from "framer-motion";
import Cart from '../components/Cart';
import HeaderTwo from '../components/Header/indexTwo';
import ToothBurst from '../assets/images/toothBurstBw.png';
import CartBanner from '../assets/images/cartBanner-min.png';
import { Container, Grid } from '@mui/material';


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
            duration: 1,
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
            duration: 1,
            ease: [0.6, -0.05, 0.01, 3.5],
        },
    },
};

const CartPage = ({ isFirstMount }) => {
    return(
        <>
        <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" style={{overflow: 'scroll', backgroundColor: 'rgb(247, 142, 162)'}}>
        <Grid style={{ backgroundImage: `url(${ToothBurst})`, backgroundSize: '600px', minHeight: '1000px'}}>
            <motion.div
                initial="initial"
                animate="animate"
                variants={content(isFirstMount)}

            >
                <br/><br/>
                <motion.div variants={log} class="login" > <HeaderTwo /></motion.div>
                <Container >
                    <Grid variants={title} container direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <motion.div variants={title} ><img alt="category banner" class="head" src={CartBanner}/></motion.div>
                        <Cart />
                        <br/>
                        </Grid>
                        </Container>
                        </motion.div>
                        </Grid>
                        </Grid>
                        <br/>
                        </>

    );
};

export default CartPage; 