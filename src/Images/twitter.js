import React from "react"
import styled from 'styled-components' 

const TwitterSVG = (props) => (
  <StyledTwitterSVG viewBox="0 0 27 27" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
    
    <path className="st0" d="M13.5,27C6.1,27,0,20.9,0,13.5C0,6.1,6.1,0,13.5,0C20.9,0,27,6.1,27,13.5C27,20.9,21,27,13.5,27z"/>
    <path className="st1" d="M11.1,20.6c5.9,0,9.3-5,9.3-9.3c0-0.2,0-0.3,0-0.5c0.6-0.5,1.1-1,1.6-1.6c-0.6,0.3-1.3,0.5-1.9,0.5
      c0.6-0.5,1.1-1,1.4-1.8c-0.6,0.3-1.3,0.6-2.1,0.8c-0.6-0.6-1.4-1-2.4-1c-1.8,0-3.2,1.4-3.2,3.2c0,0.3,0,0.5,0.2,0.8
      c-2.7-0.2-5.1-1.4-6.7-3.4c-0.3,0.5-0.5,1-0.5,1.6c0,1.1,0.6,2.1,1.4,2.7c-0.5,0-1-0.2-1.4-0.5c0,1.6,1.1,2.9,2.6,3.2
      c-0.3,0-0.5,0.2-0.8,0.2c-0.2,0-0.5,0-0.6,0c0.5,1.3,1.6,2.2,3,2.2c-1.1,0.8-2.6,1.4-4,1.4c-0.3,0-0.5,0-0.8,0
      C7.5,20.1,9.3,20.6,11.1,20.6z"/>

  </StyledTwitterSVG>
)


const StyledTwitterSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  .st0{fill:#409BD6;}
	.st1{fill:#FFFFFF;}
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default TwitterSVG