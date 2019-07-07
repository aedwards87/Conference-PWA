import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Link } from "@reach/router";

import {
  Home,
  Programme,
  Speakers,
  Exhibitors,
  About,
  Contact,
  Error
} from './Pages/Index'


class App extends Component {

  state = { on: false }

  toggle = () => (
      this.setState({
          on: !this.state.on
      })
  )

  render () {
      const { on } = this.state
      return (
          <Router>
              
              <GlobalStyle />

              <Nav on={on} toggle={this.toggle} />
              <SmartNav on={on} toggle={this.toggle} /> 
          
              <Home exact path="/" component={Home} />
              <Programme path="/programme" component={Programme} />
              <Speakers path="/speakers" component={Speakers} />
              <Exhibitors path="/exhibitors" component={Exhibitors} />
              <About path="/about" component={About} />
              <Contact path="/contact" component={Contact} />
              <Error component={Error} />

          </Router>
      )
  }
}

export default App;
