import React from "react"
import styled from 'styled-components' 

const FacebookSVG = (props) => (
  <StyledFacebookSVG viewBox="0 0 27 27" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
    
    <path className="st0" d="M15.4,26.8C22,25.9,27,20.2,27,13.5C27,6.1,20.9,0,13.5,0C6.1,0,0,6.1,0,13.5c0,6.8,5,12.4,11.4,13.3"/>
    <path className="st1" d="M16.5,5.1c1.4,0,3,0.3,3,0.3v3.4h-1.8c-1.6,0-2.2,1-2.2,2.1v2.6h3.7l-0.6,3.9h-3.2v9.5h-4v-9.5H8v-3.9h3.4v-3.1
      C11.4,7.1,13.5,5.1,16.5,5.1"/>

  </StyledFacebookSVG>
)


const StyledFacebookSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  .st0{fill:#2E6FB6;}
	.st1{fill:#FFFFFF;}
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default FacebookSVG