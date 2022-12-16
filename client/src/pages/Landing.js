import './landing.css';
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { motion } from "framer-motion";
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  
} from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import Auth from '../utils/auth';
import MusicList from '../components/MusicList/index';
import ClothesList from '../components/ClothesList';
import AccessoriesList from '../components/AccessoriesList';
import Header from '../components/Header';
import ToothLogo from '../assets/images/tmt-logo-pink.png';
import ToothLogo2 from '../assets/icons/toothNoBg2.png';
import MusicNote from '../assets/icons/musicNotes.png';
import Shirt from '../assets/icons/shirt.ico';
import Diamond from '../assets/icons/diamond.png';
import Cart from '../assets/icons/cart.ico';
import Footer from '../components/Footer';
import WallPaper from '../assets/images/musicWallPaper.png';
import ClothesHands from '../assets/images/clothesHandsBw.png';
import AccessWallPaper from '../assets/images/accessWallPaper2.png';
import ToothBurst from '../assets/images/toothBurstBw.png';
import { Container, Grid, Stack } from '@mui/material';



const content = (isFirstMount) => ({
    animate: {
      transition: { staggerChildren: 1, delayChildren: isFirstMount ? 4 : 1 },
    },
  });
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
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
        duration: 1.7,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };

const Landing = ({isFirstMount}) => {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;
  
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
      if (categoryData) {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categoryData.categories,
        });
        categoryData.categories.forEach(category => {
          idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);
  
    // const handleClick = (id) => {
    //   dispatch({
    //     type: UPDATE_CURRENT_CATEGORY,
    //     currentCategory: id,
    //   });
    // };
    
    return (
        <>
        <div class="ct" id="t1">
        <div class="ct" id="t2">
          <div class="ct" id="t3">
            <div class="ct" id="t4">
               <div class="ct" id="t5">
               <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          
        >
                <motion.ul variants={title} id="menu">
                <>
                {/* {categories.map((item) => (
                    
                  <button
                  key={item._id}
                  onClick={() => {
                    handleClick(item._id);
                  }}
                >
                  {item.name}
                </button> */}
                
              {/* ))}
               */}
                  <a href="#t1"><li><img className="icon" alt="icon" src={ToothLogo2} id="uno" /></li></a> 
                  <a href="#t2"><li style={{ listStyle: 'none' }}><img class="icon" alt="icon" src={MusicNote} id="dos" /></li></a>
                  <a href="#t3"><li style={{ listStyle: 'none' }}><img class="icon" alt="icon" src={Shirt} id="tres" /></li></a>
                  <a href="#t4"><li><img class="icon" alt="icon" src={Diamond} id="cuatro" /></li></a>
                  <a href="#t5"><li><img class="icon" alt="icon" src={Cart} id="cinco" /></li></a></>
                 
                </motion.ul>
                 
                

                <div class="page" id="p1" style={{ backgroundImage: `url(${ToothLogo })`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '700px' }}>
               
               <motion.div variants={log} class="login"><Header/></motion.div>
                <Container>
                    <section class="icon"><span class="title"></span><span class="hint"></span></section>   
                    <br/>
                    </Container>
                </div>
                </motion.div>
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p2" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${WallPaper})`, backgroundSize: '680px'}}>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid item xs={6} md={2}>
                    <h1 class="heading">Music</h1>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <MusicList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>  
                
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p3" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${ClothesHands})`, backgroundSize: '570px'}}>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid item xs={6} md={2}>
                    <h1 class="heading">Clothes</h1>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <ClothesList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>
                
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p4" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${AccessWallPaper})`, backgroundSize: '600px'}}>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid item xs={6} md={2}>
                    <h1 class="heading">Accesories</h1>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <AccessoriesList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>

                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p5" style={{overflow: 'scroll'}}>
                <Grid style={{ backgroundImage: `url(${ToothBurst})`, backgroundSize: '600px', height: '1000px'}}>
                <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid item xs={6} md={2}>
                    <h1 class="heading">Cart</h1>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        {/* <Cart /> */}
                        </Grid>
                        </Stack>
                        </Grid>
                  </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContainer">
      <Footer />
  </div>
  </>
      


);
};

export default Landing;

