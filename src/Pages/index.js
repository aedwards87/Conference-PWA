import React from 'react';
import { Router } from "@reach/router";
import './style.css'

import Home from './Home'
import Programme from './Programme'
import Speakers from './Speakers'
import Exhibitors from './Exhibitors'
import VenueMap from './Venuemap'
import About from './About'
import Contact from './Contact'
import NotFoundPage from './404'

import Layout from '../Components/Layout'

const IndexPage = () => (
  <Layout>
    <Router>

      <Home exact path="/" />
      <Programme path="/programme" />
      <Speakers path="/speakers" />
      <Exhibitors path="/exhibitors" />
      <VenueMap path="/venue-map" />
      <About path="/about" />
      <Contact path="/contact" />
      <NotFoundPage default />
      
    </Router>
  </Layout>
)


export default IndexPage;
