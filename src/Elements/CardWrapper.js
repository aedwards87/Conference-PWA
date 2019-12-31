import styled from 'styled-components'

const CardWrapper = styled.section`
  display: grid;
  grid-gap: ${props => (!props.programmeStyle ? '25px' : '15px')};
  justify-items: center;
  margin: -120px auto 0 auto;
  padding: 0 35px;
  &.space {
    margin-bottom: 80px;
  }
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
  }
  /* Additional styles specific to that page, inserted through props */
  ${props =>
    props.speakersStyle
      ? props.speakersStyle
      : props.speakerStyle
      ? props.speakerStyle
      : props.exhibitorStyle
      ? props.exhibitorStyle
      : props.contactStyle
      ? props.contactStyle
      : null}
  /* Above */ 
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: ${props => (!props.programmeStyle ? '25px' : '15px')};
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`

export default CardWrapper
