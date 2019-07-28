import React from "react"
import styled from 'styled-components' 

const FlickrSVG = (props) => (
  <StyledFlickrSVG viewBox="0 0 27 27" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
    
    <path className="st0" d="M13.5,27C20.9,27,27,21,27,13.5C27,6,20.9,0,13.5,0C6,0,0,6,0,13.5C0,21,6,27,13.5,27z"/>
    <path className="st1" d="M10.1,16.6c1.4,0,2.6-1.2,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6c-1.4,0-2.6,1.2-2.6,2.6C7.5,15.4,8.7,16.6,10.1,16.6z"
      />
    <path className="st1" d="M16.9,16.6c1.4,0,2.6-1.2,2.6-2.6c0-1.4-1.1-2.6-2.6-2.6c-1.4,0-2.6,1.2-2.6,2.6C14.3,15.4,15.4,16.6,16.9,16.6
      z"/>

  </StyledFlickrSVG>
)


const StyledFlickrSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  .st0{fill:#2D61AB;}
	.st1{fill:#FFFFFF;}
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default FlickrSVG