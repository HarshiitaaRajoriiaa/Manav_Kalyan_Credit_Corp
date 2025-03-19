import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Schemes from './Schemes'
import ContactUs from './ContactUs'
import LandingPage from './LandingPage'
import Whatapp from './whatapp'

export default function HomePage() {
  return (
    <>
        {/* <Header/> */}
        <LandingPage/>
        <Whatapp/>
        <Schemes/>
        <AboutUs/>
        <ContactUs/>
    </>
    // <div>HomePage</div>
  )
}
