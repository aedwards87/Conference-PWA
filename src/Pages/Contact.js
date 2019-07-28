import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'

import { CurvedBG, Card } from '../Elements/index'
import { darkBlue, aqua, cyan, lightBlue } from '../Utilities/index'
import { LinkSVG } from '../Images/index'

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

    <CardWrapper>
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
            <p>General enquiries, student support and member support:</p>
            <p><strong>+44 (0)20 7580 4741</strong></p> 
          </div>
          <div>
            <p>Company law, secretarial and governance enquiries:</p>
            <p><strong>+44 (0)20 7612 7072</strong></p> 
          </div>
          <div>
            <p>Press centre:</p>
            <p><strong>+44 (0)20 7580 4741</strong></p> 
          </div>
        </div>
      </ContactCard>
      
      <ContactCard className="map">
        <img id="map" src="https://i.imgur.com/DWCPbiR.png" alt="map" />
      </ContactCard>
    </CardWrapper>



   
      <ContactFormWrapper>
        <BottomCurve id="contact-form"/>
        <ContactForm name="contact" method="POST" data-netlify="true">
          <ContactFormHead>
            <h1>Contact form</h1>
            <p>Get in touch, we would like to hear from you.</p>
          </ContactFormHead>
          <CardWrapper>
            <Label>
              Your Name: 
              <input type="text" name="name" />
            </Label>   
            <Label>
              Your Email: 
              <input type="email" name="email" />
            </Label>
            <Label>
              Subject: 
              <input type="text" name="subject" />
            </Label>
            <Label>
              Message: 
              <textarea name="message"></textarea>
            </Label>
            <button type="submit">Send</button>
          </CardWrapper>
        </ContactForm>
        <BottomCurve2/>
      </ContactFormWrapper>

  </>
)

const Label = styled.label`
  display: grid;
  grid-gap: 10px;
  color: white;
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
  @media (min-width: 915px) {
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
    /* margin-left: 12px; */
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
  /* @media (max-width: 690px) {
    p { margin: 15px 0 0; }
  } */
  /* @media (max-width: 600px) {
    span { display: block; }
  }
  @media (min-width: 900px) {
    span { display: block; }
  } */
  @media (min-width: 600px) {
    padding: 30px;    
  }
  img {
    width: 100%;
    border-radius: 15px;
  }
  &.map { padding: 8px; }
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
  /* @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  }; */

  /* Below */
  @media (max-width: 1000px) {
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
  a:hover { color: ${lightBlue}; }
  
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
      p {
          /* line-height: 1.45rem;
          font-size: 0.95rem; */
      }
  }
`

const ContactFormHead = styled(Head)`
  padding-top: 50px;
  padding-bottom: 0;
  position: relative;
  /* Above */
  @media (min-width: 450px) {
    padding-top: 50px;
    padding-bottom: 0;
  }
  @media (min-width: 1000px) {
    padding-top: 50px;
    padding-bottom: 0;
    p { margin-bottom: 0; }
  };
`




const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: -120px auto 0 auto;
  padding: 0 35px;
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
  };
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    ${Card}:last-of-type {
      grid-column: span 2
    }
  };
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 25px;
  };
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px;
  };
  @media (max-width: 450px) {
    padding: 0 20px;
  };
`

const BottomCurve = styled.div`
    position: absolute;
    height: 200px;
    background: ${cyan};
    border-radius: 100%;
    top: 50px;
    right: -15vw;
    left: -15vw;
    z-index: -1;
    box-shadow: 0 0 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
`

const BottomCurve2 = styled.div`
    position: absolute;
    height: 200px;
    background: ${cyan};
    border-radius: 100%;
    bottom: 30px;
    z-index: -1;
    right: -15vw;
    left: -15vw;
    box-shadow: 0 0 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
`


const ContactFormWrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: auto;
  margin-top: -100px;
  margin-bottom: -30px;
  padding-bottom: 150px;
  > ${CardWrapper} {
    margin-top: 0;
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${Card}:nth-last-of-type(-n+2) {
      grid-column: span 2
    }
  }
`



const ContactForm = styled.form`
  position: relative;
  margin-top: 100px;
  padding-top: 20px;
  background: ${cyan};
  > ${CardWrapper} {
    margin-top: 0;
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${Card}:nth-last-of-type(-n+2) {
      grid-column: span 2
    }
  }
`



const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Contact