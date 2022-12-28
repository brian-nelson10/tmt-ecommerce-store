import './landing.css';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { motion } from "framer-motion";
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CATEGORIES, 
} from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import MusicList from '../components/MusicList/index';
import ClothesList from '../components/ClothesList';
import AccessoriesList from '../components/AccessoriesList';
import Header from '../components/Header';
import ToothLogo from '../assets/images/tmt-logo-pink.png';
import ToothLogo2 from '../assets/icons/toothNoBg2.png';
import MusicNote from '../assets/icons/musicNotes.png';
import Shirt from '../assets/icons/shirt.ico';
import Diamond from '../assets/icons/diamond.png';
import CartIcon from '../assets/icons/cart.ico';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import WallPaper from '../assets/images/musicWallPaper.png';
import ClothesHands from '../assets/images/clothesHandsBw.png';
import AccessWallPaper from '../assets/images/accessWallPaper2.png';
import ToothBurst from '../assets/images/toothBurstBw.png';
import MusicBanner from '../assets/images/musicBanner-min.png';
import AccessBanner from '../assets/images/accessBanner-min.png';
import ApparelBanner from '../assets/images/apparelBanner-min.png';
import Banner from '../assets/images/storeBanner.png';
import CartBanner from '../assets/images/cartBanner-min.png';
import { Grid, Stack } from '@mui/material';
import Hero from '../components/Hero';
import Social from '../components/Social';
import PopularList from '../components/PopularList';
import SignUpButton from '../components/SignUpButton';

const content = (isFirstMount) => ({
    animate: {
      transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : .5 },
    },
  });
  const title = {
    initial: { y: -25, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
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
  const hero = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };

const Landing = ({isFirstMount}) => {

    const [state, dispatch] = useStoreContext();

    // const { categories } = state;
  
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
                  <a href="#t5"><li><img class="icon" alt="icon" src={CartIcon} id="cinco" /></li></a></>
                </motion.ul>

                <div class="page" id="p1" style={{ backgroundImage: `url(${ToothLogo })`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '950px', overflow: 'scroll' }}>
                 <motion.div variants={title} class="socialIcons" id="p12" style={{margin: '0 0 0 0', maxWidth: '400px'}}><Social/></motion.div>
               <motion.div variants={log} class="loginP1" id="p10"><Header/></motion.div>
               <Grid container id="p12" sx={{ alignItems: "center", justifyContent: "center", margin: '0 0 0 0' }}>
                <motion.div class="socialIcons" id="p13" 
                animate={{ scale: [1.2, 1.2, .9, .8, .7], rotate: [0, 0, 540, 0] }} 
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.7, 1],
                  repeat: 0,
                }}>
                <img alt="store banner" src={Banner}/></motion.div>
                </Grid>
                <Grid container sx={{ alignItems: "center", justifyContent: "center", margin: '0 0 0 0' }}>
               <motion.div class="socialIcons" id="p11" variants={hero}>
                <Hero/>
                </motion.div>
                </Grid>
                
                <Grid container sx={{ alignItems: "center", justifyContent: "center", margin: '0 0 0 0' }}>
                <Stack direction="column">
                <p class="popular">Popular Products</p>
                  <div class="socialIcons"><PopularList/></div>
                  </Stack>
                </Grid>
                <br/><br/>
                  
                  <Grid container sx={{ alignItems: "center", justifyContent: "center", margin: '0 0 0 0' }}>
                  <Stack direction="column" spacing={0} sx={{ alignItems: "center", justifyContent: "center", margin: '0 0 0 0' }}>
                
                <div class="popular"><SignUpButton /></div>
                <p class="popular" id="join">Join the Tooth Fairy Club</p>
                <p class="popular" id="sign">To recieve exclusive discounts and more!</p>
                </Stack>
                </Grid>
                <br/><br/>
                    </div>
                    </motion.div>
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p2" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${WallPaper})`, backgroundSize: '680px'}}>
                    <br/><br/>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid container item xs={6} md={2} sx={{alignItems: "center", justifyContent: "center"}}>
                    <div ><img alt="category banner" class="head" src={MusicBanner}/></div>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <MusicList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>  
                
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p3" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${ClothesHands})`, backgroundSize: '570px'}}>
                    <br/><br/>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid container item xs={6} md={2} sx={{alignItems: "center", justifyContent: "center"}}>
                    <div ><img alt="category banner" class="head" src={ApparelBanner}/></div>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <ClothesList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>
                
                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p4" style={{overflow: 'scroll'}}>
                    <Grid style={{ backgroundImage: `url(${AccessWallPaper})`, backgroundSize: '600px'}}>
                    <br/><br/>
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid container item xs={6} md={2} sx={{alignItems: "center", justifyContent: "center"}}>
                    <div ><img alt="category banner" class="head" src={AccessBanner}/></div>
                  </Grid>
                        <Grid item xs={6} md={10} >
                        <AccessoriesList />
                        </Grid>
                        </Stack>
                        </Grid>
                </Grid>

                <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} class="page" id="p5" style={{overflow: 'scroll'}}>
                <Grid style={{ backgroundImage: `url(${ToothBurst})`, backgroundSize: '600px', minHeight: '1000px'}}>
                <br/><br/>
                <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                <Grid container item xs={6} md={2} sx={{alignItems: "center", justifyContent: "center"}}>
                    <div ><img alt="category banner" class="head" src={CartBanner}/></div>
                  </Grid>
                  <br/><br/><br/>
                        <Grid item xs={6} md={10} >
                        <Cart />
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

