import React from "react";
import logo from "../Images/logo.png"
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-blue-900 py-8">
      <div className="container mx-auto px-4">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div>
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <p className="mt-2 text-black">The Society was established in the year 2011 and has successfully completed 10 years of service to its members.</p>
          </div>

          {/* Our Schemes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Our Schemes</h2>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-700">Fixed Deposit</a></li>
              <li><a href="#" className="hover:text-blue-700">Recurring Deposit</a></li>
              <li><a href="#" className="hover:text-blue-700">Monthly Income</a></li>
              <li><a href="#" className="hover:text-blue-700">Daily Deposit</a></li>
              <li><a href="#" className="hover:text-blue-700">Saving Account</a></li>
            </ul>
          </div>

          {/* Our Loans */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Our Loans</h2>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-blue-700">Gold Loan</a></li>
              <li><a href="#" className="hover:text-blue-700">Business Loan</a></li>
              <li><a href="#" className="hover:text-blue-700">Personal Loan</a></li>
              <li><a href="#" className="hover:text-blue-700">Home Loan</a></li>
              <li><a href="#" className="hover:text-blue-700">Vehicle Loan</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-black ">Manav Kalyan Credit Cooperative Society Ltd.</p>
            <p className="text-black ">Delhi, India</p>
            <p className="text-black  mt-2">📞 Mobile: <a href="tel:011-43594191" className="hover:text-black ">011-43594191</a></p>
            <p className="text-black ">📧 E-mail: <a href="mailto:contact@mkccsl.com" className="hover:text-blue-300">contact@mkccsl.com</a></p>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-black border-t border-blue-700 pt-4">
          &copy; 2011 Manav Kalyan Credit Cooperative Society Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
