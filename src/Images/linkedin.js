import React from "react"
import styled from 'styled-components' 

const LinkedInSVG = (props) => (
  <StyledLinkedInSVG viewBox="0 0 27 27" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
    
    <path className="st0" d="M13.5,27C20.9,27,27,21,27,13.5C27,6,20.9,0,13.5,0C6,0,0,6,0,13.5C0,21,6,27,13.5,27z"/>
    <path className="st1" d="M10.3,19.1v-8H7.5v8H10.3z M9,10c1,0,1.4-0.6,1.4-1.4S9.8,7.1,9,7.1c-1,0-1.4,0.6-1.4,1.4S8,10,9,10z"/>
    <path className="st1" d="M11.9,19.1h2.7v-4.5c0-0.3,0-0.5,0.2-0.6c0.2-0.5,0.6-1,1.4-1c1,0,1.3,0.8,1.3,1.8v4.3h2.7v-4.7
      c0-2.4-1.3-3.7-3-3.7c-1.4,0-2.1,0.8-2.4,1.3v-1H12C11.9,11.9,11.9,19.1,11.9,19.1z"/>

  </StyledLinkedInSVG>
)


const StyledLinkedInSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  .st0{fill:#0065A1;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default LinkedInSVG