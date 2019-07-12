import React from "react"
import styled from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import Card from '../Components/Card'

import CurvedBG from '../Elements/CurvedBG'
import { burgundy } from '../Utilities/index'


const exhibitors = [
    {
      id: 1,
      name: 'Tom Wilson',
      title: 'Apple',
      bio: 'blah blah blah'
    },
    {
      id: 2,
      name: 'Natalie Watts',
      title: 'Google',
      bio: 'blah blah blah'
    },
    {
      id: 3,
      name: 'John Patterson',
      title: 'Microsoft',
      bio: 'blah blah blah'
    },
    {
      id: 4,
      name: 'Tom Wilson',
      title: 'Apple',
      bio: 'blah blah blah'
    },
    {
      id: 5,
      name: 'Natalie Watts',
      title: 'Google',
      bio: 'blah blah blah'
    },
    {
      id: 6,
      name: 'John Patterson',
      title: 'Microsoft',
      bio: 'blah blah blah'
    },
    {
      id: 7,
      name: 'Tom Wilson',
      title: 'Apple',
      bio: 'blah blah blah'
    },
    {
      id: 8,
      name: 'Natalie Watts',
      title: 'Google',
      bio: 'blah blah blah'
    },
    {
      id: 9,
      name: 'John Patterson',
      title: 'Microsoft',
      bio: 'blah blah blah'
    },
    {
      id: 10,
      name: 'Tom Wilson',
      title: 'Apple',
      bio: 'blah blah blah'
    },
  ]


const Exhibitors = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-20vh,0)', opacity: 0}}
      to={{transform: 'translate3d(0,0,0)', opacity: 1}}
      config={{tension: 100, friction: 16}}
    >
      {props => (
        <CurvedBG style={props} bgColor={burgundy} color="white">

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


        </CurvedBG>  
      )}
    </Spring>


    <CardWrapper >
    
        <Trail 
          native
          items={exhibitors.map(exhibitor => exhibitor.id - 1)} 
          from={{opacity: 0, transform: 'translate3d(20px,40px,0)' }} 
          to={{opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {item => props => (    
            <animated.div style={props}>
              <Card
                style={props}
                speaker={exhibitors[item]}
              />
            </animated.div>
          )}
        </Trail>  

    </CardWrapper>


  </>
)



const Head = styled.header`
  color: white;
  padding: 15px 0 90px 0;
  margin: 0 auto;
  max-width: 720px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    line-height: 4rem;
    font-weight: 200;
  };
  p {
    margin: 50px 0;
    padding: 0;
    font-weight: 350;
    width: 100%;
    line-height: 1.45rem;
    font-size: 1rem;
  };
  
  /* Below */

  @media (min-width: 450px) {
    padding: 105px 0 80px 0;
    p { margin: 40px 0 60px; }
    span { display: none; }
  }
  @media (min-width: 600px) {
    span { display: none; }
  }
  @media (min-width: 1000px) {
    padding: 125px 0 100px 0;
    p { margin: 40px 0 60px; }
  };

  /* Above */

  @media (max-width: 320px) { 
    h1 {
      font-size: 7vmax;
      line-height: 2.7rem;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 13vw;
      line-height: 13.5vw
    }
    p {
      line-height: 1.3rem;
      font-size: 0.9rem;
      margin: 40px 0;
    }
  }
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`
const AnimHead = animated(Head)


const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: -110px auto 0 auto;
  padding: 0 35px;
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
    padding: 0 15px;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`

export default Exhibitors