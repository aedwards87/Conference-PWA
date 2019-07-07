import React from "react"
import styled from 'styled-components' // S_ = Styled Component

export const SpeakerSVG = (props) => (
  <StyledSpeakerSVG viewBox="0 0 24.4 33.3" height={props.height} color={props.color}>
    <g>
      <path className="st0" d="M12.2,24c3.5,0,6.3-2.8,6.3-6.3v-10c0-3.5-2.8-6.3-6.3-6.3c-3.5,0-6.3,2.8-6.3,6.3v10C5.9,21.1,8.7,24,12.2,24
        z M12.2,3.9c2.1,0,3.8,1.7,3.8,3.8v10c0,2.1-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8v-10C8.4,5.6,10.1,3.9,12.2,3.9z"/>
      <path className="st0" d="M22.2,17.3c-0.6,0-1.2,0.5-1.3,1.1c-0.4,4.1-3.7,7.4-7.9,7.9c-4.8,0.5-9.1-3.1-9.6-7.9
        c-0.1-0.6-0.6-1.1-1.3-1.1c0,0-0.1,0-0.1,0c-0.3,0-0.6,0.2-0.8,0.5C1,18,0.9,18.3,1,18.7c0.5,5.3,4.7,9.5,10,10.1v1
        c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3v-1c5.3-0.6,9.5-4.8,10-10.1c0-0.1,0-0.1,0-0.2C23.4,17.8,22.9,17.3,22.2,17.3z"/>
    </g>
  </StyledSpeakerSVG>
)

const StyledSpeakerSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
`

export default SpeakerSVG