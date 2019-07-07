import React from 'react'
import styled from 'styled-components'

import { aqua, teal, burgundy, darkBlue } from '../Utilities/index'


const Card = ({ speaker, programme }) => (
  <>
    {speaker && (
        <SpeakerCard>
          <SpeakerImg />
          <div>
            <h3>{speaker.name}</h3>
            <p>{speaker.title}</p>
            <p>{speaker.bio}</p>
          </div>
        </SpeakerCard>
      )
    }
    {programme && (
        <ProgrammeCard>
          <time>{programme.time}</time>
          <h3>{programme.title}</h3>
          <p> </p>
        </ProgrammeCard>
      )
    }
  </>
  
)

const SpeakerCard = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    box-shadow: 0 6px 13px 0 rgba(0,0,0,0.1), 0 0px 25px 0 rgba(0,0,0,0.03);
    border-radius: 20px;
    margin: 0;
    padding: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto 5fr;
    grid-gap: 20px;
    overflow: hidden;
    z-index: 999;
    p:nth-child(2) {
        font-size: 0.75rem;
        font-weight: 600;
        color: ${burgundy};
        padding: 0;
        margin: 7px 0 0;
        line-height: 1.1rem;
    }
    p {
        font-size: 0.75rem;
        padding: 0;
        margin: 0;
        line-height: 1.1rem;
    }
    
    h3 {
        font-size: 1rem;
        color: ${teal};
        margin: 0;
        padding: 0;
        line-height: 1.1rem;
        font-weight: 700;
    }
    @media (min-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows-rows: 1fr 1fr;
      height: 100%;
      justify-items: center;
      text-align: center;
      max-width: 300px;
      h3 {
        font-size: 1.2rem;
        color: ${teal};
        margin: 0;
        padding: 0;
        line-height: 1.3rem;
        font-weight: 700;
      }
      p:nth-child(2) {
        margin: 10px 0 0;
      }
    }
`

const SpeakerImg = styled.div`
    height: 4rem;
    width: 4rem;
    background: ${aqua};
    /* border: 6px solid ${aqua}; */
    /* box-shadow: 0 0px 13px 0 rgba(0,0,0,0.1); */
    border-radius: 100%;
    @media (min-width: 600px) {
        height: 110px;
        width: 110px;
    }
`


const ProgrammeCard = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    box-shadow: 0 6px 13px 0 rgba(0,0,0,0.1), 0 0px 25px 0 rgba(0,0,0,0.03);
    border-radius: 20px;
    margin: 0;
    padding: 20px;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template-columns: 10vw 5fr auto;
    grid-gap: 20px;
    max-width: 900px;
    overflow: hidden;
    time {
      color: ${darkBlue};
      font-size: 0.9rem;
      padding: 0;
      margin: 2.5px 0 0;
      text-align: center;
    }
    h3 {
      font-size: 1rem;
      color: ${teal};
      margin: 0;
      padding: 0;
      line-height: 1.1rem;
      font-weight: 700;
    }
    p:nth-child(3) {
      background: ${aqua};
      border-radius: 100%;
      width: 30px;
      height: 30px;
    }
    @media (min-width: 600px) {
      grid-template-columns: 7vw 5fr auto;
      h3 {
        font-size: 1.1rem;
        color: ${teal};
        line-height: 1.2rem;
      }
      time, p {
        font-size: 1rem;
        line-height: 1rem;
      }
    }
    @media (min-width: 1000px) {
      grid-template-columns: 4vw 5fr auto;
    }
`


export default Card
