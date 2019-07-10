import React from "react"
import styled from 'styled-components'
import {useTrail, animated} from 'react-spring'
import {Trail} from 'react-spring/renderprops'


import Card from '../Components/Card'

import CurvedBG from '../Elements/CurvedBG'
import { teal } from '../Utilities/index'


const programmes = [
  {
    id: 1,
    title: 'Breakfast',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address',
    time: '09.10'
  },
  {
    id: 1,
    title: 'Breakfast2',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction2',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address2',
    time: '09.10'
  },
  {
    id: 1,
    title: 'Breakfast3',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction3',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address3',
    time: '09.10'
  },
  {
    id: 1,
    title: 'Breakfast3',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction3',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address3',
    time: '09.10'
  },
]

const items = [1,2,3,4,5,6,7,8,9,10,11,12]
// const config = { mass: 5, tension: 2000, friction: 200 }

const Programme = () => {

  // const trail = useTrail(programmes.length, {
  //   key: items,
  //   config,
  //   from: {opacity: 0},
  //   to: {opacity: 1},
  // })

  return (
    <Wrapper>
      <CurvedBG bgColor={teal} color="white">
        <Head>
          <h1>Programme</h1>
          <p>
            This year’s programme offers six breakout streams exploring the latest developments in governance and the future of the board. With an unparalleled choice of over 40 seminars you can tailor the conference to meet your needs and get the best experience of two packed-days.
          </p>
        </Head>
      </CurvedBG>  



        {/* <CardWrapper>

              {trail.map((props, i) => (
                <animated.div style={props}>
                  <Card
                    style={props}
                    programme={programmes[i]}
                  />
                </animated.div>
              ))}

        </CardWrapper> */}

        <CardWrapper >
     
          <Trail 
            items={items} 
            // keys={item => item.key} 
            from={{opacity: 0}} 
            to={{opacity: 1}}
            config={{mass: 5, tension: 2000, friction: 200}}
          >
            {item => props => (    
              <animated.div style={props}>
                <Card
                  style={props}
                  programme={programmes[item]}
                />
              </animated.div>
            )}
          </Trail>  

        </CardWrapper>
  



    </Wrapper> 
  )
}
  

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 70px
`

const Head = styled.header`
  color: white;
  padding: 0;
  padding-bottom: 100px;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    line-height: 4rem;
    font-weight: 200;
  };
  p {
    margin: 50px 0;
    padding: 0;
    font-weight: 350;
    width: 100%;
    line-height: 1.45rem;
    font-size: 1rem;
  };
  strong {
    font-weight: 500;
  }
  @media (max-width: 1000px) {
    max-width: 640px;
  }
  /* @media (min-width: 450px) {
    padding-top: 50px;
  } */
  @media (max-width: 450px) {
    padding-top: calc(${props => props.padTop} - 25px);

    h1 {
      font-size: 13vw;
    }
    p {
      line-height: 1.3rem;
      font-size: 0.9rem;
      margin: 40px 0;
    }
  }
  @media (min-width: 600px) {
    p {
        margin: 60px 0 60px;
    }
    span {
        display: none;
    }
  }
  @media (min-width: 1000px) {
    p {
        margin: 70px 0 70px;
    }
  }
  @media (max-width: 320px) { 
      h1 {
        font-size: 7vmax;
        line-height: 2.7rem;
      }
  }
`

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 13px;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  margin-top: -90px;
  padding: 0 35px;
  @media (max-width: 330px) {
    padding: 0 15px;
  }
  > div {
    width: 100%;
    display: grid;
    justify-items: center;
  }
`

export default Programme
