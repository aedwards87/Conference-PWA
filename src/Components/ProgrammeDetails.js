import React from 'react'
import styled from 'styled-components'

import { Card } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'

const ProgrammeDetails = ({ programme }) => (
  <ProgrammeCard>
    <time>{programme.time}</time>
    <h3>{programme.title}</h3>
    <Arrow color={teal} height="15px" aboveHeight="20px" />
  </ProgrammeCard> 
)


const ProgrammeCard = styled(Card)`
    grid-template-columns: auto 1fr auto;
    max-width: 930px;
    p:nth-child(3) {
      background: ${aqua};
      border-radius: 100%;
      width: 30px;
      height: 30px;
    }
    /* Above */
    @media (min-width: 600px) {
      grid-template-columns: 1fr 10fr auto;
    }
    
`


export default ProgrammeDetails
