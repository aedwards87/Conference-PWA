import React from "react"
import styled from 'styled-components' 
import { Link } from "@reach/router";
import isActive from './isActive'

import { aqua, teal } from '../Utilities/index'
import { 
  ACLogo,
  homeSVG, 
  SpeakerSVG, 
  ProgrammeSVG, 
  ExhibitorsSVG 
} from '../Images/index'
import { 
    grid, 
    fixed, 
    absolute, 
  } from '../Utilities/index'



const NavBar = ({ on, toggle }) => (
  <StyledNavWrapper>
    <Link 
        to="/"
        onClick={on ? toggle : null} 
    >
        <StyledHomeSVG 
            src={homeSVG} 
            alt="Home Button"
        /> 
        <StyledACLogo 
          height="50px"
          position="absolute"
          left="12.5px"
          bottom="11px"
        />
        <StyledHomeSVGShadow />
    </Link>

    <StyledNavBar>
        <div>
            <Link 
                exact
                to="/exhibitors" 
                getProps={isActive}
                onClick={on ? toggle : null} 
            >
                <ExhibitorsSVG height="1.65rem"/>
            </Link>
        </div>
        <div>
            <Link 
                exact
                to="/programme" 
                getProps={isActive}
                onClick={on ? toggle : null} 
            >
                <ProgrammeSVG height="1.56rem" />
            </Link>
        </div>
        <div>
            <Link 
                exact
                to="/speakers" 
                getProps={isActive}
                onClick={on ? toggle : null} 
            >
                <SpeakerSVG height="1.8rem" />
            </Link>
        </div>
        <div>
            <button 
                onClick={toggle} 
                className={on ? 'active' : null} 
            >
                <Menu />
            </button>
        </div>
    </StyledNavBar>

  </StyledNavWrapper>
)




const StyledNavWrapper = styled.div`
  ${fixed({
    yProp: 'bottom',
    y: 0,
  })}
  width: 100vw;
  padding: 0;
  margin: 0;
  z-index: 99999;
`

const Menu = styled.div`
  ${absolute({
    y: 'calc(50% - 1.5px)',
    x: 'calc(50% - 15px)'
  })}
  &, &::before, &::after {
    width: 1.7rem;
    height: 0.15rem;
    background: ${teal};
    border-radius: 100px;
  }
  &::before/*, &::after*/ {
    content: "";
    ${absolute}
  }
  &::before {
    top: 7px;
  }
  &::after {
    top: -8.5px;
  }
`

const StyledNavBar = styled.nav`
  width: 100%;
  height: 51.5px;
  background: white;
  box-sizing: border-box;
  padding-left: 91px;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.14);
  z-index: 99;
  ${grid};
  grid-template-columns: repeat(4, 1fr);
  & a {
    height: 100%;
    width: 100%;
    fill: ${teal};
    ${grid({
        xItem: 'center',
        yItem: 'center',
    })};
  }
  & button {
    width: 100%;
    height: 100%;
    background: white;
    border: 0;
    cursor: pointer;
    outline: none;
    position: relative;
    ${grid({
        xItem: 'center',
        yItem: 'center',
    })};
  };
  & a:hover,
  & button:hover {
    fill: white;
    background: ${aqua}
  };
  & a.active,
  & a[aria-current],
  & button.active {
    fill: white;
    background: ${aqua}
  };
  & button:hover ${Menu},
  & button:hover ${Menu}::before,
  & button:hover ${Menu}::after {
    background: white;
  };

  & button.active ${Menu},
  & button.active ${Menu}::before,
  & button.active ${Menu}::after {
    background: white;
  };

  @media (min-width: 481px) {
    height: 52px;
  }
`




const StyledHomeSVG = styled.img`
  ${absolute({
    yProp: 'bottom',
    // y: '-4px',
  })};
  z-index: 9998;
  height: 78px;
`

const StyledHomeSVGShadow = styled.div`
  height: 90px;
  width: 85px;
  background: white;
  margin: 0;
  border-radius: 50%;
  z-index: -1;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.14);
  ${absolute({
    yProp: 'bottom',
    y: '-13px',
    x: '-6px',
  })}
`

const StyledACLogo = styled(ACLogo)`
  width: 50px;
  height: 50px;
  background: white;
  margin-bottom: 0;
  border-radius: 100%;
  z-index: 9999999999;
  /* ${absolute({
    yProp: 'bottom',
    y: '10px',
    x: '13px',
  })}
  @media (min-width: 481px) {
    ${absolute({
      yProp: 'bottom',
      y: '40px',
      x: '13px',
    })}
  } */
`






export default NavBar
