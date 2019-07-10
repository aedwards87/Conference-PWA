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
  ExhibitorsSVG,
  MenuSVG,
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
        <ACLogo 
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
                <MenuSVG height="2rem"/>
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
  min-width: 290px;
  display: block;
  @media (min-width: 450px) {
    height: 70px;
    ${fixed({
      yProp: 'top',
      y: 0,
    })};
    display: flex;
    background: white;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.14);
    a {
      height: 100%;
      width: 85px;
      display: flex;
      align-items: center;
      padding: 15px;
    }
  }
  
  

`


const StyledNavBar = styled.nav`
  width: 100%;
  height: 51.5px;
  background: white;
  box-sizing: border-box;
  padding-left: 91px;
  z-index: 99;
  ${grid};
  justify-content: end;
  grid-template-columns: repeat(4, 1fr);
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.14);
  & a {
    height: 100%;
    width: 100%;
    fill: ${teal};
    ${grid({
      xItem: 'center',
      yItem: 'center',
    })};
  };
  & button {
    width: 100%;
    height: 100%;
    fill: ${teal};
    background: white;
    border: 0;
    cursor: pointer;
    outline: none;
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
  @media (min-width: 481px) {
    height: 52px;
  }
  @media (min-width: 450px) {
    height: 70px;
    grid-template-columns: repeat(4, minmax(40px, 100px));
    box-shadow: none;
    padding: 0;
  }
`




const StyledHomeSVG = styled.img`
  ${absolute({
    yProp: 'bottom',
  })};
  z-index: 9998;
  height: 78px;
  @media (min-width: 450px) {
    display: none;
  }
`

const StyledHomeSVGShadow = styled.div`
  display: block;
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
  @media (min-width: 450px) {
    display: none;
  }
`

// const StyledACLogo = styled(ACLogo)`
//   width: 50px;
//   height: 50px;
//   background: white;
//   margin-bottom: 0;
//   border-radius: 100%;
//   z-index: 9999999999;
// `






export default NavBar
