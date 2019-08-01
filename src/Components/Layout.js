import React from "react"
// import PropTypes from "prop-types"
// import styled from 'styled-components'

import Header from "./Header"
import Footer from "./Footer"
// import "./layout.css"


const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)







export default Layout
