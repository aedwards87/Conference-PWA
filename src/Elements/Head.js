import styled from 'styled-components'


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
  a:hover { color: ${props => props.linkColor}; }

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


export default Head