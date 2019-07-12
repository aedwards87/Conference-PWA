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
            from={{ paddingBottom: '35vh', opacity: 0 }}
            to={{ paddingBottom: '92vh', opacity: 1 }}
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
            from={{ paddingBottom: '35vh', opacity: 0 }}
            to={{ paddingBottom: '97.5vh', opacity: 1 }}
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