import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, Card } from '../Elements/index'
import { aqua, lightBlue, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'
import { LocationSVG } from '../Images/index'


const Map = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <AnimCurvedBG style={props} bgColor={aqua} color="white">

          <Spring
            native
            from={{opacity: 0, transform: 'translate3d(0,10px,0)'}}
            to={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            config={{delay: 300, duration: 500}}
          >
            {props => (
              <AnimHead style={props}>
                <h1>Maps</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis lectus. Mauris turpis metus, iaculis sit amet purus maximus, porta tristique tortor. Aenean imperdiet at diam tincidunt lacinia. Duis id turpis eu diam feugiat fringilla eget nec nunc. Praesent dapibus consectetur tellus, et luctus orci posuere.
                </p>
              </AnimHead>
            )}
        </Spring>


        </AnimCurvedBG>  
      )}
    </Spring>

    <CardWrapper>
      <AboutCard>
        <LocationSVG height="1.4rem" color={aqua} />
        <div>
          <h3>Conference Map</h3>
        </div>
        <Arrow color={aqua} height="15px" aboveHeight="20px" />
        <MapImg />
      </AboutCard> 
      <AboutCard>
        <LocationSVG height="1.4rem" color={aqua} style={{justifyItems: 'center'}} />
        <div>
          <h3>Exhibitors Map</h3>
        </div>
        <Arrow color={aqua} height="15px" aboveHeight="20px" />
        <MapImg />
      </AboutCard> 
    </CardWrapper>
  </>
)

const AboutCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 50px;
  max-width: 930px;
  position: relative;
  > svg {
    margin: 0 auto;
  }
  p { margin: 5px 0 0; }
  & p b {
    color: ${teal};
    font-weight: 500;
  }
  @media (min-width: 600px) {
    /* grid-template-columns: 1fr 30fr auto; */
  }
  @media (max-width: 350px) {
    h3 { font-size: 4.3vw }
  }
  @media (max-width: 300px) {
    h3 { font-size: 12px }
  }
`

const MapImg = styled.div`
  position: absolute;
  bottom: 0;
  height: 85px;
  width: 100%;
  border: 10px solid white;
  border-radius: 20px;
  background: url(https://i.imgur.com/Sk7qOAt.png) ${lightBlue}30 no-repeat center center ;
  background-size: cover;
`

const Head = styled.header`
  padding: 40px 0 70px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  
  /* Above */
  @media (min-width: 450px) {
    padding: 140px 0 80px 0;
  }
  /* @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  }; */

  /* Below */
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  margin: -120px auto 0 auto;
  padding: 0 35px;
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
    display: grid;
    /* justify-items: center; */
  }
  /* Above */
  @media (min-width: 600px) {
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 25px;
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`


const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Map