import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactImage from "../Images/contact.webp"; // Replace with your actual image path

export default function ContactUs() {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden scale-90">
        
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-3/5 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-sm mb-4">
            Have any questions? Reach out to us, and we’ll get back to you soon.
          </p>

          {/* Contact Info */}
          <div className="mb-4 space-y-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={18} className="text-orange-500" />
              <span className="text-sm">011-43594191</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail size={18} className="text-orange-500" />
              <span className="text-sm">contact@mkccsl.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin size={18} className="text-orange-500" />
              <span className="text-sm">Delhi, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-3">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full p-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-2/5">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
