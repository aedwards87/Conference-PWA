import React from 'react'
import { Router } from '@reach/router'
import './style.css'

import Home from './Home'
import Programme from './Programme'
import Speakers from './Speakers'
import Exhibitors from './Exhibitors'
import VenueMap from './Venuemap'
import About from './About'
import Contact from './Contact'
import NotFoundPage from './404'
import { ScrollToTop } from '../Components/ScrollToTop'

import Speaker from './Speaker'
import Exhibitor from './Exhibitor'

import Layout from '../Components/Layout'

const IndexPage = () => (
  <Layout>
    <Router>
      <ScrollToTop path="/">
        <Home exact path="/" />
        <Programme path="/programme" />
        <Speakers path="/speakers" />
        <Speaker path="/speakers/:id" />
        <Exhibitors path="/exhibitors" />
        <Exhibitor path="/exhibitors/:id" />
        <VenueMap path="/venue-map" />
        <About path="/about" />
        <Contact path="/contact" />
        <NotFoundPage default />
      </ScrollToTop>
    </Router>
  </Layout>
)

export default IndexPage
