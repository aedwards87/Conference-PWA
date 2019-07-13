import React from "react"
import styled from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import Card from '../Components/Card'

import CurvedBG from '../Elements/CurvedBG'
import { teal } from '../Utilities/index'


const programmes = [
  {
    id: 1,
    title: 'Breakfast',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address',
    time: '09.10'
  },
  {
    id: 4,
    title: 'Breakfast2',
    time: '08.35'
  },
  {
    id: 5,
    title: 'Welcome and introduction2',
    time: '09.00'
  },
  {
    id: 6,
    title: 'Keynotes address2',
    time: '09.10'
  },
  {
    id: 7,
    title: 'Breakfast3',
    time: '08.35'
  },
  {
    id: 8,
    title: 'Welcome and introduction3',
    time: '09.00'
  },
  {
    id: 9,
    title: 'Keynotes address3',
    time: '09.10'
  },
  {
    id: 10,
    title: 'Breakfast3',
    time: '08.35'
  },
  {
    id: 11,
    title: 'Welcome and introduction3',
    time: '09.00'
  },
  {
    id: 12,
    title: 'Keynotes address3',
    time: '09.10'
  },
]


const Programme = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <CurvedBG style={props} bgColor={teal} color="white">

          <Spring
            native
            from={{opacity: 0, transform: 'translate3d(0,10px,0)'}}
            to={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            config={{delay: 300, duration: 500}}
          >
            {props => (
            <AnimHead style={props}>
              <h1>Programme</h1>
              <p>
                This year’s programme offers six breakout streams exploring the latest developments in governance and the future of the board. With an unparalleled choice of over 40 seminars you can tailor the conference to meet your needs and get the best experience of two packed-days.
              </p>
            </AnimHead>
          )}
        </Spring>


        </CurvedBG>  
      )}
    </Spring>
    


    <CardWrapper >
  
      <Trail 
        native
        items={programmes.map(programme => programme.id - 1)} 
        from={{opacity: 0, transform: 'translate3d(20px,40px,0)' }} 
          to={{opacity: 1, transform: 'translate3d(0,0px,0)' }}
        config={{mass: 5, tension: 2000, friction: 200, delay: 300}}
      >
        {item => props => (    
          <animated.div style={props}>
            <Card
              style={props}
              programme={programmes[item]}
            />
          </animated.div>
        )}
      </Trail>  

    </CardWrapper>

  </> 
)

  


const Head = styled.header`
  color: white;
  padding: 40px 0 50px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  
  /* Above */
  @media (min-width: 450px) {
    padding: 170px 0 90px 0;
  }
  @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  };

  /* Below */
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`
const AnimHead = animated(Head)

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 13px;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  margin-top: -110px;
  padding: 0 35px 60px;
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
    display: grid;
    justify-items: center;
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px 60px;
  }
  @media (max-width: 450px) {
    padding: 0 20px 60px;
  }
`

export default Programme
