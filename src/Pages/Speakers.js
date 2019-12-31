import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Spring, Trail, animated } from 'react-spring/renderprops'

import { CurvedBG, SearchBox, CardWrapper } from '../Elements/index'
import { aqua, teal, grey } from '../Utilities/index'
import { speakers, SpeakerDetails } from '../Components/index'

const Speakers = () => {
  const [value, setValue] = useState('')
  // console.log(speakers.sort((a, b) => (a.keynote > b.keynote) ? -1 : 1 ))
  // console.log(speakers.sort((a, b) => (a.name < b.name) ? -1 : 1 ))
  // const SortByName = speakers.sort((a, b) => (a.name < b.name) ? -1 : 1 )
  // .sort((a, b) => (a.keynote > b.keynote) ? -1 : 1 )
  // const SortByKeynote = speakers.sort((a, b) => (a.keynote > b.keynote) ? -1 : 1 )

  let filteredSpeakers = speakers.filter(
    speaker => speaker.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
  filteredSpeakers
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .sort((a, b) => (a.keynote > b.keynote ? -1 : 1))

  console.log(filteredSpeakers)

  return (
    <>
      <Spring
        from={{ transform: 'translate3d(0,-100px,0)', opacity: 0 }}
        to={{ transform: 'translate3d(0,-35px,0)', opacity: 1 }}
        config={{ tension: 100, friction: 13 }}
      >
        {props => (
          <AnimCurvedBG style={props} bgColor={aqua} color="white">
            <Spring
              native
              from={{ opacity: 0, transform: 'translate3d(0,10px,0)' }}
              to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              config={{ delay: 300, duration: 500 }}
            >
              {props => (
                <AnimHead style={props}>
                  <h1>Speakers</h1>
                  <p>
                    More than 95 speakers including keynote line-up has been
                    confirmed. This year’s Annual Conference features
                    presentations from{' '}
                    <strong>
                      governance leaders, company secretaries, board members and
                      executive directors, regulators, innovators, disruptors,
                      influencers, governance scholars.
                    </strong>
                  </p>
                  <SearchBox
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Find a speaker"
                    phColor={grey}
                    color={teal}
                    colorSVG={aqua}
                    height="1.2rem"
                  />
                  {/* {console.log(filteredSpeakers)} */}
                </AnimHead>
              )}
            </Spring>
          </AnimCurvedBG>
        )}
      </Spring>

      <CardWrapper speakersStyle={speakersStyle}>
        {/* {filteredSpeakers.map(speaker => {
          return ( */}
        <Trail
          native
          items={filteredSpeakers.map(speaker => speaker.id - 1)}
          key={filteredSpeakers.map(speaker => speaker.id - 1)}
          from={{ opacity: 0, transform: 'translate3d(20px,40px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {item => props => (
            <animated.div style={props}>
              <SpeakerDetails
                style={props}
                speaker={speakers[item]}
                key={speakers[item].id}
              />
            </animated.div>
          )}
        </Trail>
        {/* )})
      } */}
      </CardWrapper>
    </>
  )
}

const Head = styled.header`
  ${CardWrapper}.space {
    margin-bottom: 100px;
  }
  color: white;
  padding: 40px 0 60px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  transition: max-width 0.6s ease;
  p {
    text-shadow: 0px 0.5px 0 rgba(255, 255, 255, 0.2);
  }

  /* Above */
  @media (min-width: 450px) {
    padding: 140px 0 80px 0;
  }
  /* @media (min-width: 1000px) {
    padding: 190px 0 115px 0;
  }; */

  /* Below */
  @media (max-width: 900px) {
    max-width: 625px;
  }
`

const speakersStyle = css`
  > div {
    display: grid;
    justify-items: center;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Speakers
