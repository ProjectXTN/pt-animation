import styled from 'styled-components';
import { motion } from 'framer-motion';

import img from '../image/pedroLi.jpg';
import secondImg from '../image/img-paralax-3.png';
import tech from '../image/technology2.gif'

export const Main = styled.main`
    .first {
        background: gray;
        overflow: hidden;

        .offset {
            width: 100%;
            height: 100%;
        }
        
        .firstText {
                position: absolute;
                width: 50%;
                bottom: 50%;
                text-align: center;
                display: flex;
                justify-content: center;
            }
  

        .typeText {
            width: 70%;

            h1 {
                font-size: 60px;
            }

            h3 {
                font-size: 20px;
                font-weight: 500;
            }

            p {
                font-size: 22px;
            }
        }

        .a {
            background-color: #f5f1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;

            .left-side {
                background: #7dbb91;
                width: 50%;
                height: 100%;
            }

            .right-side {
                width: 50%;
                height: 100%;
            }

            .right-image {
                background-image: url(${img});
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                border-radius: 50px;
            }
        }

        .b {
            background-image: url(${tech});
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: center;
            width: 100%;
            height: 108%;
            display: flex;

            .textInside {
                background-color: rgba(0, 0, 0, 0.1);
                width: 100%;
                font-size: 50px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    color: #FFF;
                    width: 70%;
                    letter-spacing: 2.5px;
                    font-size: 30px;
                    text-align: center;
                    font-weight: 600;
                }
            }
        }

        .c {
            width: 100%;
            height: 100%;
            display: flex;
            text-align: center;
            align-items: center;

            .textMovie {
                
                h2 {
                width: 70%;
                right: 15%;
                position: absolute;
                color: #FFF;
                z-index: 10;
            }
            }

            video {
                width: 100%;
                height: auto;
            }
        }
    }

    .second {
        background-color: rgb(240, 240, 240);
    }

    .third {
        background-color: yellow;
    }

    .fourth {
        background-color: blue;
    }
`;

export const Section = styled.div`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;


