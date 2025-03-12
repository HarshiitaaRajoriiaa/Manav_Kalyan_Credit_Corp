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


const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path="code-of-conduct" element={<CodeConduct/>}/>
      <Route path="career" element={<Carrer/>}/>
      <Route path="privacy-policy" element={<Privacy/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="about" element={<About/>}/>
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
