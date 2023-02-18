import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { Sticky } from '../../styles';
import MeuVideo from '../../image/network.mp4';


import image from '../../image/img-paralax-new.png';


const FirstAndSecond: React.FC = () => {

  const { scrollYProgress} = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return <Sticky className='second'>
    <First />
    <motion.div style={{
      position: 'absolute',
      right: 0,
      left:  0,
      top:   0,
      height: '100vh',
      borderRadius: '4px,',
      border: '4px solid #fff',
      opacity: frameOpacity,
      scale: frameScale,
    }}/>

  </Sticky>
}

  const First: React.FC = () => {

    const { scrollYProgress} = useViewportScroll()

    const firstScale = useTransform(scrollYProgress,
      [0.19, 0.264, 0.558, 0.627],
      [1, 0.511, 0.511, 1]
      )

    const firstRadius = useTransform(scrollYProgress,
      [0.19, 0.264, 0.558, 0.627],
      [0, 4, 4, 0]
      )

    const leftSideHight = useTransform(scrollYProgress,
      [0, 0.058],
      ['20vh', '100vh']
      )

    const rightSideScale = useTransform(
      scrollYProgress,
      [0.047, 0.093],
      [0, 0.511]
    )

    const rightSideY = useTransform(
      scrollYProgress,
      [0.047, 0.093],
      ['58vh', '0vh']
    )

    const offSetY = useTransform(
      scrollYProgress,
      [0.328, 0.397, 0.461, 0.53],
      ['0%', '-100%', '-100%', '-200%']
    )


    return  <Sticky className='first'
      style={{
        scale: firstScale,
        borderRadius: firstRadius
      }}
    >

      
    <motion.div className='offset' style={{
      y: offSetY

    }}>
        <div className='firstText'>
         <div className='typeText'>
         <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString(`<h1> Hello World ! </h1> <br /> <h3>My name is Pedro Meireles, <br /> I'm a developer web based in Paris, FR. I have developed many types of front-ends from web sites and aplications . </h3><br /> `)
                .start();
              }}
              />
         </div>
        </div>

        <div className='a'>
          <motion.div
            className='left-side' 
            style={{
              height: leftSideHight
            }}
            />

            <div className='right-side'>
              <motion.div 
              className='right-image' 
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
              /> 
            </div>
          </div>
        <div className='b'>
          <div className='textInside'>
              <p>I USE MY PASSION AND SKILLS
                <br />
                TO CREATE DIGITAL PRODUCTS AND
                EXPERIENCES. NATIONAL AND INTERNATIONAL
                CUSTOMERS RELY ON ME FOR DESIGN,
                IMPLEMENTATION, AND MANAGEMENT OF
                THEIR DIGITAL PRODUCTS. AS AN
                INDEPENDENT.</p>
          </div>
        </div>
        <div className='c'>
          <div className='textMovie'>
            <h2>
                I USE MY PASSION AND SKILLS
                <br />O CREATE DIGITAL PRODUCTS AND
                EXPERIENCES. NATIONAL AND INTERNATIONAL
                CUSTOMERS RELY ON ME FOR DESIGN,
                IMPLEMENTATION, AND MANAGEMENT OF
                THEIR DIGITAL PRODUCTS. AS AN
                INDEPENDENT.</h2>
          </div>
          <div className='movie'>
            <video  autoPlay loop >
              <source src={MeuVideo} type="video/mp4" />
            </video>
          </div>
        </div>
    </motion.div>
    </Sticky>
  }


export default FirstAndSecond;
