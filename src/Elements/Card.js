import styled from 'styled-components'
import { teal, darkBlue } from '../Utilities/index'


const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 0px 3px 0 rgba(0,0,0,0.03), 0 3px 6px 0 rgba(0,0,0,0.1);
  border-radius: 20px;
  margin: 0;
  padding: 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 5fr;
  grid-gap: 20px;
  overflow: hidden;
  z-index: 999;
  /* transition: box-shadow 0.6s ease; */
  p {
    font-size: 0.75rem;
    padding: 0;
    line-height: 1.1rem;
  }
  time {
    color: ${darkBlue};
    font-size: 0.95rem;
    padding: 0;
    margin: 2.3px 0 0;
    line-height: 1.35rem;
    text-align: center;
  }
  h2, h3, h4, h5, h6 {
    color: ${props => props.color ? props.color : 'white'};
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 1.05rem;
    line-height: 1.1rem;
    font-weight: 700;
  }
  @media (min-width: 600px) {
    h3 {
      font-size: 1.15rem;
      color: ${teal};
      line-height: 1.2rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
    time {
      font-size: 1rem;
      line-height: 1.05rem;
    }
  }
`


export { Card }
