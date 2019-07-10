import React from "react"
// import PropTypes from "prop-types"
// import styled from 'styled-components'

import Header from "./Header"
// import "./layout.css"


const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)







export default Layout
