import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Schemes from './Schemes'
import Feedback from './Feedback'
import ContactUs from './ContactUS'
import LandingPage from './LandingPage'

export default function HomePage() {
  return (
    <>
        <Header/>
        <LandingPage/>
        <Schemes/>
        <AboutUs/>
        <ContactUs/>
        {/* <Feedback/> */}
        <Footer/>
    </>
    // <div>HomePage</div>
  )
}
