import React from "react"
// import PropTypes from "prop-types"
// import styled from 'styled-components'

import Header from "./Header"
import Footer from "./Footer"
// import "./layout.css"


const Layout = ({ children }) => (
  <>
    <Header />
    <main 
      // style={{marginTop: 70}}  
      // I should of done this from the start, so the body starts stright after the nav so things didn't get hidden under the nav bar
    >
      {children}
    </main>
    <Footer />
  </>
)







export default Layout
