import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import HeaderTwo from '../components/Header/indexTwo';
import ToothLogo from '../assets/images/tmt-logo-pink.png';
import { Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        main: {
            peach: 'rgb(246, 217, 180)',
            pink: 'rgb(255, 142, 162)',
            deep: 'deeppink'
        },
    },
    typography: {
        fontFamily: [
            'Lacquer'
        ].join(','),
    },
});

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 1, delayChildren: isFirstMount ? 2 : 1 },
    },
});
const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
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
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 3.5],
        },
    },
};

const OrderHistory = ({isFirstMount}) => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
            <div class="page" id="p1" style={{ backgroundImage: `url(${ToothLogo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '950px' }}>
                <ThemeProvider theme={theme}>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={content(isFirstMount)}

                    >
                        <br/><br/>
                        <motion.div variants={log} class="login"> <HeaderTwo /></motion.div>
                        <Container>
                            <Grid container direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>

                                {user ? (
                                    <>
                                        <motion.h1 variants={title} style={{ fontFamily: 'Lacquer', fontSize: '60px', color: 'black' }}>
                                            Order History for {user.firstName} {user.lastName}
                                        </motion.h1>

                                        {user.orders.map((order) => (
                                            <div key={order._id} className="my-2">
                                                <h3>
                                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                                </h3>
                                                <div className="flex-row">
                                                    {order.products.map(({ _id, image, name, price }, index) => (
                                                        <div key={index} className="card px-1 py-1">
                                                            <Link to={`/products/${_id}`}>
                                                                <img alt={name} src={`/images/${image}`} />
                                                                <p>{name}</p>
                                                            </Link>
                                                            <div>
                                                                <span>${price}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : null}
                            </Grid>
                        </Container>
                    </motion.div>
                </ThemeProvider>
            </div>
        </>
    
    );
}


export default OrderHistory;
