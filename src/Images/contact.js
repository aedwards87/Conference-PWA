import React from "react"
import styled from 'styled-components' 

const ContactSVG = (props) => (
  <StyledContactSVG x="0px" y="0px" viewBox="0 0 24 24" height={props.height} color={props.color}  >
    <g><path d="M9.47527949,11.8916585 C9.45038523,11.9112595 9.42522366,11.9305926 9.39979763,11.9496519 C8.86682822,12.3502685 8.13294341,12.3501828 7.60074518,11.9499088 C7.57507401,11.93067 7.54967195,11.9111524 7.52454193,11.891362 C7.38650159,12.2202143 7.13481756,12.4920267 6.81241792,12.652608 L5.96482996,13.0769018 C5.60916802,13.2543584 5.33915553,13.5659722 5.21267502,13.9454115 L5.19454438,13.9995 L11.8055794,13.9995 L11.7872584,13.9446139 C11.6610445,13.5659722 11.391032,13.2543584 11.0347821,13.076608 L10.1886794,12.653056 C9.86517547,12.4919238 9.61267924,12.219739 9.47527949,11.8916585 L9.47527949,11.8916585 Z M10.2763952,11.0443865 L10.3739724,11.4334432 C10.40868,11.5737609 10.5045205,11.693193 10.6354179,11.758392 L11.48183,12.1820982 C12.0753527,12.4782348 12.5258662,12.9981597 12.7358751,13.6281866 L12.9738751,14.3411866 C13.0819612,14.6649906 12.8409674,14.9995 12.4996,14.9995 L4.4996,14.9995 C4.15796725,14.9995 3.91694621,14.6645076 4.02552498,14.3405885 L4.26425835,13.6283861 C4.47433381,12.9981597 4.92484727,12.4782348 5.51778208,12.182392 L6.36567937,11.757944 C6.49520606,11.6934288 6.59098484,11.5739065 6.62662121,11.4318629 L6.72373256,11.0446706 C6.25806121,10.3802239 5.9996,9.5811571 5.9996,8.7498 L5.9996,8.4998 C5.9996,7.11965763 7.11945763,5.9998 8.4996,5.9998 C9.88043573,5.9998 10.9996,7.11935085 10.9996,8.4998 L10.9996,8.7498 C10.9996,9.58121198 10.741564,10.3801158 10.2763952,11.0443865 L10.2763952,11.0443865 Z M7.65054086,10.61515 C7.6547778,10.6202364 7.65891158,10.6254037 7.66294005,10.6306482 C7.8182918,10.8234724 7.99853338,10.9983652 8.20114002,11.1502056 C8.3781426,11.2833315 8.6220574,11.2833315 8.79905998,11.1502056 C9.55542281,10.5833613 9.9996,9.69477535 9.9996,8.7498 L9.9996,8.4998 C9.9996,7.6715583 9.32807366,6.9998 8.4996,6.9998 C7.67174237,6.9998 6.9996,7.67194237 6.9996,8.4998 L6.9996,8.7498 C6.9996,9.43463884 7.23345316,10.0902228 7.65056215,10.6151325 L7.65054086,10.61515 Z M12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L17.5,8 C17.7761424,8 18,8.22385763 18,8.5 C18,8.77614237 17.7761424,9 17.5,9 L12.5,9 Z M12.5,11 C12.2238576,11 12,10.7761424 12,10.5 C12,10.2238576 12.2238576,10 12.5,10 L15.5,10 C15.7761424,10 16,10.2238576 16,10.5 C16,10.7761424 15.7761424,11 15.5,11 L12.5,11 Z M2,4.5 C2,4.22385763 2.22385763,4 2.5,4 L20.5,4 C20.7761424,4 21,4.22385763 21,4.5 L21,18.5 C21,18.7761424 20.7761424,19 20.5,19 L17.5,19 C17.2238576,19 17,18.7761424 17,18.5 L17,17.5 C17,17.2237195 16.776435,17 16.5,17 C16.223565,17 16,17.2237195 16,17.5 L16,18.5 C16,18.7761424 15.7761424,19 15.5,19 L12.5,19 C12.2238576,19 12,18.7761424 12,18.5 L12,17.5 C12,17.2237195 11.776435,17 11.5,17 C11.223565,17 11,17.2237195 11,17.5 L11,18.5 C11,18.7761424 10.7761424,19 10.5,19 L7.5,19 C7.22385763,19 7,18.7761424 7,18.5 L7,17.5 C7,17.2237195 6.77643497,17 6.5,17 C6.22356503,17 6,17.2237195 6,17.5 L6,18.5 C6,18.7761424 5.77614237,19 5.5,19 L2.5,19 C2.22385763,19 2,18.7761424 2,18.5 L2,4.5 Z M3,5 L3,18 L5,18 L5,17.5 C5,16.6715894 5.67112557,16 6.5,16 C7.32887443,16 8,16.6715894 8,17.5 L8,18 L10,18 L10,17.5 C10,16.6715894 10.6711256,16 11.5,16 C12.3288744,16 13,16.6715894 13,17.5 L13,18 L15,18 L15,17.5 C15,16.6715894 15.6711256,16 16.5,16 C17.3288744,16 18,16.6715894 18,17.5 L18,18 L20,18 L20,5 L3,5 Z"  ></path></g>
      
  </StyledContactSVG>
)


const StyledContactSVG = styled.svg`
  fill: ${props => props.color}};
  height: ${props => props.height};
  @media (min-width: 450px) {
    height: ${props => props.aboveHeight}
  }
`

export default ContactSVG