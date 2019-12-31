import React from 'react'
import styled from 'styled-components'
import { teal, burgundy } from '../Utilities/index'

const NotFoundPage = () => (
  <MakePretty
    style={{
      marginTop: 100,
      marginLeft: 20
    }}
  >
    {/* <SEO title="404: Not found" /> */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MakePretty>
)

const MakePretty = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  h1 {
    color: ${teal};
  }
  p {
    color: ${burgundy};
  }
  /* FOR STANDALONE */
  @media (max-width: 450px) {
    margin-top: 0;
  }
`

export default NotFoundPage
