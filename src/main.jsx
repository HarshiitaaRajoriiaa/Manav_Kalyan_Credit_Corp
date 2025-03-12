import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./Layout";
// import { Home } from "lucide-react";
import HomePage from "./Components/HomePage"
import CodeConduct from "./Components/CodeConduct";
import Carrer from "./Components/Carrer";
import Privacy from "./Components/Privacy";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import Legal from "./Components/Legal";
import Gold from "./Components/Loans/Gold";
import Home from "./Components/Loans/Home";
import Personal from "./Components/Loans/Personal";
import Vechile from "./Components/Loans/Vechile";
import Bussiness from "./Components/Loans/Bussiness";
import Daily from "./Components/Schemes/Daily";
import Fixed from "./Components/Schemes/Fixed";
import Monthly from "./Components/Schemes/Monthly";
import Recurring from "./Components/Schemes/Recurring";
import Saving from "./Components/Schemes/Saving";



const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path="code-of-conduct" element={<CodeConduct/>}/>
      <Route path="career" element={<Carrer/>}/>
      <Route path="privacy-policy" element={<Privacy/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="legal" element={<Legal/>}/>
      <Route path="gold-loan" element={<Gold/>}/>
      <Route path="home-loan" element={<Home/>}/>
      <Route path="personal-loan" element={<Personal/>}/>
      <Route path="Vehicle-loan" element={<Vechile/>}/>
      <Route path="bussiness-loan" element={<Bussiness/>}/>
      <Route path="daily-deposit" element={<Daily/>}/>
      <Route path="fixed-deposit" element={<Fixed/>}/>
      <Route path="monthly-income" element={<Monthly/>}/>
      <Route path="recurring-deposit" element={<Recurring/>}/>
      <Route path="saving-account" element={<Saving/>}/>
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
