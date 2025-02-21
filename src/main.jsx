import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from "./Components/HomePage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage/>
  </StrictMode>,
)
