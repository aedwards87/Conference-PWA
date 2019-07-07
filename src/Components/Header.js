import React from "react"

import NavBar from './NavBar'
import NavMenu from './NavMenu'

import Toggle from './Toggle'

const Header = () => (
  <Toggle>
    {({on, toggle}) => (
      <>
        <NavBar on={on} toggle={toggle} />
        <NavMenu on={on} toggle={toggle} />
      </>
    )}
  </Toggle>
)

export default Header
