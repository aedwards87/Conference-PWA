import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'
import Media from "react-media";

import CurvedBG from '../Elements/CurvedBG'
import { aqua } from '../Utilities/index'
import icsaPortraitLogo from '../Images/icsa-portrait.svg'
import icsaLandscapeLogo from '../Images/icsa-landscape.svg'


const Home = () => (
  <StyledContainer>
    <Media query="(max-width: 450px)">
      {matches =>
        matches ? (
          <Spring
            native
            from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            config={{ tension: 100, friction: 10 }}
          >
            {props => (
                <AnimCurvedBG 
                  style={props}
                  bgColor="white" 
                  zIndex="999" 
                  paddingTop="0"
                  bgImgPortrait={icsaPortraitLogo}
                  bgImgLandscape={icsaLandscapeLogo}
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
                  bgImgPortrait={icsaPortraitLogo}
                  bgImgLandscape={icsaLandscapeLogo}
                />
            )}
          </Spring> 
          )
        }
      </Media>
  </StyledContainer>
)

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${aqua};
`

const AnimCurvedBG = animated(CurvedBG)

export default Home