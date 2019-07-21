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
    </div>
  </SpeakerCard>
)

const SpeakerCard = styled(Card)`
  grid-template-columns: auto 5fr;
  p:nth-child(2) {
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
    max-width: 300px;
    h3 {
      color: ${teal};
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
  border-radius: 100%;
  @media (min-width: 600px) {
    height: 90px;
    width: 90px;
  }
`


export default SpeakerDetails
