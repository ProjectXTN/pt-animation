import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';


import { Container, Row, Img, A  } from './styles';


const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  const logo = require("../../image/logo_rabbit_white.png")
  return (
    <Container style={{
      y:headerY
    }}>
            <Row>
              <a href='#'><Img src={logo} alt="Image Logo" /></a>
            </Row>
            <Row>
                <A href="#">Home</A>
                <A href="#">À propos de moi</A>
                <A href="#">Projets</A>
                <A href="#">Compétences</A>
                <A href="https://github.com/ProjectXTN" target="_blank">Github</A>
                <A href="https://www.linkedin.com/in/pedro-henrique-braz-meireles-68609b204/" target="_blank">Linkedin</A>
            </Row>
    </Container>
  );
}

export default Header