import React from 'react'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'

import { Card, ImgTemp as PersonImg } from '../Elements/index'
import Arrow from '../Images/arrow'
import Toggle from '../Components/Toggle'
import { Link } from '@reach/router'
import { speakers } from '../Components/index'
import { StreamColor, FilteredProgramme, FindSponsor } from '../Helpers/index'

const StreamSessions = ({ programme, streamData }) => {

  const filteredProgramme = FilteredProgramme({ programme })
  const streamColor = StreamColor({ streamData })
  const sponsor = FindSponsor(streamData)

  const hasDetails = !Object
    .values(filteredProgramme)
    .map(x => x)
    .every(x => x < 1)

  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <StreamCard
            onClick={toggle}
            className={
              on && hasDetails ? 'active cursor' : hasDetails ? 'cursor' : null
            }
            id={`prog${programme.id}${streamData.id}`}
            style={{ boxShadow: 'none' }}
            stream={streamColor}
          >
            <h3>{streamData.title}</h3>

            <Arrow
              color={'white'}
              height="13.5px"
              aboveHeight="17px"
              className={
                on && hasDetails ? 'active' : hasDetails ? null : 'hide'
              }
            />
          </StreamCard>

          <Transition
            native
            items={on && hasDetails ? on : null}
            key={streamData.id}
            from={{ height: 0, opacity: 0 }}
            enter={{ height: 'auto', opacity: 1 }}
            leave={{ height: 0, opacity: 0, pointerEvents: 'none' }}
            config={{ mass: 5, tension: 400, friction: 60 }}
          >
            {on =>
              on &&
              (props => (
                <animated.div style={props}>
                  <DropDownCard
                    dropDownShadow
                    className={
                      on && hasDetails
                        ? 'active cursor'
                        : hasDetails
                          ? 'cursor'
                          : null
                    }
                    style={{ boxShadow: 'none' }}
                    stream={streamColor}
                  >
                    {streamData.description && (
                      <p className="description">{streamData.description}</p>
                    )}

                    {streamData.moderator.length >= 1 && (
                      <ModContainer>
                        <h5>Moderator:</h5>
                        {streamData.moderator.map(mod => (
                          <Link
                            to={`/speakers/${speakers
                              .filter(x => x.name === mod)
                              .map(x => x.id)}${mod}}`}
                            className="speaker-profile"
                            key={`${mod}${streamData.id}`}
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
                            <p className="names">{streamData.moderator}</p>
                          </Link>
                        ))}
                      </ModContainer>
                    )}

                    {streamData.speakers.length >= 1 && (
                      <SpeakersContainer>
                        <h5>
                          {streamData.speakers.length > 1
                            ? 'Speakers: '
                            : streamData.speakers.length === 1
                              ? 'Speaker: '
                              : null}
                        </h5>

                        <SpeakerProfileContainer>
                          {streamData.speakers.map(speaker => (
                            <Link
                              to={`/speakers/${speakers
                                .filter(sp => sp.name === speaker)
                                .map(sp => sp.id)}${speaker}}`}
                              className="speaker-profile"
                              key={`${speaker}${streamData.id}`}
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
                              {/* {console.log(speakers.filter(x => x.name === speaker).map(x => x))} */}

                              <p className="names">{speaker}</p>
                            </Link>
                          ))}
                        </SpeakerProfileContainer>
                      </SpeakersContainer>
                    )}

                    {streamData.room && (
                      <RoomContainer>
                        <h5>Room: </h5>
                        <Link to="/venue-map?Conference Map=true#map1">
                          <p>{streamData.room}</p>
                        </Link>
                      </RoomContainer>
                    )}

                    {streamData.sponsoredBy && (
                      <SponsorContainer>
                        <h5>Sponsored by: </h5>
                        <Link to={`/exhibitors/${sponsor.sponsorID}${sponsor.sponsor}`}>
                          <Logo
                            src={require(`../Images/sponsorLogos/${streamData.sponsoredBy.toLowerCase().replace(/\s+/g, '')}-white.png`)}
                            alt={`${streamData.sponsoredBy} logo`}

                          />
                        </Link>
                      </SponsorContainer>
                    )}
                  </DropDownCard>
                </animated.div>
              ))
            }
          </Transition>
        </div>
      )}
    </Toggle>
  )
}

const Logo = styled.img`
  height: 12px;
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
  grid-template-columns: 105px 1fr;
`
const RoomContainer = styled(SpeakersContainer)`
  align-items: baseline;
`
const SponsorContainer = styled(SpeakersContainer)`
  align-items: baseline;
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
    margin: 10px 10px 0 0;
    > p {
      margin-right: 20px;
    }
  }
`

const StreamCard = styled(Card)`
  grid-template-columns: 1fr auto;
  display: grid;
  cursor: auto;
  max-width: 930px;
  transition: all 0.3s ease;
  border-radius: 10px;
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: 1fr auto;
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
    border-radius: 10px 10px 0 0;
    @media (min-width: 600px) {
      border-radius: 10px 10px 0 0;
    }
  }
  &.cursor {
    cursor: pointer;
  }
`

const DropDownCard = styled(StreamCard)`
  grid-template-columns: 1fr;
  padding-top: 15px;
  grid-gap: 25px;
  h5 {
    font-size: 0.75rem;
    padding-right: 10px;
    font-weight: 500;
  }
  p.names {
    font-weight: 600;
  }
  p.description {
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
    padding-top: 15px;
    grid-template-columns: 1fr;
    grid-gap: 25px;
  }
  &.active {
    border-radius: 0 0 10px 10px;
    @media (min-width: 600px) {
      border-radius: 0 0 10px 10px;
    }
  }
`

export default StreamSessions
