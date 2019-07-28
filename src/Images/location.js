import React from "react"
import styled from 'styled-components' 

const LocationSVG = (props) => (
  <StyledLocationSVG x="0px" y="0px" viewBox="0 0 32 32" height={props.height} color={props.color}  >
      <g><path d="M16,32c-0.3183594,0-0.6181641-0.1518555-0.8066406-0.4086914L6.559082,19.8168945C4.8847656,17.5336914,4,14.8310547,4,12   C4,5.3833008,9.3833008,0,16,0s12,5.3833008,12,12c0,2.8310547-0.8847656,5.5336914-2.5585938,7.8168945l-8.6347656,11.7744141   C16.6181641,31.8481445,16.3183594,32,16,32z M16,2C10.4858398,2,6,6.4858398,6,12   c0,2.4023438,0.7509766,4.6967773,2.171875,6.6342773L16,29.309082l7.8286133-10.6748047   C25.2490234,16.6967773,26,14.4023438,26,12C26,6.4858398,21.5141602,2,16,2z M16,17c-2.7568359,0-5-2.2431641-5-5s2.2431641-5,5-5   s5,2.2431641,5,5S18.7568359,17,16,17z M16,9c-1.6542969,0-3,1.3457031-3,3s1.3457031,3,3,3s3-1.3457031,3-3S17.6542969,9,16,9z"></path></g>
  </StyledLocationSVG>
)


const StyledLocationSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default LocationSVG