import React from 'react'
// import { Link } from "@reach/router";
import styled from 'styled-components'
import { speakers } from '../Components/data'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import { Card, Tag } from '../Elements/index'


const Speaker = (props) => {

  const id = parseInt(props.id) - 1

  return (

    <>
      <Spring
        from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
        to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
        config={{tension: 100, friction: 13}}
      >
        {props => (
          <AnimCurvedBG 
            style={props} 
            bgColor={aqua} 
            color="white" 
            height="250px" 
            aboveHeight="370px"
          />
        )}
      </Spring>
    
      <CardWrapper >
        <Spring 
          native
          from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }} 
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {props => (    
            <animated.div style={props}>
              <Card style={{height: 500}}>

                <Spring 
                  native
                  from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }} 
                  to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  config={{ mass: 5, tension: 230, friction: 40, delay: 400 }}
                >
                  {props => ( 
                    <AnimSpeakerImg style={props}>
                      <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
                    </AnimSpeakerImg>
                  )}
                </Spring> 

                <div> 
                  <h3>{speakers[id].name}</h3>
                  <p>{speakers[id].title}</p>
                  <p>{speakers[id].bio}</p>
                  {(speakers[id].keynote === 'true') && (
                    <Tag bgColor={teal} position="static" >Keynote</Tag>)
                  }
                </div>
              </Card>
            </animated.div>
          )}
        </Spring>  
      </CardWrapper>


    


    </>
  )
}


const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 25px;
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px ;
  }
  @media (max-width: 450px) {
    padding: 0 20px ;
  };
  ${Card} {
    max-width: 700px;
  }
`

const SpeakerImg = styled.div`
  position: absolute;
  top: -75px;
  left: calc(50% - 75px);
  height: 150px;
  width: 150px;
  border-radius: 100%;
  border: 6px solid white;
  overflow: hidden;
  display: grid;
  place-content: center;
  padding-top: 25px;
  box-shadow: 0 2px 6px 0 rgba(13,0,76,0.06),
  0 5px 15px 0 rgba(13,0,76,0.2);
  @media (min-width: 450px) {
    top: -110px;
    left: calc(50% - 110px);
    height: 220px;
    width: 220px;
    border: 8px solid white;
  };
  > img {
    width: 100%;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimSpeakerImg = animated(SpeakerImg)


export default Speaker
