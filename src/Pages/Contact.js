import React from "react"
import styled, { css } from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, Card, CardWrapper } from '../Elements/index'
import { darkBlue, aqua, cyan } from '../Utilities/index'
import { GoogleMap } from '../Components/index'
import { LinkSVG } from '../Images/index'
import Form from '../Components/Form'

const Contact = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <AnimCurvedBG style={props} bgImgPortrait="null" bgImgLandscape="null" bgColor={darkBlue} color="white">

          <Spring
            native
            from={{opacity: 0, transform: 'translate3d(0,10px,0)'}}
            to={{opacity: 1, transform: 'translate3d(0,0,0)'}}
            config={{delay: 300, duration: 500}}
          >
            {props => (
              <AnimHead style={props}>
                <h1>Contact</h1>
                <p>
                  The fastest way you can get in touch with our team is to use our <a href="#contact-form" >contact form</a>. {/* #contactform  - add this to link url */}
                </p>
                <p>
                  However, if you prefer to give us a call, please use the numbers below between our business hours of 9.30am and 5pm UK time, Monday to Friday, and we will do our best to assist you with your enquiry.
                </p>
              </AnimHead>
            )}
          </Spring>

        
        </AnimCurvedBG>  
      )}
    </Spring>

    <CardWrapper contactStyle={contactStyle}>
      <ContactCard>
        <h3>Where to find us:</h3>
        <div className="contact-location">
          <p>
            <strong>ICSA: The Chartered Governance Institute</strong><br />
            Saffron House<br />
            6–10 Kirby Street<br />
            London<br />
            EC1N 8TS<br />
            United Kingdom<br />
          </p>
          <a href="https://www.icsa.org.uk/">
            <LinkSVG height="15px" color={darkBlue} />
            icsa.org.uk
          </a>
        </div>
      </ContactCard>
      <ContactCard>
        <h3>Contact Numbers:</h3>
        <div className="contact-numbers">
          <div>
            <p>General enquiries, student <br/>support and member support:</p>
            <p><strong>+44 (0)20 7580 4741</strong></p> 
          </div>
          <div>
            <p>Company law, secretarial and <br/>governance enquiries:</p>
            <p><strong>+44 (0)20 7612 7072</strong></p> 
          </div>
          <div>
            <p>Press centre:</p>
            <p><strong>+44 (0)20 7580 4741</strong></p> 
          </div>
        </div>
      </ContactCard>
      
      {/* Google maps */}
      <ContactCard className="map">
        <GoogleMap />
      </ContactCard>
    </CardWrapper>

    {/* Contact form section */}
    <Form 
      name="contact"
      contactStyle={contactStyle}
      title="Contact Form"
      message="Get in touch, we would like to hear from you."
      bgColor={cyan}
      buttonColor={darkBlue}
      subject
      topCurve
      bottomCurve
    />
  </>
)



// Additional styling for CardWrapper 
const contactStyle = css`
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    ${Card}:last-of-type {
      grid-column: span 2
    }
  };
`


const ContactCard = styled(Card)`
  grid-template-columns: 1fr;
  text-align: left;
  box-sizing: border-box;
  align-items: start;
  align-content: start;
  padding: 25px;

  > div.contact-numbers > div  {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
  p:first-of-type { margin-bottom: 0px; }
  p:last-of-type { margin-bottom: 20px; }
  > div > div:last-of-type > p { margin-bottom: 0px }
  @media (min-width: 915px), (max-width: 599px) and (min-width: 460px) {
    > div.contact-numbers > div  {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      grid-gap: 20px;
    }
    p:first-of-type { margin-bottom: 20px; }
  }

  > div.contact-location > a {
    display: flex;
    align-items: center;
    svg {
      padding-right: 8px;
    }
  }

  a {
    text-decoration: none;
    color: ${darkBlue};
    font-size: 0.88rem;
    line-height: 1.1rem;
    font-weight: 600;
  }
  a:hover {
    color: ${cyan};
  }

  h3 {
    border-bottom: 4px solid ${aqua}20;
    padding-bottom: 0.7rem;
  }
  @media (min-width: 600px) {
    padding: 30px;    
  }
  img {
    width: 100%;
    border-radius: 15px;
  }
  &.map { 
    padding: 0; 
    overflow: hidden;
    border: 15px solid white;
  }
`

const Head = styled.header`
  color: white;
  padding: 40px 0 70px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  transition: max-width .6s ease;
  /* Above */
  @media (min-width: 450px) {
    padding: 140px 0 80px 0;
  }
  /* Below */
  @media (max-width: 900px) {
    max-width: 625px;
  }
  h1 {
      margin: 0 0 45px;
      padding: 0;
      font-weight: 200;
      font-size: 13.5vw;
      line-height: 16vw
  }
  p {
      padding: 0;
      line-height: 1.55rem;
      font-size: 1rem;
      width: 100%;
      margin: 15px 0;
  }
  p:first-of-type { margin-top: 0; }
  p:last-of-type { margin-bottom: 40px; }
  a { color: white; }
  a:hover { color: ${cyan}; }
  
  /* Above */
  @media (min-width: 450px) {
      h1 {
          font-size: 3.8rem;
          line-height: 4rem;
      };
      p {
          line-height: 1.6rem;
          font-size: 1.05rem;
      };
      /* p:first-of-type { margin-top: 40px; } */
      p:last-of-type { margin-bottom: 50px; }
      h1 span { display: none; }
  }

  /* Below */
  @media (max-width: 320px) { 
      h1 {
          font-size: 44px;
          line-height: 14.5vw
      }
  }

`








const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Contact