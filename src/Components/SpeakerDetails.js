import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

import { Card, Tag as KeynoteTag } from '../Elements/index'
import { teal, burgundy } from '../Utilities/index'

const SpeakerDetails = ({ speaker }) => (
  <Link 
    to={`/${speaker.id}`} 
    style={{
      width: '100%',
      textDecoration: 'none',
    }}
  >
    <SpeakerCard>
      <SpeakerImg>
        <img src={require(`../Images/profile-template.jpg`)} alt=""/> 
      </SpeakerImg>
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
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 100%;
  border: 4px solid white;
  overflow: hidden;
  display: grid;
  place-content: center;
  padding-top: 10px;
  box-shadow: 0 1px 6px 0 rgba(13,0,76,0.04), 0 3px 10px 0 rgba(13,0,76,0.1);
  /* Below */
  @media (max-width: 340px) {
    height: 4rem;
    width: 4rem;
  };
  /* Above  */
  @media (min-width: 450px) {
    height: 5rem;
    width: 5rem;
    border: 5px solid white;
  };
  @media (min-width: 600px) {
    height: 6.5rem;
    width: 6.5rem;
    border: 6px solid white;
  };
  /* Image */
  > img {
    width: 100%;
  }
`

export default SpeakerDetails
