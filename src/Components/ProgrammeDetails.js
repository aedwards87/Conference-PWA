import React from 'react'
import styled, { css } from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

import { Card } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'
import Toggle from '../Components/Toggle'


const ProgrammeDetails = ({ programme }) => (
  <Toggle>
    {({on, toggle}) => (
      <>
        <ProgrammeCard 
          id={`prog${programme.id}`}
          onClick={toggle} 
          className={on ? 'active' : null}
        >
          <time>{programme.time}</time>
          <h3>{programme.title}</h3>
          <Arrow color={teal} height="15px" aboveHeight="20px" className={on ? 'active' : null}/>
        </ProgrammeCard>
        
        <Transition
          native
          items={on}
          from={{height: 0, opacity: 0, transform: 'translate3d(0,-15px,0)' }}
          enter={{height: 'auto', opacity: 1, transform: 'translate3d(0,-5px,0)' }}
          leave={{height: 0, opacity: 0, marginTop: '0', transform: 'translate3d(0,-30px,0)'}}
          config={{ mass: 5, tension: 230, friction: 40, }}
        >
          {on => on && (props =>
            <animated.div style={props}>
              <DropDownCard 
                // id={programme.name}
                dropDownShadow
                onClick={toggle} 
                key={programme.id}
              >
                <time>{programme.time}</time>
                <h3>{programme.title}</h3>
              </DropDownCard>
            </animated.div>
          )}
        </Transition>
        
      </>
    )}
  </Toggle> 
)



const ProgrammeCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  display: grid;
  cursor: pointer;
  max-width: 930px;
  transition: all 0.3s ease;
  p:nth-child(3) {
    background: ${aqua};
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: 1fr 10fr auto;
  };
  svg {
    transition: all 0.5s ease;
    /* opacity: 0; */
    transform: rotate(0deg)
  }
  svg.active {
    /* opacity: 1 */
    transform: rotate(-180deg)
  }
  &.active {
    border-radius: 20px 20px 0 0;
    @media (min-width: 600px) {
      border-radius: 20px 20px 0 0;      
    };
  }
`

const DropDownCard = styled(ProgrammeCard)`
  border-radius: 0 0 20px 20px;
  @media (min-width: 600px) {
    border-radius: 0 0 20px 20px;
  };
`




export default ProgrammeDetails
