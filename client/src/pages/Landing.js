import './landing.css';
import React from 'react';
import { motion } from "framer-motion";
import Music from './Music';
import ToothLogo from '../assets/images/tmt-logo-pink.png'
// import ToothLogoPeach from '../assets/images/tmt-logo-peach.png'
import ToothLogo2 from '../assets/icons/toothNoBg2.png';
import MusicNote from '../assets/icons/musicNotes.png';
import Shirt from '../assets/icons/shirt.ico';
// import Dollar from '../assets/icons/dollar.ico';
import Skull from '../assets/icons/cuteSkull.png'
import Cart from '../assets/icons/cart.ico';
import { Container } from '@mui/material';



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

const Landing = ({isFirstMount}) => {
    return (
        
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
                  <a href="#t1"><li><img className="icon" alt="icon" src={ToothLogo2} id="uno"/></li></a>
                  <a href="#t2"><li><img className="icon" alt="icon" src={MusicNote} id="dos"/></li></a>
                  <a href="#t3"><li><img className="icon" alt="icon" src={Shirt} id="tres"/></li></a>
                  <a href="#t4"><li><img className="icon" alt="icon" src={Skull} id="cuatro"/></li></a>
                  <a href="#t5"><li><img className="icon" alt="icon" src={Cart} id="cinco"/></li></a>
                </motion.ul>
                </motion.div>
                <div class="page" id="p1" style={{ backgroundImage: `url(${ToothLogo })`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '700px' }}>
                <Container>
                    <section class="icon"><span class="title"></span><span class="hint"></span></section>   
                    <br/>
                    </Container>
                </div>

                
                <div class="page" id="p2" >
                    <Container style={{paddingLeft: '80px', paddingTop: '20px'}}><Music/></Container>
                    <h1 class="heading">Music</h1>
                  {/* <section class="icon"><span class="title"></span></section> */}
                </div>  
                <div class="page" id="p3">
                <h1 class="heading">Clothes</h1>
                  {/* <section class="icon"><span class="title">Clothing</span></section> */}
                </div>
                <div class="page" id="p4">
                <h1 class="heading">Account</h1>
                  <section class="icon">
                    {/* <span class="title">Account</span> */}
                    <p class="hint">
                      
                    </p>
                    
                  </section>
                </div> 
                <div class="page" id="p5">
                <h1 class="heading">Cart</h1>
                  <section class="icon">
                    {/* <span class="title">Cart</span> */}
                    <p class="hint">
                    </p>
                  </section>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      
      


);
};

export default Landing;

