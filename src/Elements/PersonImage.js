import styled from 'styled-components'

const PersonImg = styled.div`
  height: ${props => props.height ? props.height : '4.5rem'};
  width: ${props => props.width || '4.5rem'};
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
    height: ${props => props.height ? `calc(${props.height} + 0.5rem)` : '5rem'};
    width: ${props => props.width ? `calc(${props.width} + 0.5rem)` : '5rem'};
    border: 5px solid white;
  };
  @media (min-width: 600px) {
    height: ${props => props.height ? `calc(${props.height} + 1.5rem)` : '6.5rem'};
    width: ${props => props.width ? `calc(${props.width} + 1.5rem)` : '6.5rem'};
    border: 6px solid white;
  };
  /* Image */
  > img {
    width: 100%;
  }
`

export default PersonImg
