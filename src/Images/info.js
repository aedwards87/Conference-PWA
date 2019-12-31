import React from "react"
import styled from 'styled-components' 

const InfoSVG = (props) => (
  <StyledInfoSVG x="0px" y="0px" viewBox="0 0 18 18" height={props.height} color={props.color}  >
    <g>
      <g>
        <g>
        <path d="M2,9 C2,12.8666711 5.13359171,16 9,16 C12.8666711,16 16,12.8664083 16,9 C16,5.13332887 12.8664083,2 9,2 C5.13332887,2 2,5.13359171 2,9 Z M0,9 C0,4.02943725 4.02834436,0 9,0 C13.9705627,0 18,4.02834436 18,9 C18,13.9705627 13.9716556,18 9,18 C4.02943725,18 0,13.9716556 0,9 Z M8,8.00292933 L8,12.9970707 C8,13.5621186 8.44771525,14 9,14 C9.55613518,14 10,13.5509732 10,12.9970707 L10,8.00292933 C10,7.43788135 9.55228475,7 9,7 C8.44386482,7 8,7.44902676 8,8.00292933 Z M8,5 C8,5.55613518 8.44771525,6 9,6 C9.55613518,6 10,5.55228475 10,5 C10,4.44386482 9.55228475,4 9,4 C8.44386482,4 8,4.44771525 8,5 Z">
        </path>
        </g>
      </g>
    </g>
  </StyledInfoSVG>
)
 

const StyledInfoSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default InfoSVG