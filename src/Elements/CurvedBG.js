import styled from 'styled-components'
import { lightBlue } from '../Utilities/index'

const CurvedBG = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props => props.height};
    padding: 40px 35px 30px;
    color: ${props => props.color};
    &::before {
        content: '';
        position: absolute;
        background: ${props => props.bgColor};
        right: -60vw;
        left: -60vw;
        top: -200px;
        bottom: 0;
        z-index: ${props => props.zIndex ? props.zIndex : -1};
        margin-bottom: 25px;
        border-radius: 100%;
        box-shadow: 0 5px 10px 0 rgb(13,0,76,0.1), 0 0px 30px 0 rgb(13,0,76,0.2);
        transition: background .3s ease;
        @media (min-width: 450px) {
            right: -50vw;
            left: -50vw;    
        }
        @media (max-width: 335px) {
            right: -70vw;
            left: -70vw;    
        }
    }
    /* Smaller smart devices */
    @media (max-width: 330px) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: 450px) {
        padding-right: 35px;
        padding-left: 35px;
        height: ${props => props.aboveHeight};
    }

    /* Above */
    /* @media (min-width: 450px) {
        padding: 0 35px;
        &::before {
            right: -50vw;
            left: -50vw;
            background: ${props => props.background ? `url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 81%;`
                        : null 
            };
            background-size: calc(35vh);
        }
    } */

    /* Large screens */
    /* @media (min-width: 700px) {
        &::before {
            background: ${props => props.background ? 
                        `url(${props => props.bgImgLandscape}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 70% ;`
                        : null
            }
            background-size: calc(40vw + 33vh);
        }
    }
    
    @media (min-height: 800px) and (max-height: 1400px)  {
        &::before {
            background: ${props => props.background ? 
                        `url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 78%;`
                        : null 
            }
            background-size: calc(37.5vh);
        }
    }
    @media (min-height: 1000px) and (min-width: 1100px)  {
        &::before {
            background: ${props => props.background ? 
                        `url(${props => props.bgImgLandscape}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 60% ;`
                        : null
            }
            background-size: calc(40vw + 33vh);
        }
    }
    @media (min-height: 1200px) and (max-width: 1200px)  {
        &::before {
            background: ${props => props.background ? 
                        `url(${props => props.bgImgPortrait}) 
                        ${props => props.bgColor ? props.bgColor : 'white'} 
                        no-repeat 50% 74%;`
                        : null
            }
            background-size: calc(37.5vh);
        }
    }

    @media (min-width: 1450px) {
        &::before {
            background-size: calc(900px);
        }
    } */







    h1 {
        margin: 0 0 40px;
        padding: 0;
        font-weight: 200;
        font-size: 13.5vw;
        line-height: 16vw
    }
    p {
        padding: 0;
        line-height: 1.55rem;
        font-size: 1rem;
        width: 100%;
        margin: 15px 0;
    }
    p:first-of-type { margin-top: 0; }
    p:last-of-type { margin-bottom: 40px; }
    a { color: white; }
    a:hover { color: ${lightBlue}; }
    
    /* Above */
    @media (min-width: 450px) {
        h1 {
            font-size: 3.8rem;
            line-height: 4rem;
        };
        p {
            line-height: 1.6rem;
            font-size: 1.05rem;
        };
        /* p:first-of-type { margin-top: 40px; } */
        p:last-of-type { margin-bottom: 50px; }
        h1 span { display: none; }
    }

    /* Below */
    @media (max-width: 320px) { 
        h1 {
            font-size: 44px;
            line-height: 14.5vw
        }
        p {
            /* line-height: 1.45rem;
            font-size: 0.95rem; */
        }
    }


`


export default CurvedBG