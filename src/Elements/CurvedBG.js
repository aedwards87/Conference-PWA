// import React from 'react'
import styled from 'styled-components'


const CurvedBG = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: ${props => props.paddingTop ? props.paddingTop : "40px"};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '35px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '30px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '35px'};
    padding: ${props => props.padding};
    color: ${props => props.color};
    &::before {
        content: '';
        position: absolute;
        height: ${props => props.height};
        background: ${props => props.bgColor};
        right: -50vw;
        left: -50vw;
        top: -200px;
        bottom: 0;
        z-index: ${props => props.zIndex ? props.zIndex : -1};
        margin-bottom: 25px;
        border-radius: 100%;
        box-shadow: 0 5px 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
        background: url(${props => props.bgImgPortrait}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 95px) ;
        background-size: 70vw;
        transition: background .3s ease;
        /* transition: left .3s ease;
        transition: right .3s ease; */
    }
    /* Smaller smart devices */
    @media (max-width: 330px) {
        padding-right: 25px;
        padding-left: 25px;
    }
    @media (min-width: 450px) {
        &::before {
            /* right: -40vw;
            left: -40vw; */
            background: url(${props => props.bgImgPortrait}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 120px);
            background-size: calc(35vh);
        }
    }

    /* Large screens */
    @media (min-width: 700px) {
        &::before {
            background: url(${props => props.bgImgLandscape}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 120px) ;
            background-size: calc(40vw + 33vh);
            /* right: -20vw;
            left: -20vw; */
        }
    }
    
    @media (min-height: 800px) and (max-height: 1400px)  {
        &::before {
            background: url(${props => props.bgImgPortrait}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 120px);
            background-size: calc(37.5vh);
        }
    }
    @media (min-height: 1000px) and (min-width: 1100px)  {
        &::before {
            background: url(${props => props.bgImgLandscape}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 120px) ;
            background-size: calc(40vw + 33vh);
        }
    }
    @media (min-height: 1200px) and (max-width: 1200px)  {
        &::before {
            background: url(${props => props.bgImgPortrait}) ${props => props.bgColor ? props.bgColor : 'white'} no-repeat 50% calc(50% + 120px);
            background-size: calc(37.5vh);
        }
    }

    @media (min-width: 1450px) {
        &::before {
            background-size: calc(900px);
        }
    }

`


export default CurvedBG