import React from "react"
import styled from 'styled-components'
import { aqua, teal, grey } from '../Utilities/index'
import { Link } from "@reach/router";
// import Media from "react-media";
import { 
  // ICSALogoSVG, 
  // ICSAPortraitLogoSVG,
  ICSACrestSVG, 
  FacebookSVG, 
  TwitterSVG, 
  LinkedInSVG, 
  FlickrSVG 
} from '../Images/index'



const Footer = () => (
  <>
  <FooterWrapper>
    <SocialIcons>
      <a href="#."><FacebookSVG height="36px" /></a>
      <a href="#."><TwitterSVG height="36px" /></a>
      <a href="#."><LinkedInSVG height="36px" /></a>
      <a href="#."><FlickrSVG height="36px" /></a>
    </SocialIcons>
    <MenuLinks>
      <ul>
        <li><Link to="/" exact="true" >Home</Link><span id="vr1">|</span></li>
        <li><Link to="/about" exact="true" >About</Link><span id="vr2">|</span></li>
        <li><Link to="/programme" exact="true" >Programme</Link><span id="vr3">|</span></li>
        <li><Link to="/speakers" exact="true" >Speakers</Link><span id="vr4">|</span></li>
        <li><Link to="/exhibitors" exact="true" >Exhibitors</Link><span id="vr5">|</span></li>
        <li><Link to="/venue-map" exact="true" >Map</Link><span id="vr6">|</span></li>
        <li><Link to="/contact" exact="true" >Contact</Link></li>
      </ul>
    </MenuLinks>
    <CompanyIdentity>
      
    <a href="https://www.icsa.org.uk/about-us"><ICSACrestSVG aboveHeight="144px" height="120px" color={grey} alt="ICSA crest" /></a>
    {/* <a href="https://www.icsa.org.uk/">
      
      <Media query="(min-width: 450px)">
        {matches =>
          matches ? (
            <ICSALogoSVG aboveHeight="22px" height="18px" alt="ICSA logo" />
          ) : (
            <ICSALogoSVG aboveHeight="22px" height="18px" alt="ICSA logo" />
          )
        }
      </Media>

    </a> */}
    </CompanyIdentity>
  </FooterWrapper>
  
</>
)



const FooterWrapper = styled.footer`
  width: 100%;
  padding: 60px 0 105px;
  display: grid;
  justify-content: center;
  grid-gap: 50px;
  @media (min-width: 455px) {
    grid-gap: 40px
  }
  @media (min-width: 450px) {
    padding-bottom: 60px;
  }
`

const SocialIcons = styled.section`
  display: flex;
  justify-content: center;
  svg {
    margin: 0 10px;
    transition: all .3s ease;
  } 
  svg:hover {
    box-shadow: 0 1px 3px 0 rgba(13,0,76,0.2), 0 2px 7px 0 rgba(13,0,76,0.3);
    border-radius: 100%;
  }
`

const MenuLinks = styled.section`
  a {
    color: ${teal};
    text-decoration: none;
    line-height: 2rem;
    margin: 0;
    padding: 0;
    transition: all .4s ease;
  }
  a:hover,
  a[aria-current] {
    color: ${aqua};
  }
  a[aria-current] {
    font-weight: 500;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  @media (max-width: 720px) {
    ul { width: 70%; }
    #vr4 { display: none; }
  }
  @media (max-width: 533px) {
    ul { width: 90%; }
  }
  @media (max-width: 455px) {
    ul { flex-direction: column; }
    #vr1, #vr2, #vr3, #vr4, #vr5, #vr6 { display: none; } 
    li > a { line-height: 2rem; }
  }
  li { 
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  > ul > li > span {
    margin: 0 20px;
    color: ${aqua};
    padding: 0;
  }
  
`

const CompanyIdentity = styled.section`
  display: grid;
  justify-items: center;
  grid-gap: 60px
`


export default Footer
