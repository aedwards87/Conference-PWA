import React from "react"
import styled from 'styled-components' // S_ = Styled Component

export const ExhibitorsSVG = (props) => (
  <StyledExhibitorsSVG viewBox="0 0 30 32" height={props.height} color={props.color} >
   <g>
    <circle className="st0" cx="7" cy="15" r="3"/>
    <path className="st0" d="M27.5,8h-6l-5-5.7c-0.4-0.4-0.9-0.6-1.5-0.6c0,0,0,0,0,0c-0.6,0-1.1,0.2-1.5,0.6L8.5,8h-6C1.1,8,0,9.1,0,10.5
      v19C0,30.9,1.1,32,2.5,32h25c1.4,0,2.5-1.1,2.5-2.5v-19C30,9.1,28.9,8,27.5,8z M15,3.8L18.7,8h-7.3L15,3.8z M28,29.5
      c0,0.3-0.2,0.5-0.5,0.5h-25C2.2,30,2,29.8,2,29.5v-19C2,10.2,2.2,10,2.5,10h25c0.3,0,0.5,0.2,0.5,0.5V29.5z"/>
    <polygon className="st0" points="11.5,22.5 9,20 4,25 4,28 26,28 26,21 19.5,14.5 	"/>
  </g>
  </StyledExhibitorsSVG>
)

const StyledExhibitorsSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
`

export default ExhibitorsSVG