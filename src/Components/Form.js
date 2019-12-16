import React from "react"
import styled from 'styled-components'

import { Card, CardWrapper, Head } from '../Elements/index'

const Form = ({ 
  name,
  contactStyle, 
  title, 
  message, 
  children, 
  topCurve, 
  bottomCurve, 
  bgColor,
  buttonColor,
  subject,
}) => {
  return (
    <ContactFormContainer>
      <TopCurve className={topCurve ? 'show' : null} bgColor={bgColor} />
      <ContactForm 
        name={name} 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        id={title}
        bgColor={bgColor}
        buttonColor={buttonColor}
        topCurve={topCurve}
      >
        <ContactFormHead >
          <h1>{title}</h1>
          <p>{message}</p>
        </ContactFormHead>
        <ContactFormFields as={CardWrapper} contactStyle={contactStyle} >
          <input type="hidden" name="form-name" value={name} />
          <label>
            Your Name: 
            <Card as="input" type="text" name="name" />
          </label>   
          <label>
            Your Email: 
            <Card as="input" type="email" name="email" />
          </label>
          <label className={subject ? 'show' : 'hide'}>
            Subject: 
            <Card as="input" type="text" name="subject" />
          </label>
          <label>
            Message: 
            <Card as="textarea" name="message" /> 
          </label>
          <button type="submit" >Send</button>
        </ContactFormFields>
      </ContactForm>
      <BottomCurve className={bottomCurve ? 'show' : null} bgColor={bgColor} />
    </ContactFormContainer>
  )
}



const TopCurve = styled.div`
  display: none;
  position: absolute;
  height: 400px;
  background: ${props => props.bgColor};
  border-radius: 100%;
  top: 50px;
  right: -30vw;
  left: -30vw;
  z-index: -2;
  box-shadow: 0 0 10px 0 rgb(0,0,0,0.1), 0 0px 30px 0 rgb(0,0,0,0.2);
  &.show {
    display: block;
  }
`

const BottomCurve = styled(TopCurve)`
  display: none;
  z-index: -2;
  background: ${props => props.bgColor};
  top: auto;
  bottom: 30px;
  &.show {
    display: block;
  }
`



const ContactFormFields = styled.div`
  > label {
    display: grid;
    grid-gap: 10px;
    color: white;
    width: 100%;
    @media (max-width: 450px) {
      text-indent: 15px;
    }
    &.hide {
      display: none;
    }
    &.show {
      display: grid;
    }
  }
  @media (min-width: 600px) {
    label:nth-last-of-type(-n+2) {
      grid-column: span 2
    }
  }
`


const ContactFormHead = styled(Head)`
  && {
    padding-top: 0;
    padding-bottom: 30px;
    @media (max-width: 700px) {
      margin: auto 35px;
    }
    @media (max-width: 450px) {
      padding-top: 40px;
      padding-bottom: 20px;
      h1 {
        margin-bottom: 35px;
      }
    }
  }
`




const ContactForm = styled.form`
  position: relative;
  margin-top: ${props => props.topCurve ? '100px' : '50px'};
  padding-top: ${props => props.topCurve ? '40px' : '0px'};
  background: ${props => props.bgColor};
  /* Normalises the margin */
  @media (min-width: 450px) {
    margin-top: 100px;
    padding-top: ${props => props.topCurve ? '80px' : '40px'};;
  }
  > ${CardWrapper} {
    margin-top: 0;
  }
  input, textarea {
    border: 0;
    height: 50px;
  }
  textarea {
    height: 300px;
    resize: none;
  }
  button {
    width: 100%;
    height: 50px;
    background: ${props => props.buttonColor}90;
    color: white;
    border: 0;
    border-radius: 20px;
    justify-self: start;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: width 0.6s ease;
    box-shadow: 0 0px 2px 0 rgba(13,0,76,0.1), 0 2px 6px 0 rgba(13,0,76,0.3);
    &:hover {
      background: ${props => props.buttonColor};
      box-shadow: 0 0px 3px 0 rgba(13,0,76,0.07), 0 2px 8px 0 rgba(13,0,76,0.15);
    }
    @media (min-width: 770px) {
      width: 80%;
    }
  };

  /* Above */
  /* @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ${Card}:nth-last-of-type(-n+2) {
      grid-column: span 2
    }
  } */
`


const ContactFormContainer = styled.section`
  position: relative;
  overflow: hidden;
  height: auto;
  margin-top: -100px;
  margin-bottom: -30px;
  padding-bottom: 150px; /* Allows bottom curve to be seen*/
`



export default Form
