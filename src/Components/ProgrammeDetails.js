import React from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

import { Card, ImgTemp as PersonImg } from '../Elements/index'
import { teal, burgundy, darkBlue } from '../Utilities/index'
import Arrow from '../Images/arrow'
import Toggle from '../Components/Toggle'
import { Link } from '@reach/router'
import { speakers, exhibitors, StreamSessions } from '../Components/index'

const ProgrammeDetails = ({ programme }) => {
  // const hasDetails = programme.description || programme.sponsoredBy || programme.stream || programme.moderator || programme.speakers ? true : false
  // -- OLD METHOD ABOVE --

  // Creates a new array of the programme object, maps over it and then cuts out the first 3 arrays, and checks whether EVERY array is greater less 1 - so checking if every array is empty. I use the '!' to give me the opposite results, so depending whether I get 'True' or 'False' will tell me whether a given session in the programme has any details to warrant a dropdown box.
  // const hasDetails = !Object.values(programme).map(x => x).slice(3).every(x => x < 1) // OTHER METHOD HERE !!!!!!

  // Same as above, but this way deletes id, title and time specifically by name and then checks the data. This way ensures if the positioning of the data changed, the same keys/value is always deleted.
  const filteredProgramme = { ...programme }

  delete filteredProgramme.id
  delete filteredProgramme.title
  delete filteredProgramme.time
  delete filteredProgramme.date
  delete filteredProgramme.room
  // Not very reusuable as yu are hard coding what to delete to get the result
  // IDEA to solve
  // Fields that are required would always be filled, so these are the fields that need deleting, if these fields had a 'isRequired=true' associated with them, you could target and map over that to delete those that are true.

  const hasDetails = !Object.values(filteredProgramme)
    .map(x => x)
    .every(x => x < 1)
  // --------------

  // ------------------------ MOST LIKELY NEED TO DELETE
  // // Activates click function on dropdown box, following the url parameters
  // const urlParams = new URLSearchParams (window.location.search)
  // const getURLParamsDayOne = (urlParams.get(`prog${programme.id}-dayone`) === 'true')
  // const getURLParamsDayTwo = (urlParams.get(`prog${programme.id}-daytwo`) === 'true')
  // // console.log(getURLParams)

  // useEffect(() => {
  //   // Activate click event for id that equals the url params
  //   // TODO: Need to create an IF statement that clicks either dayone or daytwo, then have another IF statement inside to run afterwards to click quick programme to open - DONE?
  //   if (getURLParamsDayOne) {
  //     document.querySelector(`#day-one-button`).click()
  //     document.querySelector(`#prog${programme.id}`).click()
  //   } else if (getURLParamsDayTwo) {
  //     document.querySelector(`#day-two-button`).click()
  //     document.querySelector(`#prog${programme.id}`).click()
  //   }
  // })
  // // URL TO USE
  // // programme?prog2=true#prog2
  // -----------------

  const sponsorID = exhibitors
    .filter(sponsor => programme.sponsoredBy === sponsor.name)
    .map(sponsor => sponsor.id)

  const progSponsor = programme.sponsoredBy.toLowerCase().replace(/\s+/g, '')

  return (
    <Toggle>
      {({ on, toggle }) => (
        <>
          <ProgrammeCard
            onClick={toggle}
            className={
              on && hasDetails ? 'active cursor' : hasDetails ? 'cursor' : null
            }
            id={`prog${programme.id}`}
          >
            <time>{programme.time}</time>

            <h3>{programme.title}</h3>

            <Arrow
              color={teal}
              height="15px"
              aboveHeight="20px"
              className={
                on && hasDetails ? 'active' : hasDetails ? null : 'hide'
              }
            />
          </ProgrammeCard>

          <Transition
            native
            items={on && hasDetails ? on : null}
            key={programme.id}
            from={{
              height: 0,
              opacity: 0,
              transform: 'translate3d(0,-15px,0)'
            }}
            enter={{
              height: 'auto',
              opacity: 1,
              transform: 'translate3d(0,-5px,0)'
            }}
            leave={{
              height: 0,
              opacity: 0,
              transform: 'translate3d(0,-30px,0)',
              pointerEvents: 'none'
            }}
            config={{ mass: 5, tension: 400, friction: 60 }}
          >
            {on =>
              on &&
              (props => (
                <animated.div style={props}>
                  <DropDownCard dropDownShadow>
                    {programme.description && (
                      <p className="description">{programme.description}</p>
                    )}

                    {programme.moderator.length >= 1 && (
                      <ModContainer>
                        <h5>Moderator:</h5>
                        {programme.moderator.map(mod => (
                          <Link
                            to={`/speakers/${speakers
                              .filter(x => x.name === mod)
                              .map(x => x.id)}${mod}}`}
                            className="speaker-profile"
                            key={`${mod}${programme.id}`}
                          >
                            <PersonImg
                              style={{
                                width: '1.5rem',
                                height: '1.5rem',
                                marginRight: 10,
                                border: 'none',
                                paddingTop: 0
                              }}
                            >
                              <img
                                src={require(`../Images/profile-template.jpg`)}
                                alt=""
                              />
                            </PersonImg>
                            <p className="names">{programme.moderator}</p>
                          </Link>
                        ))}
                      </ModContainer>
                    )}

                    {programme.speakers.length >= 1 && (
                      <SpeakersContainer>
                        <h5 style={{ marginTop: 1 }}>
                          {programme.speakers.length > 1
                            ? 'Speakers: '
                            : programme.speakers.length === 1
                            ? 'Speaker: '
                            : null}
                        </h5>
                        <SpeakerProfileContainer>
                          {programme.speakers.map(speaker => (
                            <Link
                              to={`/speakers/${speakers
                                .filter(sp => sp.name === speaker)
                                .map(sp => sp.id)}${speaker}}`}
                              className="speaker-profile"
                              key={`${speaker}${programme.id}`}
                            >
                              <PersonImg
                                style={{
                                  width: '1.5rem',
                                  height: '1.5rem',
                                  marginRight: 10,
                                  marginTop: -2,
                                  border: 'none',
                                  paddingTop: 0
                                }}
                              >
                                <img
                                  src={require(`../Images/profile-template.jpg`)}
                                  alt=""
                                />
                              </PersonImg>

                              <p className="names">{speaker}</p>
                            </Link>
                          ))}
                        </SpeakerProfileContainer>
                      </SpeakersContainer>
                    )}

                    {programme.room && (
                      <RoomContainer>
                        <h5>Room: </h5>
                        <Link to="/venue-map?Conference Map=true#map1">
                          <p>{programme.room}</p>
                        </Link>
                      </RoomContainer>
                    )}

                    {programme.sponsoredBy && (
                      <SponsorContainer style={{ alignItems: 'center' }}>
                        <h5>Sponsored by: </h5>
                        <Link to={`/exhibitors/${sponsorID}${progSponsor}`}>
                          <Logo
                            src={require(`../Images/sponsorLogos/${progSponsor}.png`)}
                            alt={`${programme.sponsoredBy} logo`}
                          />
                        </Link>
                      </SponsorContainer>
                    )}

                    {programme.stream && (
                      <StreamContainer>
                        {programme.stream.map(streamData => (
                          <StreamSessions
                            key={streamData.id}
                            programme={programme}
                            streamData={streamData}
                            theme={streamData.category}
                          />
                        ))}
                      </StreamContainer>
                    )}
                  </DropDownCard>
                </animated.div>
              ))
            }
          </Transition>
        </>
      )}
    </Toggle>
  )
}

const Logo = styled.img`
  height: 1.2rem;
  padding-top: 2px;
`

const ModContainer = styled.div`
  display: grid;
  grid-template-columns: 105px 10fr;
  align-items: center;
  > .speaker-profile {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`
const SpeakersContainer = styled.div`
  display: grid;
  grid-template-columns: 105px 10fr;
`
const RoomContainer = styled.div`
  display: grid;
  align-items: baseline;
  grid-template-columns: 105px 10fr;
`
const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: 105px 1fr;
  align-items: baseline;
`
const StreamContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`

const SpeakerProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -13px;
  > .speaker-profile {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    margin: 0 10px 0 0;
    margin-top: 10px;
    > p {
      margin-right: 20px;
    }
  }
`

const ProgrammeCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  display: grid;
  cursor: auto;
  max-width: 930px;
  transition: all 0.3s ease;
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: 1fr 10fr auto;
  }
  svg {
    transition: all 0.5s ease;
    /* opacity: 0; */
    transform: rotate(0deg);
  }
  svg.active {
    /* opacity: 1 */
    transform: rotate(-180deg);
  }
  svg.hide {
    visibility: hidden;
  }
  &.active {
    border-radius: 20px 20px 0 0;
    @media (min-width: 600px) {
      border-radius: 20px 20px 0 0;
    }
  }
  &.cursor {
    cursor: pointer;
  }
`

const DropDownCard = styled(ProgrammeCard)`
  grid-template-columns: 1fr;
  padding-top: 15px;
  border-radius: 0 0 20px 20px;
  grid-gap: 25px;
  h5 {
    color: ${burgundy};
    font-size: 0.75rem;
    padding-right: 10px;
    font-weight: 500;
  }
  p.names {
    color: ${teal};
    font-weight: 600;
  }
  p.description {
    color: ${darkBlue};
    margin-bottom: 10px;
    @media (min-width: 600px) {
      margin-bottom: 15px;
    }
  }
  > p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
  @media (min-width: 450px) {
    > p {
      font-size: 0.95rem;
      line-height: 1.35rem;
    }
  }
  @media (min-width: 770px) {
    > p {
      font-size: 1rem;
      line-height: 1.45rem;
    }
  }
  @media (min-width: 600px) {
    padding: 15px 4.4% 4.4%;
    border-radius: 0 0 20px 20px;
    grid-template-columns: 1fr;
    grid-gap: 25px;
  }
`

export default ProgrammeDetails
