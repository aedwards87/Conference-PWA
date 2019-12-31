import React from 'react'
import styled from 'styled-components'

import { Card, Tag as LevelTag, ImgTemp } from '../Elements/index'
import { burgundy, teal } from '../Utilities/index'
// import Arrow from '../Images/arrow'
import { Link } from '@reach/router'

const ExhibitorDetails = ({ exhibitor }) => {
  const exhibitorURI = exhibitor.name.toLowerCase().replace(/\s+/g, '')

  return (
    <Link
      to={`/exhibitors/${exhibitor.id}${exhibitor.name.toLowerCase()}`}
      style={{
        width: '100%',
        textDecoration: 'none'
      }}
    >
      <ExhibitorCard>
        <ExhibImg height="4rem" width="4rem">
          <img
            src={require(`../Images/sponsorLogos/${exhibitorURI}.png`)}
            alt={`${exhibitor.name} logo`}
          />
        </ExhibImg>
        <div>
          <h3>{exhibitor.name}</h3>
          <LevelTag
            aboveTop="-20px"
            aboveRight="20px"
            aboveLeft="auto"
            level={
              exhibitor.level === 'Headline'
                ? teal
                : exhibitor.level === 'Gold'
                ? 'Goldenrod'
                : exhibitor.level === 'Silver'
                ? 'Silver'
                : null
            }
          >
            {exhibitor.level}
          </LevelTag>
          <p>
            <b>Stand:</b> {exhibitor.stand}
          </p>
        </div>
        {/* <Arrow height="15px" aboveHeight="20px" color= {burgundy} /> */}
      </ExhibitorCard>
    </Link>
  )
}

const ExhibImg = styled(ImgTemp)`
  padding-top: 0;
  > img {
    max-height: 33px;
    max-width: 43px;
    width: auto;
    margin: 0 auto;
  }
`

const ExhibitorCard = styled(Card)`
  grid-template-columns: auto 1fr auto;
  max-width: 930px;
  position: relative;
  word-break: break-word;
  p {
    margin: 3px 0 0;
  }
  & p b {
    color: ${burgundy};
    font-weight: 500;
  }
  @media (max-width: 350px) {
    h3 {
      font-size: 1rem;
    }
  }
  h3 {
    position: relative;
  }
`

export default ExhibitorDetails
