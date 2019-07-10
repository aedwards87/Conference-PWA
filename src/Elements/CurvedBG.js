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
        border-radius: 100%;
        position: absolute;
        height: ${props => props.height};
        background: ${props => props.bgColor};
        right: -50vw;
        left: -50vw;
        top: -200px;
        bottom: 0;
        content: '';
        z-index: -1;
        box-shadow: 0 5px 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
        margin-bottom: 25px;
    }
    /* Smaller smart devices */
    @media (max-width: 330px) {
        padding-right: 25px;
        padding-left: 25px;
    }
    @media (min-width: 450px) {
        padding-top: 100px
    }
    @media (min-width: 600px) {
        &::before {
            right: -40vw;
            left: -40vw;
        }
    }
    
    
`


export default CurvedBG