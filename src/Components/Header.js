import React from "react"

import NavBar from './NavBar'
import NavBarPWA from './NavBarPWA'
import Toggle from './Toggle'


const isInStandaloneMode = () => (
  window.matchMedia('(display-mode: standalone)').matches
) || (
  window.navigator.standalone
)

const Header = () => (
  <Toggle>
    {({on, toggle}) => (
      <>
        {isInStandaloneMode() ? 
          <NavBarPWA on={on} toggle={toggle}/> 
          :
          <NavBar on={on} toggle={toggle}/>
        }
      </>
    )}
  </Toggle>
)


export default Header
