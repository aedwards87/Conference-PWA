import React from "react"
// import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./Header"
// import "./layout.css"


const Layout = ({ children }) => (
    <>
        <Header />
        <Body>{children}</Body>
    </>
)

const Body = styled.main`
  margin-top: 0px;
  @media (min-width: 450px) {
    margin-top: 65px
  }
`



export default Layout
