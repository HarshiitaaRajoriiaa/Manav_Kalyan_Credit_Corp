import React, { useEffect } from "react";
import aboutImg from "../Images/1.webp"; // Replace with your actual image
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set animation duration
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Image */}
        <div 
          className="w-full md:w-1/2 transform transition duration-500 hover:scale-105"
          data-aos="fade-right" // Fade animation on scroll
        >
          <img 
            src={aboutImg} 
            alt="About Us" 
            className="rounded-lg shadow-lg h-xl"
          />
        </div>

        {/* Right Side - Text */}
        <div 
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12"
          data-aos="fade-left" // Fade animation on scroll
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome To <span className="text-blue-400"> Manav Kalyan Credit Cooperative Society Ltd.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
          To accept deposit from the members of the Company under saving, Deposits, Fixed deposits, Recurring Deposits and such other saving schemes that may from time to time be decided by the company.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Fixed Deposit (F.D), Recurring Deposit (R.D), Saving Deposit and Loan Schemes under various schemes formulated from time to time by the company and to provide Interest or benefit on the Deposits, as is fit for and beneficial to the company and to the members as per the rules & regulation or guideline of Reserve Bank of India (RBI), Ministry of Corporate Affairs and Regulatory Authority on Society.
          </p>
        </div>
      </div>
    </div>
  );
}
