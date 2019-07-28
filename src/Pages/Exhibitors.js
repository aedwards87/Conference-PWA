import React from "react"
import styled from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import { CurvedBG } from '../Elements/index'
import { burgundy } from '../Utilities/index'
import { exhibitors, ExhibitorDetails } from '../Components/index'


// Code below filters the exhibitors data into the 2 types of sponsor levels (Headline, Gold and Silver)
// TO TRY TODO: Give line breaks to the different sponsors using the filtered code below.
// const headlineSponsor = exhibitors.filter(sponsor => (
//   sponsor.level.includes('Headline')
// ))
// const goldSponsor = exhibitors.filter(sponsor => (
//   sponsor.level.includes('Gold')
// ))
// const silverSponsor = exhibitors.filter(sponsor => (
//   sponsor.level.includes('Silver')
// ))


const Exhibitors = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <AnimCurvedBG style={props} bgColor={burgundy} color="white">

          <Spring
            native
            from={{opacity: 0, transform: 'translate3d(0,10px,0)'}}
            to={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            config={{delay: 300, duration: 500}}
          >
            {props => (
              <AnimHead style={props}>
                <h1>Exhibitors</h1>
                <p>
                  View the full list of our 2019 exhibitors.
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
          items={exhibitors.map(exhibitor => exhibitor.id - 1)} 
          keys={exhibitors.map((_, i) => i)}
          from={{opacity: 0, transform: 'translate3d(20px,40px,0)' }} 
          to={{opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {item => props => (    
            <animated.div style={props}>
              <ExhibitorDetails
                style={props}
                exhibitor={exhibitors[item]}
              />
              {console.log(exhibitors[item].level === 'Gold')}
            </animated.div>
          )}
        </Trail>  

    </CardWrapper>


  </>
)


const Head = styled.header`
  color: white;
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
    padding: 140px 0 80px 0;
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
    justify-items: center;
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
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

export default Exhibitors