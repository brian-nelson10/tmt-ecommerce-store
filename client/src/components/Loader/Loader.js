import React from "react";
import './loader.css';
import { motion } from "framer-motion";
import Logo from '../../assets/images/tmt-logo2-removebg.png';
import Logo1 from '../../assets/images/tmt-logo2-removebg.png';
import Logo2 from '../../assets/images/tmt-logo2-removebg.png';
import Logo3 from '../../assets/images/tmt-logo2-removebg.png';
import Logo4 from '../../assets/images/tmt-logo2-removebg.png';

import {
    Container,
    CssBaseline,
    Grid
} from '@mui/material';

import Image from "../Image/Image";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    
    <Container >
        <CssBaseline />       
    <motion.div className="loader">
        <Grid container>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <Grid container xs={6}>
        <ImageBlock variants={item} id={Logo} />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={Logo}
          />
        </motion.div>
        </Grid>
        <Grid container xs={6}>
        <ImageBlock variants={item} id={Logo1} />
        <ImageBlock variants={item} id={Logo2} />
        <ImageBlock variants={item} id={Logo3} />
        <ImageBlock variants={item} id={Logo4} />
        </Grid>
      </motion.div>
      
      </Grid>
    </motion.div>
    
    </Container>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={`${id}`}
        fallback={`${id}`}
        alt={id}
      />
    </motion.div>
   
  );
};
export default Loader;