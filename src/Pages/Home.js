import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'
import Media from "react-media";

import { CurvedBG } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import icsaPortraitLogo from '../Images/icsa-portrait.svg'
import icsaLandscapeLogo from '../Images/icsa-landscape.svg'
import Form from '../Components/Form'

const Home = () => (
  <>
    <StyledContainer>
      <Media query="(max-width: 449px)">
        {matches =>
          matches ? (
            <Spring
              native
              from={{ opacity: 0, transform: 'translate3d(0,-40vh,0)'}}
              to={{ opacity: 1, transform: 'translate3d(0,-5vh,0)' }}
              config={{ tension: 100, friction: 10 }}
            >
              {props => (
                <AnimCurvedBG 
                  height="96%"
                  style={props}
                  bgColor="white" 
                  zIndex="999" 
                  paddingTop="0"
                  // bgImgPortrait={icsaPortraitLogo}
                  // bgImgLandscape={icsaLandscapeLogo}
                />
              )}
            </Spring> 
          ) : (
            <Spring
              native
              from={{ opacity: 0, transform: 'translate3d(0,-40vh,0)'}}
              to={{ opacity: 1, transform: 'translate3d(0,-5vh,0)' }}
              config={{ tension: 100, friction: 12 }}
            >
              {props => (
                  <AnimCurvedBG 
                    height="102vh"
                    style={props}
                    bgColor="white" 
                    zIndex="999" 
                    paddingTop="0"
                    // bgImgPortrait={icsaPortraitLogo}
                    // bgImgLandscape={icsaLandscapeLogo}
                  />
              )}
            </Spring> 
            )
          }
        </Media>
    </StyledContainer>
    <Form 
      name="review"
      title="Review Form"
      message="Get in touch, we would like to hear from you."
      bgColor={aqua}
      buttonColor={teal}
      bottomCurve
    />
  </>
)

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${aqua};
`

const StyledCurvedBG = styled(CurvedBG)`
  /* Mobile first */
  &::before {
    background: url(${icsaPortraitLogo}) 
                ${props => props.bgColor ? props.bgColor : 'white'} 
                no-repeat 50% calc(50% + 30vw);
    background-size: 69vw;
    transition: background .3s ease;
  }
  /* Tall smart phones */
  @media (max-width: 420px) {
    @media (min-height: 750px) {
      &::before {
        background-size: 81vw;
        background-position: 50% calc(50% + 30vw)
      }
    }
    @media (min-height: 820px) {
      &::before {
        background-size: 79vw;
        background-position: 50% calc(50% + 29vw)
      }
    }
  }

  /* Above 600px */
  @media (min-width: 600px) {
    &::before {
      background: url(${icsaLandscapeLogo}) 
                  ${props => props.bgColor ? props.bgColor : 'white'} 
                  no-repeat 50% 70%;
      background-size: calc(40vw + 33vh);
    }
  }
  /* Below 600px but above 450px */
  @media (max-width: 600px) and (min-width: 450px) {
    &::before {
      background: url(${icsaPortraitLogo}) 
                ${props => props.bgColor ? props.bgColor : 'white'} 
                no-repeat 50% calc(50% + 20vh);
      background-size: 35vh;
    }
  }
  
`

const AnimCurvedBG = animated(StyledCurvedBG)



export default Home