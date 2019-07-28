import React from "react"
import styled from 'styled-components' 

const MenuSVG = (props) => (
  <StyledMenuSVG viewBox="0 0 100 100" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
    <g>
      <path d="M100,50c0,7.6-6.4,14.1-14.1,14.1S71.9,57.6,71.9,50s6.4-14.1,14.1-14.1S100,42.4,100,50z M94.5,50
        c0-4.6-4-8.6-8.6-8.6s-8.3,4-8.3,8.6s3.7,8.3,8.3,8.3S94.5,54.6,94.5,50z"/>
      <path d="M64.2,50c0,7.6-6.4,14.1-14.1,14.1c-8,0-14.1-6.4-14.1-14.1s6.1-14.1,14.1-14.1C57.8,35.9,64.2,42.4,64.2,50z
        M58.4,50c0-4.6-3.7-8.6-8.3-8.6s-8.6,4-8.6,8.6s4,8.3,8.6,8.3S58.4,54.6,58.4,50z"/>
      <path d="M28.1,50c0,7.6-6.1,14.1-14.1,14.1C6.4,64.1,0,57.6,0,50s6.4-14.1,14.1-14.1C22,35.9,28.1,42.4,28.1,50z
        M22.6,50c0-4.6-4-8.6-8.6-8.6s-8.3,4-8.3,8.6s3.7,8.3,8.3,8.3S22.6,54.6,22.6,50z"/>
    </g>
  </StyledMenuSVG>
)


const StyledMenuSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  transition: all 0.3s ease;
  @media (min-width: 350px) {
    height: ${props => props.aboveHeight}
  }
`

export default MenuSVG