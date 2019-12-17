import React from "react"
import styled from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import { CurvedBG, CardWrapper } from '../Elements/index'
import { teal, aqua } from '../Utilities/index'
import { programmeDayOne, programmeDayTwo, ProgrammeDetails } from '../Components/index'
import Toggle from '../Components/Toggle'


const Programme = () => {
  
  const url = new URL("http://localhost:3000/programme")

  const query_string = url.search

  const params = new URLSearchParams(query_string)

  url.search = params.toString()

  console.log(params.toString())

  // const x = urlParams.slice(5,6)

  // const a = params.toString()
  // console.log(params.toString())
  // console.log(a)

  // params.delete(a)

  // console.log(params.toString())

  // useEffect(() => {
    
  // }) 

  return (
  <Toggle>
    {({on, toggle}) => (
      <>
        {/* TODO: Have these buttons appear and stick to the top when on standalone (PWA) and when the original buttons are scroll off screen - might need to make a scroll to top button*/}

        {/* <DayButtonsContainerMobile>
          <button className={on ? null : "active"} onClick={toggle} children="Day One" />
          <button className={on ? "active" : null} onClick={toggle} children="Day Two" />
        </DayButtonsContainer> */}

        <Spring
          from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
          to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
          config={{tension: 100, friction: 13}}
        >
          {props => (
            <AnimCurvedBG style={props} bgColor={teal} color="white">

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
                    <DayButtonsContainer>
                      <button 
                        id="day-one-button" 
                        className={on ? null : "active"} 
                        onClick={on ? toggle : null} 
                        children="Day One" 
                      />
                      <button 
                        id="day-two-button" 
                        className={on ? "active" : null} 
                        onClick={on ? null : toggle} 
                        onClick={params}
                        children="Day Two"
                        // Need to somehow update the URL params to include daytwo when clicked, so it actually changes to daytwo section.
                      />
                    </DayButtonsContainer>
                  </AnimHead>
              )}
            </Spring>


            </AnimCurvedBG>  
          )}
        </Spring>
        


        <CardWrapper programmeStyle >
          <Trail 
            native
            items={on ? 
              // Has to subtract 1 to ensure it starts with the first array which starts at 0
              programmeDayTwo.map(prog => prog.id - 1) 
              : programmeDayOne.map(prog => prog.id - 1)
            } 
            key={on}
            from={{opacity: 0, transform: 'translate3d(20px,40px,0)' }} 
            to={{opacity: 1, transform: 'translate3d(0,0px,0)' }}
            config={{mass: 5, tension: 2000, friction: 200, delay: 300}}
          >
            {item => props => (    
              <animated.div style={props}>
                <ProgrammeDetails
                  style={props}
                  programme={on ? programmeDayTwo[item] : programmeDayOne[item]}
                />
              </animated.div>
            )}
          </Trail>  
        </CardWrapper>
      </>
    )}
  </Toggle> 
)}



const DayButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  z-index: 9999999999;
  > button {
    flex: 1;
    height: 40px;
    padding: 10px;
    border: 0;
    outline: none;
    color: ${teal};
    background: rgba(255,255,255,0.6);
    font-size: .9rem;
    border-radius: 15px;
    box-shadow: 0 0px 2px 0 rgba(13,0,76,0.03), 0 1px 3px 0 rgba(13,0,76,0.1);
    transition: all .6s ease;
    font-weight: 500;
    cursor: pointer;
    &:first-of-type {
      margin-right: 5px;
    }
    &:last-of-type {
      margin-left: 5px;
    }
    &:hover, &.active {
      background: ${aqua};
      color: white;
      font-weight: 600;
      font-size: 1rem;
      box-shadow: 0 1px 3px 0 rgba(13,0,76,0.06), 0 2px 5px 0 rgba(13,0,76,0.3);
    }
    &.active {
      cursor: auto;
    }
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
  transition: max-width .6s ease;
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

// const programmeStyle = css`
//   > div {
//     display: grid;
//     justify-items: center;
//   }
// `


const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Programme
