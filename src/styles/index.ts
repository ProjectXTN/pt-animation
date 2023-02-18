import styled from 'styled-components';
import { motion } from 'framer-motion';

import img from '../image/pedroLi.jpg'
import secondImg from '../image/webtech.jpg'

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
            }
        }

        .b {
            background-image: url(${secondImg});
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: 400px;
            width: 100%;
            height: 100%;
            display: flex;

            .textInside {
                background-color: rgb(193, 208, 222);
                width: 50%;
                font-size: 50px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .c {
            background-color: #0a7397;
            width: 100%;
            height: 100%;
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


