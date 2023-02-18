import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.header)`
    width: 100%;
    height: 100px;
    background: rgba(0,0,0, 0.1);


    position: fixed;
    top: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-around;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Img = styled.img`
    width: 15%;
    min-width: 55px;
    cursor:pointer;
`

export const A = styled.a`
    text-decoration: none;
    font-size: 17px;
    margin-right: 3rem;
    color: rgb(255, 255, 255);

    &:hover{
        color: rgb(218,165,32);
    }


    ${({variant}: any) => variant !== "primary" && css`
        color: #111;
        font-weight: bold;
        padding: 7px;

        &:hover{
            border: 1px solid #111;
            border-radius: 10px;
            padding: 7px;
            background-color: #FFF;
            color: #111;
        }
    `}
`