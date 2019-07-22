import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'
import { Link } from "@reach/router";

import { CurvedBG, Card } from '../Elements/index'
import { darkBlue, aqua, cyan } from '../Utilities/index'


const Contact = () => (
  <>
    <Spring
      from={{transform: 'translate3d(0,-100px,0)', opacity: 0}}
      to={{transform: 'translate3d(0,-35px,0)', opacity: 1}}
      config={{tension: 100, friction: 13}}
    >
      {props => (
        <AnimCurvedBG style={props} bgColor={darkBlue} color="white">

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
                  The fastest way you can get in touch with our team is to use our <a href="/contact/#ContactForm">contact form</a>. {/* #contactform  - add this to link url */}
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
      <StyledCard>
        <h3>Contact Numbers:</h3>
        <section>
          <p>General enquiries, student support and member support: <strong><span>+44 (0)20 7580 4741</span></strong></p>
          <p>Company law, secretarial and governance enquiries: <strong><span>+44 (0)20 7612 7035</span></strong></p>
          <p>Press centre: <strong>+44 (0)20 7612 7072</strong></p>
        </section>
      </StyledCard>
      <StyledCard>
        <h3>Where to find us:</h3>
        <section>
          <p>
            <strong>ICSA: The Governance Institute</strong><br></br>
            Saffron House<br></br>
            6–10 Kirby Street<br></br>
            London<br></br>
            EC1N 8TS<br></br>
            United Kingdom
          </p>
        </section>
      </StyledCard>
      <StyledCard className="map">
        <img src="https://i.imgur.com/DWCPbiR.png" alt="map" />
      </StyledCard>
    </CardWrapper>



    {/* <CurvedBG 
      height="1000px" 
      color="white" 
      bgColor={cyan} 
      overflow="true"
      top="0" 
      bottom="-200px" 
      style={{
        marginTop: -220, paddingTop: 200
      }}> */}
      <ContactForm>
        <ContactFormHead>
          <h1 id="ContactForm">Contact form</h1>
          <p>Get in touch.</p>
        </ContactFormHead>
        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <button>Submit</button>
        </CardWrapper>
      </ContactForm>
    {/* </CurvedBG> */}
  </>
)

const StyledCard = styled(Card)`
  grid-template-columns: 1fr;
  text-align: left;
  box-sizing: border-box;
  align-items: start;
  align-content: start;
  padding: 30px;
  p { margin: 20px 0 0; }
  p:first-of-type { margin-top: 0; }
  h3 {
    border-bottom: 4px solid ${aqua}20;
    padding-bottom: 0.7rem;
  }
  @media (max-width: 690px) {
    /* padding: 20px; */
    p { margin: 15px 0 0; }
  }
  @media (min-width: 900px) {
    span { display: block; }
  }
  img {
    width: 100%;
    border-radius: 15px;
  }
  &.map { padding: 8px; }
`

const Head = styled.header`
  color: white;
  padding: 40px 0 60px 0;
  margin: 0 auto;
  max-width: 730px;
  display: grid;
  justify-content: start;
  transition: padding 0.6s ease;
  
  /* Above */
  @media (min-width: 450px) {
    padding: 170px 0 90px 0;
  }
  @media (min-width: 1000px) {
    padding: 190px 0 105px 0;
  };

  /* Below */
  @media (max-width: 1000px) {
    max-width: 625px;
  }
`

const ContactFormHead = styled(Head)`
  padding-top: 0;
  position: relative;
  @media (min-width: 450px) {
    padding-top: 0;
  }
  @media (min-width: 1000px) {
    padding-top: 0;
  };
`

const ContactForm = styled.form`
  width: 100vw;
  height: 100%;
  background: ${cyan};
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${Card}:nth-last-of-type(-n+2) {
      grid-column: span 2
    }
    > 
  }
`


const CardWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: -120px auto 50px auto;
  padding: 0 35px 60px;
  /* Required for the additional div added with animated.div */
  > div {
    width: 100%;
    /* display: grid;
    justify-items: center; */
  }
  /* Above */
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${Card}:last-of-type {
      grid-column: span 2
    }
    > 
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    grid-gap: 25px;
  }
  /* Below */
  @media (max-width: 330px) {
    padding: 0 15px 60px;
  }
  @media (max-width: 450px) {
    padding: 0 20px 60px;
  }
`

const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Contact