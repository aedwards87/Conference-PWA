import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Spring, Trail, Transition, animated } from 'react-spring/renderprops'

import { exhibitors } from '../Components/index'
import { CurvedBG, Card, CardWrapper } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'
import { LocationSVG, VenueMapSVG, ExhibitionMapSVG } from '../Images/index'
import Toggle from '../Components/Toggle'

const data = [
  {
    id: 1,
    name: 'Conference Map',
    imageURI: 'venue-map.png'
  },
  {
    id: 2,
    name: 'Exhibitor Map',
    imageURI: 'exhibition-map.png'
  }
]

const Map = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const getURLParams =
    urlParams.get('Conference Map') === 'true'
      ? 'map1'
      : urlParams.get('Exhibitor Map') === 'true'
        ? 'map2'
        : null
  // const getURLParams = (urlParams.get(`${findURL}`) === 'true')
  console.log(getURLParams)

  useEffect(() => {
    // Activate click event for id that equals the url params
    if (getURLParams) {
      document.querySelector(`#${getURLParams}`).click()
    }
  })

  const exhibitA = [...exhibitors]
  const exhibitB = exhibitA.splice(Math.ceil(exhibitors.length / 2))

  // console.log(exhibitors)

  // while(a.length > b.length){
  //   b.push(a.splice(a.length-1)[0]);
  // }
  console.log(exhibitA)
  console.log(exhibitB)

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
                  <h1>Maps</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et iaculis lectus. Mauris turpis metus, iaculis
                    sit amet purus maximus, porta tristique tortor. Aenean
                    imperdiet at diam tincidunt lacinia. Duis id turpis eu diam
                    feugiat fringilla eget nec nunc. Praesent dapibus
                    consectetur tellus, et luctus orci posuere.
                  </p>
                </AnimHead>
              )}
            </Spring>
          </AnimCurvedBG>
        )}
      </Spring>
      {/* <VenueMapSVG /> */}
      <CardWrapper>
        <Trail
          native
          items={data.map(data => data.id - 1)}
          key={data.map(data => data.id)}
          from={{ opacity: 0, transform: 'translate3d(20px,40px,0)' }}
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {item => props => (
            <animated.div style={props}>
              <Toggle>
                {({ on, toggle }) => (
                  <>
                    <MapsCard
                      onClick={toggle}
                      style={props}
                      className={on ? 'active' : null}
                      key={data[item].name}
                      id={`map${data[item].id}`}
                    >
                      <LocationSVG height="1.4rem" color={aqua} />
                      <div>
                        <h3>{data[item].name}</h3>
                      </div>
                      <Arrow
                        color={aqua}
                        height="15px"
                        aboveHeight="20px"
                        className={on ? 'active' : null}
                      />
                    </MapsCard>

                    <Transition
                      native
                      items={on}
                      key={data[item].id}
                      from={{
                        height: 0,
                        opacity: 0,
                        transform: 'translate3d(0,-15px,0)'
                      }}
                      enter={{
                        height: 'auto',
                        opacity: 1,
                        zIndex: 9999999,
                        transform: 'translate3d(0,-5px,0)'
                      }}
                      leave={{
                        height: 0,
                        opacity: 0,
                        marginTop: '0',
                        transform: 'translate3d(0,-30px,0)'
                      }}
                      config={{ mass: 5, tension: 400, friction: 60  }}
                    >
                      {/* native
                      items={on}
                      key={data[item].id}
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
                    > */}

                      {on =>
                        on &&
                        (props => (
                          <animated.div style={props}>
                            <DropDownCard dropDownShadow>
                              <MapImg>
                                {data[item].name === 'Conference Map' ?
                                  <VenueMapSVG />
                                  :
                                  <ExhibitionMapSVG />
                                }
                              </MapImg>

                              {/* Exhibitors list */}
                              {data[item].name === 'Exhibitor Map' && (
                                <ExhibStands>
                                  <div>
                                    <div>
                                      <h3>Exhibitor name</h3>
                                      {exhibitA.map(data => (
                                        <p key={data.id}>{data.name}</p>
                                      ))}
                                    </div>
                                    <div>
                                      <h3>Stand</h3>
                                      {exhibitA.map(data => (
                                        <p key={data.id}>{data.stand}</p>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <h3 className="mobileVanish">
                                        Exhibitor name
                                      </h3>
                                      {exhibitB.map(data => (
                                        <p key={data.id}>{data.name}</p>
                                      ))}
                                    </div>
                                    <div>
                                      <h3 className="mobileVanish">Stand</h3>
                                      {exhibitB.map(data => (
                                        <p key={data.id}>{data.stand}</p>
                                      ))}
                                    </div>
                                  </div>
                                </ExhibStands>
                              )}
                            </DropDownCard>
                          </animated.div>
                        ))
                      }
                    </Transition>
                  </>
                )}
              </Toggle>
            </animated.div>
          )}
        </Trail>
      </CardWrapper>
    </>
  )
}

const MapImg = styled.div`
  /* width: 100%; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  > svg {
    max-width: 700px
  }
`

const MapsCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  max-width: 930px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  z-index: 0;
  > svg {
    margin: 0 auto;
  }
  p {
    margin: 5px 0 0;
  }
  & p b {
    color: ${teal};
    font-weight: 500;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 13.5fr auto;
  }
  @media (max-width: 600px) {
    p { margin: 7px 0 0; }
  }
  @media (max-width: 350px) {
    h3 {
      font-size: 4.3vw;
    }
  }
  @media (max-width: 300px) {
    h3 {
      font-size: 12px;
    }
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
  &.active {
    border-radius: 20px 20px 0 0;
    @media (min-width: 600px) {
      border-radius: 20px 20px 0 0;
    }
  }
`

const Head = styled.header`
  padding: 40px 0 70px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  transition: max-width 0.6s ease;
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

const DropDownCard = styled(MapsCard)`
  cursor: auto;
  && {
    display: block;
    padding-top: 10px;
  }
  border-radius: 0 0 20px 20px;
  @media (min-width: 600px) {
    border-radius: 0 0 20px 20px;
  }
`

const ExhibStands = styled.section`
  margin: 30px auto 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  max-width: 700px;
  > div {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
  }
  > div > div:nth-child(2) {
    text-align: right;
  }
  & h3 {
    margin-bottom: 15px
  }
  .mobileVanish {
    @media (max-width: 650px) {
      display: none;
    }
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin: 20px auto 0px;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Map
