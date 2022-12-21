import React, { useEffect } from 'react';
import "./landing.css";
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import ToothLogo from '../assets/images/tmt-logo-pink.png';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import SuccessBanner from "../assets/images/success-min.png";

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
        duration: 1.4,
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
        duration: 1.1,
        ease: [0.6, -0.05, 0.01, 3.5],
      },
    },
  };

const Success = ({isFirstMount}) => {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          const products = cart.map((item) => item._id);
    
          if (products.length) {
            const { data } = await addOrder({ variables: { products } });
            const productData = data.addOrder.products;
    
            productData.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
          }
    
          setTimeout(() => {
            window.location.assign('/');
          }, 5000);
        }
    
        saveOrder();
      }, [addOrder]);
    
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
         <><div style={{ backgroundImage: `url(${ToothLogo })`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '950px', width: '100%', height: '100%', position: 'absolute' }}>
            <Jumbotron>
                <motion.div initial="initial"
          animate="animate"
          variants={content(isFirstMount)}><motion.div variants={title}><img src={SuccessBanner}/></motion.div>
          <motion.div variants={log} >
                <h2 style={{fontFamily: 'Lacquer', color: 'black', fontSize: '50px'}}>Thank you for your purchase!</h2>
                <h2 style={{fontFamily: 'Lacquer', color: 'black', fontSize: '50px'}}>You will now be redirected to the home page</h2>
                </motion.div>
                </motion.div>
            </Jumbotron>
        
        <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "background": {
                        "color": {
                            "value": "rgb(246, 217, 180)"
                        }
                    },
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "particles": {
                        "color": {
                            "value": ["#FFC0CB", "rgb(248, 175, 189)", "#0000", "rgb(248, 175, 189)", "rgb(248, 175, 189)"],
                            "animation": {
                                "enable": true,
                                "speed": 30
                            }
                        },
                        "move": {
                            "decay": 0.1,
                            "direction": "top",
                            "enable": true,
                            "gravity": {
                                "acceleration": 9.81,
                                "enable": true,
                                "maxSpeed": 200
                            },
                            "outModes": {
                                "top": "none",
                                "default": "destroy"
                            },
                            "speed": {
                                "min": 50,
                                "max": 150
                            }
                        },
                        "number": {
                            "value": 0,
                            "limit": 300
                        },
                        "opacity": {
                            "value": 1,
                            "animation": {
                                "enable": false,
                                "startValue": "max",
                                "destroy": "min",
                                "speed": 0.3,
                                "sync": true
                            }
                        },
                        "rotate": {
                            "value": {
                                "min": 0,
                                "max": 360
                            },
                            "direction": "random",
                            "move": true,
                            "animation": {
                                "enable": true,
                                "speed": 60
                            }
                        },
                        "tilt": {
                            "direction": "random",
                            "enable": true,
                            "move": true,
                            "value": {
                                "min": 0,
                                "max": 360
                            },
                            "animation": {
                                "enable": true,
                                "speed": 60
                            }
                        },
                        "shape": {
                            "type": ["circle", "circle", "polygon"],
                            "options": {
                                "polygon": [
                                    {
                                        "sides": 5
                                    },
                                    {
                                        "sides": 6
                                    }
                                ]
                            }
                        },
                        "size": {
                            "value": 6
                        },
                        "roll": {
                            "darken": {
                                "enable": false,
                                "value": 30
                            },
                            "enlighten": {
                                "enable": false,
                                "value": 30
                            },
                            "enable": true,
                            "speed": {
                                "min": 15,
                                "max": 25
                            }
                        },
                        "wobble": {
                            "distance": 40,
                            "enable": true,
                            "move": true,
                            "speed": {
                                "min": -15,
                                "max": 15
                            }
                        }
                    },
                    "emitters": [
                        {
                        
                            "direction": "top-right",
                            "rate": {
                              "delay": 0.1,
                              "quantity": 15
                            },
                            "position": {
                              "x": 0,
                              "y": 70
                            },
                            "size": {
                              "width": 0,
                              "height": 0
                            }
                          },
                          {
                        
                            "direction": "top-left",
                            "rate": {
                              "delay": 0.1,
                              "quantity": 15
                            },
                            "position": {
                              "x": 100,
                              "y": 70
                            },
                            "size": {
                              "width": 0,
                              "height": 0
                            }
                          },
                        {
                        
                        "direction": "top-right",
                        "rate": {
                          "delay": 0.1,
                          "quantity": 15
                        },
                        "position": {
                          "x": 0,
                          "y": 50
                        },
                        "size": {
                          "width": 0,
                          "height": 0
                        }
                      },
                      {
                        "direction": "top-left",
                        "rate": {
                          "delay": 0.1,
                          "quantity": 15
                        },
                        "position": {
                          "x": 100,
                          "y": 50
                        },
                        "size": {
                          "width": 0,
                          "height": 0
                        }
                      }
                    ]
                    }
                
            } /></div></>
    );
};

export default Success;
