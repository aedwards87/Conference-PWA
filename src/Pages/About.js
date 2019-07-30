import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, Card, PersonImg, CardWrapper } from '../Elements/index'
import { cyan, aqua, burgundy } from '../Utilities/index'
import Arrow from '../Images/arrow'



const About = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <AnimCurvedBG style={props} bgColor={cyan} color="white">

          <Spring
            native
            from={{opacity: 0, transform: 'translate3d(0,10px,0)'}}
            to={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            config={{delay: 300, duration: 500}}
          >
            {props => (
              <AnimHead style={props}>
                <h1>About</h1>
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
        <PersonImg>
          <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
        </PersonImg>
        <div>
          <h3>Welcome and Introduction</h3>
          <p>from <b>ICSA</b></p>
        </div>
        <Logo src={require("../Images/icsa-logo-compact-rgb-core.png")} alt="icsa logo"/>
        <Arrow color={cyan} height="15px" aboveHeight="20px" />
      </AboutCard> 
      <AboutCard>
        <PersonImg>
          <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
        </PersonImg>
        <div>
          <h3>Welcome and Introduction</h3>
          <p>from the <b>Headline sponsor</b></p>
        </div>
        <Logo src={require("../Images/icsa-logo-compact-rgb-core.png")} alt="icsa logo"/>
        <Arrow color= {cyan} height="15px" aboveHeight="20px" />
      </AboutCard> 
    </CardWrapper>
  </>
)

const AboutCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  max-width: 930px;
  position: relative;
  p { margin: 5px 0 0; }
  p:nth-child(3) {
    background: ${cyan};
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  & p b {
    color: ${burgundy};
    font-weight: 500;
  }
  @media (max-width: 350px) {
    h3 { font-size: 4.3vw }
  }
  @media (max-width: 300px) {
    h3 { font-size: 12px }
  }
  @media (min-width: 650px) {
    grid-template-columns: auto 6fr 1fr auto;
  }
`

const Logo = styled.img`
  height: 30px;
  display: none;
  @media (min-width: 650px) {
    display: inline-block;
  }
`



const Head = styled.header`
  color: white;
  padding: 40px 0 70px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  transition: max-width 0.6s ease;  
  /* Above */
  @media (min-width: 450px) {
    padding: 140px 0 80px 0;
  }
  /* @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  }; */

  /* Below */
  @media (max-width: 900px) {
    max-width: 625px;
  }
`


const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default About