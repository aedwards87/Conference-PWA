// import React from 'react'
import styled from 'styled-components'


const CurvedBG = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props => props.height};
    /* padding-top: ${props => props.paddingTop ? props.paddingTop : "40px"};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '25px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '30px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '25px'};
    padding: ${props => props.padding}; */
    padding: 40px 25px 30px;
    color: ${props => props.color};
    &::before {
        content: '';
        position: absolute;
        background: ${props => props.bgColor};
        right: -70vw;
        left: -70vw;
        top: -200px;
        bottom: 0;
        z-index: ${props => props.zIndex ? props.zIndex : -1};
        margin-bottom: 25px;
        border-radius: 100%;
        box-shadow: 0 5px 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
        background: url(${props => props.bgImgPortrait}) 
                    ${props => props.bgColor ? props.bgColor : 'white'} 
                    no-repeat 50% 81%;
        background-size: 68vw;
        transition: background .3s ease;
    }
    /* Smaller smart devices */
    @media (max-width: 330px) {
        padding-right: 25px;
        padding-left: 25px;
    }
    /* Above */
    @media (min-width: 450px) {
        padding: 0 35px;
        &::before {
            right: -50vw;
            left: -50vw;
            background: url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 81%;
            background-size: calc(35vh);
        }
    }

    /* Large screens */
    @media (min-width: 700px) {
        &::before {
            background: url(${props => props.bgImgLandscape}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 70% ;
            background-size: calc(40vw + 33vh);
            /* right: -20vw;
            left: -20vw; */
        }
    }
    
    @media (min-height: 800px) and (max-height: 1400px)  {
        &::before {
            background: url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 78%;
            background-size: calc(37.5vh);
        }
    }
    @media (min-height: 1000px) and (min-width: 1100px)  {
        &::before {
            background: url(${props => props.bgImgLandscape}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 60% ;
            background-size: calc(40vw + 33vh);
        }
    }
    @media (min-height: 1200px) and (max-width: 1200px)  {
        &::before {
            background: url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 74%;
            background-size: calc(37.5vh);
        }
    }

    @media (min-width: 1450px) {
        &::before {
            background-size: calc(900px);
        }
    }







    h1 {
        margin: 0;
        padding: 0;
        font-weight: 200;
        font-size: 16.5vw;
        line-height: 16vw
    }
    p {
        padding: 0;
        line-height: 1.7rem;
        font-size: 1.1rem;
        margin: 45px 0 40px;
        width: 100%;
    }
    
    /* Above */
    @media (min-width: 450px) {
        h1 {
            font-size: 3.8rem;
            line-height: 4rem;
        };
        p {
            font-weight: 350;
            line-height: 1.45rem;
            font-size: 1rem;
        };
        p { margin: 40px 0 50px; }
        h1 span { display: none; }
    }
    @media (min-width: 1000px) {
        p { margin: 40px 0 60px; }
    };

    /* Below */
    @media (max-width: 320px) { 
        h1 {
            font-size: 15vw;
            line-height: 14.5vw
        }
        p {
            line-height: 1.45rem;
            font-size: 0.95rem;
        }
    }







`


export default CurvedBG