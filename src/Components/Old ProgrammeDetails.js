import React from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

import { Card } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'
import Toggle from '../Components/Toggle'

const ProgrammeDetails = ({ programme }) => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <ProgrammeCard className={on ? 'active' : null} onClick={toggle}>
          <OnDisplay>
            <time>{programme.time}</time>
            <h3>{programme.title}</h3>
            <Arrow color={teal} height="15px" aboveHeight="20px" />
          </OnDisplay>

          {/* <HiddenDisplay className={on ? 'active' : null} >
              <br />
              <h3>{programme.title}</h3>
            </HiddenDisplay> */}
        </ProgrammeCard>

        <Transition
          native
          items={on}
          from={{ height: 0, borderRadius: '0px', opacity: 0 }}
          enter={{ height: 'auto', borderRadius: '150px', opacity: 1 }}
          leave={{ height: 0, borderRadius: '0px', opacity: 0 }}
          config={{ tension: 120, friction: 14 }}
        >
          {on =>
            on &&
            (props => (
              <animated.div style={{ ...props }}>
                <ProgrammeCard>
                  <OnDisplay>
                    <time>{programme.time}</time>
                    <h3>{programme.title}</h3>
                  </OnDisplay>
                </ProgrammeCard>
              </animated.div>
            ))
          }
        </Transition>
      </>
    )}
  </Toggle>
)

const OnDisplay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: 1fr 10fr auto;
  }
`

const HiddenDisplay = styled.div`
  display: none;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  transition: all 0.6s ease;
  &.active {
    display: grid;
    /* Above */
    @media (min-width: 600px) {
      grid-template-columns: 1fr 10fr;
    }
  }
`

const ProgrammeCard = styled(Card)`
  max-width: 930px;
  display: grid;
  grid-template-columns: 1fr;
  cursor: pointer;
  transition: all 1s ease;

  svg {
    transform: rotate(0deg);
    /* opacity: 0; */
  }
  p:nth-child(3) {
    background: ${aqua};
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  &.active svg {
    /* grid-template-rows: 1fr 1fr;
      grid-row-gap: 30px; */

    /* opacity: 1; */
    transform: rotate(-180deg);
  }
`

export default ProgrammeDetails
