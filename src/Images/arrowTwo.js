import React from "react"
import styled from 'styled-components' 

const ArrowTwoSVG = (props) => (
  <StyledArrowTwoSVG x="0px" y="0px" viewBox="0 0 500 500" height={props.height} color={props.color}  >
      <path 
        d="M106,104.5H394c26.4,0,49.4,15,60.1,39.1s6.3,51.3-11.4,70.8L298.4,373.8c-12.4,13.7-30.2,21.6-48.8,21.6c0,0-0.1,0-0.1,0  c-18.6,0-36.4-8-48.8-21.8L57.2,214.4c-17.6-19.6-21.9-46.7-11.2-70.8S79.7,104.5,106,104.5z"
      >
      </path>
  </StyledArrowTwoSVG>
)


const StyledArrowTwoSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
`

export default ArrowTwoSVG