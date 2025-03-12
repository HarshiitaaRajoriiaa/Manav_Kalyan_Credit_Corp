import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Schemes from './Schemes'
import ContactUs from './ContactUs'
import LandingPage from './LandingPage'

export default function HomePage() {
  return (
    <>
        {/* <Header/> */}
        <LandingPage/>
        <Schemes/>
        <AboutUs/>
        <ContactUs/>
    </>
    // <div>HomePage</div>
  )
}
