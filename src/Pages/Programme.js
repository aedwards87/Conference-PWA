import React from "react"
import styled from 'styled-components'

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
    time: '09.05'
  },
]


const Programme = () => (
  <>
    <CurvedBG bgColor={teal} color="white">
      <Head padBot="65px" padTop="70px">
        <h1>Programme</h1>
        <p>
          This year’s programme offers six breakout streams exploring the latest developments in governance and the future of the board. With an unparalleled choice of over 40 seminars you can tailor the conference to meet your needs and get the best experience of two packed-days.
        </p>
      </Head>
    </CurvedBG>  
    
    <CardWrapper>
      {programmes.map(programme => (
        <Card
          key={programme.id}
          programme={programme}
        />
      ))}
    </CardWrapper>

  </>
)


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
`

const Head = styled.header`
  color: white;
  padding: 0;
  padding-top: ${props => props.padTop};
  padding-bottom: ${props => props.padBot};
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
    line-height: 1.5rem;
    font-size: 1rem;
  };
  strong {
    font-weight: 500;
  }
  @media (max-width: 1000px) {
    max-width: 640px;
  }
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
`


export default Programme
