import React from "react"
import CurvedBG2 from '../Elements/CurvedBG2'
import { burgundy } from '../Utilities/index'
import styled from 'styled-components'


import Card from '../Components/Card'


const programmes = [
  {
    id: 1,
    title: 'Breakfast',
    time: '08.35'
  },
  {
    id: 2,
    title: 'Welcome and introduction',
    time: '09.00'
  },
  {
    id: 3,
    title: 'Keynotes address',
    time: '09.10'
  },
]

const Exhibitors = () => (
  <>
    <CurvedBG2
      bgColor={burgundy}
    >
      <h1>Exhibitors</h1>
      <p>
        View the full list of our 2019 exhibitors.
      </p>
    </CurvedBG2>

    <CardWrapper>
      {programmes.map(programme => (
        <Card
          key={programme.id}
          programme={programme}
        />
      ))}
    </CardWrapper>

  </>
)

const CardWrapper = styled.section`
  display: grid;
  grid-gap: 13px;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  margin-top: -5rem;
  padding: 0 35px;
  @media (max-width: 330px) {
    padding: 0 15px;
  }
`

export default Exhibitors
