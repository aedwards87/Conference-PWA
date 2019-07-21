import React from "react"
import styled from 'styled-components'
import { Spring, animated } from 'react-spring/renderprops'
import { Link } from "@reach/router";

import { CurvedBG } from '../Elements/index'
import { darkBlue } from '../Utilities/index'


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
                  The fastest way you can get in touch with our team is to use our <Link to="/">contact form</Link>. 
                {/* #contactform */}
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




  </>
)


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


const AnimCurvedBG = animated(CurvedBG)
const AnimHead = animated(Head)

export default Contact