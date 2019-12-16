import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

import { Card, Tag as KeynoteTag, PersonImg } from '../Elements/index'
import { teal, burgundy } from '../Utilities/index'

const SpeakerDetails = ({ speaker }) => (
  <Link 
    to={`/speakers/${speaker.id}${speaker.name}`} 
    style={{
      width: '100%',
      textDecoration: 'none',
      display: 'grid',
      justifyItems: 'center',
    }}
  >
    <SpeakerCard>
      <PersonImg>
        <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
      </PersonImg>
      <div>
        <h3>{speaker.name}</h3>
        <p>{speaker.title}</p>
        <p>{speaker.bio}</p>
        {(speaker.keynote === 'true') && (
          <KeynoteTag 
            bgColor={teal} 
          >
            Keynote
          </KeynoteTag>
        )}
      </div>
    </SpeakerCard>
  </Link>
)


const SpeakerCard = styled(Card)`
  grid-template-columns: auto 5fr;
  position: relative;
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
  @media (min-width: 600px) {
    max-width: 300px;
  }
`



export default SpeakerDetails
