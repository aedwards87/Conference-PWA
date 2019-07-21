import React from 'react'
import styled from 'styled-components'

import { Card } from '../Elements/index'
import { aqua, teal } from '../Utilities/index'
import Arrow from '../Images/arrow'

const ProgrammeDetails = ({ programme }) => (
  <ProgrammeCard>
    <time>{programme.time}</time>
    <h3>{programme.title}</h3>
    <Arrow height="20" color={teal} />
  </ProgrammeCard> 
)


const ProgrammeCard = styled(Card)`
    grid-template-columns: 10vw 5fr auto;
    max-width: 930px;
    p:nth-child(3) {
      background: ${aqua};
      border-radius: 100%;
      width: 30px;
      height: 30px;
    }
    @media (min-width: 600px) {
      grid-template-columns: 7vw 5fr auto;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 4vw 5fr auto;
    }
`


export default ProgrammeDetails
