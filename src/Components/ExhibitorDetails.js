import React from 'react'
import styled from 'styled-components'

import { Card, Tag as SponsorTag, PersonImg } from '../Elements/index'
import { burgundy, teal  } from '../Utilities/index'
import Arrow from '../Images/arrow'


const ExhibitorDetails = ({ exhibitor }) => (
  <ExhibitorCard>
    <PersonImg>
      <img src={require(`../Images/profile-template.jpg`)} alt={`${exhibitor.name} logo`}/> 
    </PersonImg>
    <div>
      <h3>{exhibitor.name}</h3>
      <p><b>Stand:</b> {exhibitor.stand}</p>
      <SponsorTag 
        aboveTop="-20px"
        aboveRight="20px"
        aboveLeft="auto"
        level={
          (exhibitor.level === 'Headline') ? teal :
          (exhibitor.level === 'Gold') ? 'Goldenrod' : 
          (exhibitor.level === 'Silver') ? 'Silver' : null
      }>
        {exhibitor.level}
      </SponsorTag>
    </div>
    <Arrow height="15px" aboveHeight="20px" color= {burgundy} />
  </ExhibitorCard> 
)


const ExhibitorCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  max-width: 930px;
  position: relative;
  word-break: break-word;
  p { margin: 3px 0 0; }
  p:nth-child(3) {
    background: ${burgundy};
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  & p b {
    color: ${burgundy};
    font-weight: 500;
  }
  @media (max-width: 350px) {
    h3 { font-size: 1rem};
  }
`

export default ExhibitorDetails
