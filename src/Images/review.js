import React from "react"
import styled from 'styled-components' 

const ReviewSVG = (props) => (
  <StyledReviewSVG x="0px" y="0px" viewBox="0 0 701.18 807.41" height={props.height} color={props.color}  >
      <g><path className="fil0" d="M67.62 235.74l129.51 0 -61.94 -44.83c-20.37,-14.77 -8.32,-46.87 16.46,-45.11l133.62 0.26 41.58 -128.83c7.41,-23.13 40.12,-22.8 47.46,0l41.59 128.83 135.43 -0.26c24.21,0 33.91,31.05 14.61,45.06l-61.99 44.91 129.61 -0.03c37.23,0 67.61,30.44 67.61,67.62l0 436.44c0,37.16 -30.44,67.61 -67.61,67.61l-565.95 0c-37.25,0 -67.62,-30.35 -67.62,-67.61l0 -436.44c0,-37.11 30.51,-67.62 67.62,-67.62zm393.74 50l37.04 113.25c7.01,23.76 -20.34,43.15 -39.83,26.78l-107.98 -78.76 -107.98 78.76c-19.01,15.97 -47.58,-2.87 -39.82,-26.78l37.04 -113.25 -172.2 0c-9.77,0 -17.62,7.85 -17.62,17.62l0 436.44c0,9.63 7.99,17.61 17.62,17.61l565.95 0c9.65,0 17.61,-7.94 17.61,-17.61l0 -436.44c0,-9.68 -7.9,-17.62 -17.61,-17.62l-172.21 0zm-276.49 376.86c-32.88,0 -32.88,-50 0,-50l309.25 0c32.88,0 32.88,50 0,50l-309.25 0zm0 -115.54c-32.88,0 -32.88,-50 0,-50l309.25 0c32.88,0 32.88,50 0,50l-309.25 0z"></path></g>
  </StyledReviewSVG>
)


const StyledReviewSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
`

export default ReviewSVG