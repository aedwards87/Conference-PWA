import styled, { css } from 'styled-components'
import { teal, darkBlue, burgundy } from '../Utilities/index'


const Card = styled.div`
  width: 100%;
  /* height: 100%; */
  background: white;
  box-shadow: 0 0px 3px 0 rgba(13,0,76,0.07), 0 2px 8px 0 rgba(13,0,76,0.15);
  ${props => props.dropDownShadow ? dropDownShadow : null};
  border-radius: 20px;
  margin: 0;
  padding: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 5fr;
  grid-gap: 20px;
  /* overflow: hidden; */
  z-index: 999;
  /* transition: box-shadow 0.6s ease; */
  p {
    color: ${darkBlue};
    font-size: 0.85rem;
    padding: 0;
    line-height: 1rem;
  }
  time {
    color: ${burgundy};
    font-size: 0.95rem;
    padding: 0;
    margin: 0;
    line-height: 1.35rem;
    text-align: center;
  }
  h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-weight: 700;
    color: ${teal};
  }
  @media (min-width: 600px) {
    padding: 25px;
    h3 {
      font-size: 1.15rem;
      color: ${teal};
      line-height: 1.45rem;
    }
    p {
      font-size: 0.85rem;
      line-height: 1.2rem;
    }
    time {
      font-size: 1rem;
      line-height: 1.40rem;
    }
  }
`

const dropDownShadow = css`
  box-shadow: none;
  box-shadow: 0 2px 3px 0 rgba(13,0,76,0.06), 0 4px 5px 0 rgba(13,0,76,0.14);
`

export default Card
