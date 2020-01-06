import React from 'react'
import styled from 'styled-components' // S_ = Styled Component
import { Link } from '@reach/router'

const ExhibitionMapSVG = (props) => (
  <StyledExhibitionMapSVG
    id="Layer_1"
    x="0px" y="0px"
    viewBox="0 0 664.2 541.6"
    height={props.height}
    aboveHeight={props.aboveHeight}
    color={props.color}
  >
    <g>
      <text transform="matrix(1 0 0 1 251.1013 82.4928)" className="st1 st2 st3">Main auditorium</text>
      <text transform="matrix(1 0 0 1 45.1832 435.2826)" className="st1 st2 st3">Room 1</text>
      <line className="st4" x1="368.7" y1="147.7" x2="460.7" y2="147.7" />
      <line className="st4" x1="246.8" y1="147.7" x2="338.7" y2="147.7" />
      <line className="st4" x1="368.7" y1="312.5" x2="460.7" y2="312.5" />
      <polyline className="st5" points="490.7,147.7 662.6,147.7 662.6,132 662.6,1.7 1.7,1.7 1.7,132 1.7,147.7 217.2,147.7 	" />
      <line className="st4" x1="1.7" y1="312.5" x2="95.6" y2="312.5" />
      <Link to="/">
        <rect x="368.7" y="348.7" className="st0" width="91.9" height="116.8"  />
        <text transform="matrix(1 0 0 1 410.8047 412.598)" className="st6 st7 st8">1</text>
      </Link>
      <Link to="/">
        <rect x="620.4" y="329.6" className="st0" width="30.6" height="157.9"  />
        <text transform="matrix(1 0 0 1 631.5886 412.5505)" className="st6 st7 st8">2</text>
      </Link>
      <Link to="/">
        <rect x="473.6" y="500.5" className="st0" width="144.9" height="30.6"  />
        <text transform="matrix(1 0 0 1 541.8134 520.7391)" className="st6 st7 st8">3</text>
      </Link>
      <Link to="/">
        <rect x="212.4" y="500.5" className="st0" width="144.9" height="30.6"  />
        <text transform="matrix(1 0 0 1 280.6821 520.7391)" className="st6 st7 st8">4</text>
      </Link>
      <Link to="/">
        <rect x="178.9" y="329.6" className="st0" width="30.6" height="157.9"  />
        <text transform="matrix(1 0 0 1 190.1038 412.5505)" className="st6 st7 st8">5</text>
      </Link>
      <Link to="/">
        <rect x="506.2" y="269.9" className="st0" width="144.9" height="30.6"  />
        <text transform="matrix(1 0 0 1 574.4589 290.2104)" className="st6 st7 st8">6</text>
      </Link>
      <Link to="/">
        <rect x="150.9" y="269.9" className="st0" width="166.1" height="30.6"  />
        <text transform="matrix(1 0 0 1 229.7137 290.2104)" className="st6 st7 st8">7</text>
      </Link>
      <Link to="/">
        <rect x="11.8" y="269.9" className="st0" width="72.5" height="30.6"  />
        <text transform="matrix(1 0 0 1 42.7745 290.2104)" className="st6 st7 st8">8</text>
      </Link>
      <Link to="/">
        <rect x="17.8" y="160.5" className="st0" width="181.4" height="30.6"  />
        <text transform="matrix(1 0 0 1 104.2783 180.7471)" className="st6 st7 st8">9</text>
      </Link>
      <Link to="/">
        <rect x="504.2" y="160.5" className="st0" width="144.9" height="30.6"  />
        <text transform="matrix(1 0 0 1 568.2809 180.7471)" className="st6 st7 st8">10</text>
      </Link>
      <polyline className="st4" points="338.7,312.5 166.8,312.5 166.8,540.1 662.6,540.1 662.6,312.5 490.7,312.5 	" />
      <polyline className="st4" points="1.7,540.1 166.8,540.1 166.8,312.5 125.3,312.5" />
    </g>

  </StyledExhibitionMapSVG>

)

const StyledExhibitionMapSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
	transition: all 0.3s ease;
	width: 100%;
  @media (min-width: 350px) {
    height: ${props => props.aboveHeight}
    width: 670px;
  }
  .st0{fill:#64C2C8;}
  .st1{fill:#1C6587;}
  .st2{font-family:'FrutigerLTStd-Black';}
  .st3{font-size:20px;}
  .st4{fill:none;stroke:#1C6587;stroke-width:3;stroke-miterlimit:10;}
  .st5{fill:none;stroke:#1C6587;stroke-width:3.3114;stroke-miterlimit:10;}
  .st6{fill:#FFFFFF;}
  .st7{font-family:'FrutigerLTStd-Bold';}
  .st8{font-size:15px;}
  a:hover {
    .st0{fill: #2d9096;}
  }
`




export default ExhibitionMapSVG
