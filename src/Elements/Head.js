import styled from 'styled-components'
import { teal, darkBlue, burgundy, darkBlue } from '../Utilities/index'

const Head = styled.header`
  color: white;
  padding: 40px 0 50px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  /* transition: padding 0.6s ease; */
  
  /* Above */
  @media (min-width: 450px) {
    padding: 170px 0 90px 0;
  }
  @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  };

  /* Below */
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`

`