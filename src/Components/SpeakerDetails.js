import React from 'react'
import styled from 'styled-components'

import { Card } from '../Elements/index'
import { aqua, teal, burgundy } from '../Utilities/index'


const SpeakerDetails = ({ speaker }) => (
  <SpeakerCard>
    <SpeakerImg />
    <div>
      <h3>{speaker.name}</h3>
      <p>{speaker.title}</p>
      <p>{speaker.bio}</p>
      {(speaker.keynote === 'true') && <KeynoteTag>Keynote</KeynoteTag>}
    </div>
    
  </SpeakerCard>
)

const KeynoteTag = styled.b`
  height: 25px;
  width: 100px;
  font-size: 0.6rem;
  font-weight: 600;
  background: ${teal};
  color: white;
  border-radius: 20px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-indent: .2rem;
  position: fixed;
  top: -20px;
  right: 20px;
  box-shadow: 0 0px 2px 0 rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
  @media (min-width: 600px) {
    top: 85px;
    right: auto;
    left: calc(50% - 50px);
  }
`

const SpeakerCard = styled(Card)`
  grid-template-columns: auto 5fr;
  p:first-of-type {
    font-weight: 600;
    color: ${burgundy};
    margin: 7px 0 0;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows-rows: 1fr 1fr;
    height: 100%;
    justify-items: center;
    text-align: center;
    h3 {
      color: ${teal};
    }
    p:first-of-type {
      margin: 10px 0 0;
    }
  }
  @media (min-width: 1000px) {
    max-width: 300px;
  }
`


const SpeakerImg = styled.div`
  height: 4rem;
  width: 4rem;
  background: ${aqua};
  border-radius: 100%;
  @media (min-width: 600px) {
    height: 90px;
    width: 90px;
  }
`


export default SpeakerDetails
