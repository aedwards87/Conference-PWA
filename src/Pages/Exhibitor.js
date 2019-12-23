import React from 'react'
import { Link } from '@reach/router'
import styled, { css } from 'styled-components'
import { exhibitors } from '../Components/data'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, CardWrapper } from '../Elements/index'
import { aqua, teal, burgundy } from '../Utilities/index'
import { Card, Tag as LevelTag } from '../Elements/index'
import Arrow from '../Images/arrow'


const Exhibitor = (props) => {

  const id = parseInt(props.id) - 1
  // console.log(parseInt(props.id))

  // console.log(Exhibitors[id].name)

  // const getExhibitorData = exhibitors.filter(exhibitorData => (
  //   console.log(exhibitorData.id === props.id)
  // ))

  const getExhibitorData = exhibitors.filter(exhibitor => exhibitor === exhibitors[id])

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
            bgColor={burgundy} 
            color="white" 
            height="250px" 
            aboveHeight="370px"
          />
        )}
      </Spring>
    
      <CardWrapper exhibitorStyle={exhibitorStyle}>
        <Spring 
          native
          from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }} 
          to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
          config={{ mass: 5, tension: 2000, friction: 200, delay: 300 }}
        >
          {props => (    
            <animated.div style={props}>
              <ExhibitorCard>

                <Spring 
                  native
                  // items={Exhibitors[id]}
                  from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }} 
                  to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  config={{ mass: 5, tension: 230, friction: 40, delay: 400 }}
                >
                  {props => ( 
                    <AnimExhibitorImg style={props}>
                      <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
                    </AnimExhibitorImg>
                  )}
                </Spring> 

                <ExhibitorDetails> 
                  {/* Exhibitor name */}
                  <h3>{exhibitors[id].name}</h3>
                  {/* Exhibitor title */}
                  <p id="title">{exhibitors[id].title}</p>
                  {/* Display exhibitors sponsor level */}
                  <LevelTag 
                    position="static"
                    level={
                      (exhibitors[id].level === 'Headline') ? teal :
                      (exhibitors[id].level === 'Gold') ? 'Goldenrod' : 
                      (exhibitors[id].level === 'Silver') ? 'Silver' : null
                    } 
                  >
                    {exhibitors[id].level}
                  </LevelTag>
                  {/* Exhibitor description */}
                  {/* Looks for \n in the text and splits the text into however many arrays, maps over it displays the text, adding a line break after each one but the last */}
                  <p id="description">
                    {exhibitors[id].description.split('\n').map((item, i) => 
                      <React.Fragment key={i}>
                        {item}
                        {(exhibitors[id].description.split('\n').length - 1 === i) ? 
                          null : 
                          <> 
                            <br /> 
                            <br /> 
                          </>
                        }
                      </React.Fragment>
                    )}
                  </p>

                </ExhibitorDetails>
                

                <ExhibitorStandContainer>
                  <h5>Stand</h5>
                  <LineDivider />
                  {getExhibitorData.map(data => (
                    // Needs to be a normal anchor link for hash links
                    <Link 
                      to={`/venue-map?map=exhibitor&stand=${data.stand}`}
                      // href={`/programme?prog${prog.id}-dayone=true#prog${prog.id}`} 
                      key={data.id}
                    >
                      <div>
                        <h4>{data.title}</h4>
                        <div>
                          <p>{data.stand}</p>
                          {/* {console.log(data)} */}
                        </div>
                      </div>
                      <Arrow color={teal} height="13px" aboveHeight="17px" />
                    </Link>
                  ))}
                </ExhibitorStandContainer>

              </ExhibitorCard>
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

const ExhibitorStandContainer = styled.section`
  width: 100%;
  padding-top: 5px;
  h5 {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.6rem;
    color: ${burgundy};
  }
  & a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 17px;
    :last-of-type {
      margin-bottom: -4px;
    }
  }
  > a svg {
    transform: rotate(-90deg);
  };
  && a div h4 {
    color: ${teal};
    font-size: 0.9rem;
  }
  > a div div {
    display: flex;
    align-items: baseline;
    > p, time, span {
      font-size: 0.8rem;
      line-height: 1.25rem;
    }
    span {
      color: ${aqua};
      padding: 0 7px;
    }
  }
`

// Additional styling to add to CardWrapper
const exhibitorStyle = css`
  ${Card} { max-width: 700px; }
  display: grid;
  justify-content: center;
`

const ExhibitorCard = styled(Card)`
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

const ExhibitorDetails = styled.div`
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
    color: ${burgundy}
  }
  > p#description {
    justify-self: start;
    margin-top: 25px;
  }
  > ${LevelTag} {
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
    > ${LevelTag} {
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
    > ${LevelTag} {
      height: 30px;
      width: 120px;
      font-size: 0.8rem;
    }
  }
`

const ExhibitorImg = styled.div`
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
  box-shadow: 0 2px 6px 0 rgba(13,0,76,0.06),
  0 5px 15px 0 rgba(13,0,76,0.2);
  transition: top .6s ease;
  /* transition: top .6s ease; */
  @media (min-width: 450px) {
    top: -97.5px;
    left: calc(50% - 87.5px);
    height: 175px;
    width: 175px;
    border: 7px solid white;
  };
  @media (min-width: 770px) {
    top: -110px;
    left: calc(50% - 100px);
    height: 200px;
    width: 200px;
    border: 8px solid white;
  };
  > img {
    width: 100%;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimExhibitorImg = animated(ExhibitorImg)


export default Exhibitor
