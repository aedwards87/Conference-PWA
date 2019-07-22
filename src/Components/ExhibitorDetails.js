import React from 'react'
import styled from 'styled-components'

import { Card } from '../Elements/index'
import { burgundy, teal  } from '../Utilities/index'
import Arrow from '../Images/arrow'

const ExhibitorDetails = ({ exhibitor }) => (
  <ExhibitorCard>
    <ExhibitorImg />
    <div>
      <h3>{exhibitor.name}</h3>
      <p><b>Stand:</b> {exhibitor.stand}</p>
      <SponsorLevel level={
       (exhibitor.level === 'Headline') ? teal :
       (exhibitor.level === 'Gold') ? 'Goldenrod' : 
       (exhibitor.level === 'Silver') ? 'Silver' : null
      }>
        {exhibitor.level}
      </SponsorLevel>
    </div>
    <Arrow height="20" color= {burgundy} />
  </ExhibitorCard> 
)

const SponsorLevel = styled.b`
  height: 25px;
  width: 100px;
  font-size: 0.6rem;
  font-weight: 600;
  background: ${props => props.level};
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
`

const ExhibitorCard = styled(Card)`
  grid-template-columns: 4rem 1fr auto;
  max-width: 930px;
  position: relative;
  p { margin: 5px 0 0; }
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
  @media (min-width: 600px) {
    /* grid-template-columns: 90px 5fr auto; */
  }
  @media (max-width: 350px) {
    h3 { font-size: 4.3vw }
  }
  @media (max-width: 300px) {
    h3 { font-size: 12px }
  }
`
const ExhibitorImg = styled.div`
  height: 4rem;
  width: 4rem;
  background: white;
  border-radius: 100%;
  box-shadow: 0 0px 2px 0 rgba(0,0,0,0.07), 0 0 4px 0 rgba(0,0,0,0.1);
  /* @media (min-width: 600px) {
    height: 90px;
    width: 90px;
  } */
`

export default ExhibitorDetails
