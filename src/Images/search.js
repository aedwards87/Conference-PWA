import React from "react"
import styled from 'styled-components' 

const SearchSVG = (props) => (
  <StyledSearchSVG viewBox="0 0 18 17" x="0px" y="0px" height={props.height} aboveHeight={props.aboveHeight} color={props.color}  >
      <path 
        // class="st0" 
        d="M17.6,15.6l-2.9-2.9c0.9-1.3,1.5-2.9,1.5-4.6c0-4.5-3.6-8.1-8.1-8.1C3.6,0,0,3.6,0,8.1c0,4.5,3.6,8.1,8.1,8.1
    c2,0,3.9-0.8,5.3-2l2.8,2.8L17.6,15.6z M8.1,14.2C4.7,14.2,2,11.5,2,8.1S4.7,2,8.1,2s6.1,2.7,6.1,6.1S11.5,14.2,8.1,14.2z"
      />
  </StyledSearchSVG>
)
  

const StyledSearchSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  transition: all 0.3s ease;
  @media (min-width: 350px) {
    height: ${props => props.aboveHeight}
  }
`

export default SearchSVG