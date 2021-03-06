import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'
import { speakers, programmeDayOne, programmeDayTwo } from '../Components/data'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, CardWrapper } from '../Elements/index'
import { aqua, teal, burgundy } from '../Utilities/index'
import { Card, Tag } from '../Elements/index'
import Arrow from '../Images/arrow'
import { SpeakerData } from '../Helpers/index'

const Speaker = props => {
  const id = parseInt(props.id) - 1
  // console.log(props)
  // console.log(speakers[id].name)

  const dayOneSpeakerProgrammeData = SpeakerData(programmeDayOne, speakers, id)
  const dayTwoSpeakerProgrammeData = SpeakerData(programmeDayTwo, speakers, id)

  // const xx = getSpeakerStreamData.map(prog =>
  //   programmeDayOne.find(p => p.stream
  //     .find(stream => stream.title === prog.title
  //     )))
  // .filter(x => x)
  // .map(x => x.id)
  // const speakerDataaa = [...getSpeakerData.concat(xx)]

  // console.log(x)

  //  console.log(speakerDataaa)

  return (
    <>
      <Spring
        from={{ transform: 'translate3d(0,-100px,0)', opacity: 0 }}
        to={{ transform: 'translate3d(0,-35px,0)', opacity: 1 }}
        config={{ tension: 100, friction: 13 }}
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

      <CardWrapper speakerStyle={speakerStyle}>
        <Spring
          native
          from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {props => (
            <animated.div style={props}>
              <SpeakerCard>
                <Spring
                  native
                  // items={speakers[id]}
                  from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  config={{ mass: 5, tension: 230, friction: 40, delay: 400 }}
                >
                  {props => (
                    <AnimSpeakerImg style={props}>
                      <img
                        src={require(`../Images/profile-template.jpg`)}
                        alt=""
                      />
                    </AnimSpeakerImg>
                  )}
                </Spring>

                <SpeakerDetails>
                  <h3>{speakers[id].name}</h3>
                  <p id="title">{speakers[id].title}</p>
                  <p>{speakers[id].company}</p>

                  {/* If keynote speaker display keynote tag */}
                  {speakers[id].keynote === 'true' && (
                    <Tag bgColor={teal} position="static">
                      Keynote
                    </Tag>
                  )}

                  {/* Speaker description */}
                  <p id="description">
                    {speakers[id].description.split('\n').map((item, i) => (
                      <React.Fragment key={i}>
                        {item}
                        {speakers[id].description.split('\n').length - 1 ===
                          i ? null : (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                      </React.Fragment>
                    ))}
                  </p>
                </SpeakerDetails>

                <SpeakerSessionsContainer>
                  <h5>Sessions</h5>
                  <LineDivider />

                  {/* Day one */}
                  {dayOneSpeakerProgrammeData.map(prog => (
                    <Link
                      to={
                        prog.streamCategory
                          ? `/programme?day=one&key=prog${programmeDayOne.find(p => p.stream
                            .find(stream => stream.title === prog.title)).id}&stream=prog${programmeDayOne.find(p => p.stream
                              .find(stream => stream.title === prog.title)).id}${prog.id}`
                          : `/programme?day=one&key=prog${prog.id}`
                      }
                      // if stream ? true - then add stream url extension   &stream=stream${prog.id}
                      key={`${prog.id}`}
                    >
                      <div>
                        <h4>{prog.title}</h4>
                        <div>
                          <p>Jul 10 - Day 1</p>
                          <span>|</span>
                          <time>{prog.time}</time>
                          <span>|</span>
                          <p>Room: {prog.room}</p>
                          {prog.streamCategory ?
                            <>
                              <span>|</span>
                              {console.log(dayOneSpeakerProgrammeData)
                              }
                              <p className="stream">Stream: {prog.streamCategory}</p>
                            </>
                            : null
                          }
                        </div>

                      </div>
                      <Arrow color={teal} height="13px" aboveHeight="17px" />
                    </Link>
                  ))}

                  {/* Day two */}
                  {dayTwoSpeakerProgrammeData.map(prog => (
                    <Link
                      to={`/programme?day=two&key=prog${prog.id}`}
                      key={prog.id}
                    >
                      <div>
                        <h4>{prog.title}</h4>
                        <div>
                          <div>
                            <p>Jul 12 - Day 2</p>
                            <span>|</span>
                            <time>{prog.time}</time>
                            <span>|</span>
                            <p>Room: {prog.room}</p>
                          </div>
                        </div>
                      </div>
                      <Arrow color={teal} height="13px" aboveHeight="17px" />
                    </Link>
                  ))}
                </SpeakerSessionsContainer>
              </SpeakerCard>
            </animated.div>
          )}
        </Spring>
      </CardWrapper>
    </>
  )
}

const LineDivider = styled.hr`
  height: 5px;
  width: 100%;
  background: ${aqua}20;
  border: 0;
  margin: 12px 0 20px;
`

const SpeakerSessionsContainer = styled.section`
  width: 100%;
  padding-top: 5px;
  h4 {
    width: 85%
  }
  h5 {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.6rem;
    color: ${burgundy};
  }
  && h6 {
    padding-bottom: 0.2rem;
  }
  & a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
    :last-of-type {
      margin-bottom: -4px;
    }
  }
  > a svg {
    transform: rotate(-90deg);
  }
  && a div h4 {
    color: ${teal};
    font-size: 0.9rem;
    padding-bottom: 2px;
  }
  > a div div {
    display: flex;
    grid-template-columns: repeat(4, auto) 1fr;
    align-items: baseline;
    flex-wrap: wrap;
    > p,
    time,
    span {
      font-size: 0.7rem;
      line-height: 0.95rem;
    }
    span {
      color: ${aqua};
      padding: 0 7px;
    }
    .stream {
      /* font-weight: 500 */
    }
  }
`

// Additional styling to add to CardWrapper
const speakerStyle = css`
  ${Card} {
    max-width: 700px;
  }
  display: grid;
  justify-content: center;
`

const SpeakerCard = styled(Card)`
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: start;
  padding: 90px 30px 30px;
  @media (min-width: 450px) {
    padding: 108.5px 40px 40px;
  }
  @media (min-width: 770px) {
    padding: 120px 50px 50px;
  }
`

const SpeakerDetails = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  > h3 {
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin-bottom: 10px;
  }
  > p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
  > p#title {
    font-weight: 600;
    color: ${burgundy};
  }
  > p#description {
    justify-self: start;
    margin-top: 25px;
  }
  > ${Tag} {
    margin-top: 10px;
  }
  /* Above */
  @media (min-width: 450px) {
    > h3 {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
    > p {
      font-size: 0.95rem;
      line-height: 1.35rem;
    }
    > p#description {
      margin-top: 30px;
    }
    > ${Tag} {
      height: 25px;
      width: 110px;
      font-size: 0.7rem;
    }
  }
  @media (min-width: 770px) {
    > h3 {
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
    > p {
      font-size: 1rem;
      line-height: 1.45rem;
    }
    > p#description {
      margin-top: 30px;
    }
    > ${Tag} {
      height: 30px;
      width: 120px;
      font-size: 0.8rem;
    }
  }
`

const SpeakerImg = styled.div`
  position: absolute;
  top: -85px;
  left: calc(50% - 75px);
  height: 150px;
  width: 150px;
  border-radius: 100%;
  border: 6px solid white;
  overflow: hidden;
  display: grid;
  place-content: center;
  background: white;
  padding-top: 25px;
  box-shadow: 0 2px 6px 0 rgba(13, 0, 76, 0.06),
    0 5px 15px 0 rgba(13, 0, 76, 0.2);
  transition: top 0.6s ease;
  /* transition: top .6s ease; */
  @media (min-width: 450px) {
    top: -97.5px;
    left: calc(50% - 87.5px);
    height: 175px;
    width: 175px;
    border: 7px solid white;
  }
  @media (min-width: 770px) {
    top: -110px;
    left: calc(50% - 100px);
    height: 200px;
    width: 200px;
    border: 8px solid white;
  }
  > img {
    width: 100%;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimSpeakerImg = animated(SpeakerImg)

export default Speaker
