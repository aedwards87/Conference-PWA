import React from "react"
import styled from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import { CurvedBG } from '../Elements/index'
import { aqua } from '../Utilities/index'
import { speakers, SpeakerDetails } from '../Components/index'


const Speakers = () => (
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
              <h1>Speakers</h1>
              <p>
                More than 95 speakers including keynote line-up has been confirmed. This year’s Annual Conference features presentations from <strong>governance leaders, company secretaries, board members and executive directors, regulators, innovators, disruptors, influencers, governance scholars,</strong> whose diverse experiences will provide practical insights and actionable ideas for preparing your board for the future.
              </p>
              </AnimHead>
          )}
        </Spring>


        </AnimCurvedBG>  
      )}
    </Spring>


    <CardWrapper >
    
        <Trail 
          native
          items={speakers.map(speaker => speaker.id - 1)} 
          from={{opacity: 0, transform: 'translate3d(20px,40px,0)' }} 
          to={{opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {item => props => (    
            <animated.div style={props}>
              <SpeakerDetails
                style={props}
                speaker={speakers[item]}
              />
            </animated.div>
          )}
        </Trail>  

    </CardWrapper>


  </>
)

const Head = styled.header`
  color: white;
  padding: 40px 0 60px 0;
  margin: 0 auto;
  max-width: 720px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  p { text-shadow: 0px 0.5px 0 rgba(255,255,255,0.2); }
  
  /* Above */
  @media (min-width: 450px) {
    padding: 170px 0 100px 0;
  }
  @media (min-width: 1000px) {
    padding: 190px 0 115px 0;
  };

  /* Below */
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`


const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: -120px auto 50px auto;
  padding: 0 35px 60px;
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
    display: grid;
    justify-items: center;
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 25px;
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px 60px;
  }
  @media (max-width: 450px) {
    padding: 0 20px 60px;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Speakers
