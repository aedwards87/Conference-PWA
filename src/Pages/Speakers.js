import React from "react"
import styled from 'styled-components'

import Card from '../Components/Card'

import CurvedBG from '../Elements/CurvedBG'
import { aqua } from '../Utilities/index'


const speakers = [
  {
    id: 1,
    name: 'Tom Wilson',
    title: 'Apple',
    bio: 'blah blah blah'
  },
  {
    id: 2,
    name: 'Natalie Watts',
    title: 'Google',
    bio: 'blah blah blah'
  },
  {
    id: 3,
    name: 'John Patterson',
    title: 'Microsoft',
    bio: 'blah blah blah'
  },
  {
    id: 4,
    name: 'Tom Wilson',
    title: 'Apple',
    bio: 'blah blah blah'
  },
  {
    id: 5,
    name: 'Natalie Watts',
    title: 'Google',
    bio: 'blah blah blah'
  },
  {
    id: 6,
    name: 'John Patterson',
    title: 'Microsoft',
    bio: 'blah blah blah'
  },
]


const Speakers = () => (
  <>
    <CurvedBG bgColor={aqua} color="white">
      <Head>
        <h1>Keynote<span><br/></span> Speakers</h1>
        <p>
          More than 95 speakers including keynote line-up has been confirmed. This year’s Annual Conference features presentations from <strong>governance leaders, company secretaries, board members and executive directors, regulators, innovators, disruptors, influencers, governance scholars,</strong> whose diverse experiences will provide practical insights and actionable ideas for preparing your board for the future.
        </p>
      </Head>
    </CurvedBG>  
    
    <CardWrapper>
      {speakers.map(speaker => (
        <Card
          key={speaker.id}
          speaker={speaker}
        />
      ))}
    </CardWrapper>

  </>
)




const Head = styled.header`
  color: white;
  padding: 0;
  padding-top: 70px;
  padding-bottom: 85px;
  top: 0;
  margin: 0 auto;
  max-width: 720px;
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
    max-width: 625px;
  }
  @media (min-width: 450px) {
    padding-top: 130px;
  }
  @media (max-width: 450px) {
    padding-top: calc(${props => props.padTop} - 25px);

    h1 {
      font-size: 13vw;
      line-height: 13.5vw
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
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: -110px auto 0 auto;
  padding: 0 35px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 3vw;
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 2vw;
  }
  @media (max-width: 330px) {
    padding: 0 15px;
  }
`

export default Speakers
